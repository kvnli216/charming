import { useEffect, useRef, type CSSProperties, type ReactNode } from 'react';
import styles from './index.module.css';

interface SkeletonMediaProps {
  /** Tiny low-res image shown (blurred by upscaling) behind the media while it loads. Omit to fall back to a plain pulsing skeleton. */
  placeholder?: string;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}

const SkeletonMedia = ({
  placeholder,
  className,
  style,
  children,
}: SkeletonMediaProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const media = ref.current?.querySelector('img, video') as
      | HTMLImageElement
      | HTMLVideoElement
      | null;
    if (!media) return;

    const markLoaded = () => ref.current?.classList.add(styles.loaded);

    if (media instanceof HTMLVideoElement) {
      if (media.readyState >= 2) {
        markLoaded();
        return;
      }
      media.addEventListener('loadeddata', markLoaded);
      media.addEventListener('canplay', markLoaded);
      return () => {
        media.removeEventListener('loadeddata', markLoaded);
        media.removeEventListener('canplay', markLoaded);
      };
    }

    if (media.complete && media.naturalWidth > 0) {
      markLoaded();
      return;
    }
    media.addEventListener('load', markLoaded);
    return () => media.removeEventListener('load', markLoaded);
  }, [children]);

  return (
    <div
      ref={ref}
      className={`${styles.frame} ${className ?? ''}`}
      style={{
        position: 'relative',
        ...(placeholder ? { backgroundImage: `url(${placeholder})` } : {}),
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default SkeletonMedia;
