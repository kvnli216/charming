import SkeletonMedia from '../../components/SkeletonMedia';
import Scene1 from '../../assets/Illustrations/Scene01_square.gif';
import Scene1Skeleton from '../../assets/Illustrations/Scene01_square_small.jpg';
import Scene2 from '../../assets/Illustrations/Scene02_square.gif';
import Scene2Skeleton from '../../assets/Illustrations/Scene02_square_small.jpg';
import Scene3 from '../../assets/Illustrations/Scene03_square.gif';
import Scene3Skeleton from '../../assets/Illustrations/Scene03_square_small.jpg';
import Scene4 from '../../assets/Illustrations/Scene04_square.gif';
import Scene4Skeleton from '../../assets/Illustrations/Scene04_square_small.jpg';
import Scene5 from '../../assets/Illustrations/Scene05_square.gif';
import Scene5Skeleton from '../../assets/Illustrations/Scene05_square_small.jpg';
import Scene6 from '../../assets/Illustrations/Scene06_square.gif';
import Scene6Skeleton from '../../assets/Illustrations/Scene06_square_small.jpg';
import Scene7 from '../../assets/Illustrations/Scene07_square.gif';
import Scene7Skeleton from '../../assets/Illustrations/Scene07_square_small.jpg';
import Scene8 from '../../assets/Illustrations/Scene08_square.gif';
import Scene8Skeleton from '../../assets/Illustrations/Scene08_square_small.jpg';
import Scene9 from '../../assets/Illustrations/Scene09_square.gif';
import Scene9Skeleton from '../../assets/Illustrations/Scene09_square_small.jpg';
import Scene10 from '../../assets/Illustrations/Scene10_square.gif';
import Scene10Skeleton from '../../assets/Illustrations/Scene10_square_small.jpg';
import Scene11 from '../../assets/Illustrations/Scene11_square.gif';
import Scene11Skeleton from '../../assets/Illustrations/Scene11_square_small.jpg';
import Scene12 from '../../assets/Illustrations/Scene12_square.gif';
import Scene12Skeleton from '../../assets/Illustrations/Scene12_square_small.jpg';
import styles from './index.module.css';

const illustrations = [
  { src: Scene1, skeleton: Scene1Skeleton },
  { src: Scene2, skeleton: Scene2Skeleton },
  { src: Scene3, skeleton: Scene3Skeleton },
  { src: Scene4, skeleton: Scene4Skeleton },
  { src: Scene5, skeleton: Scene5Skeleton },
  { src: Scene6, skeleton: Scene6Skeleton },
  { src: Scene7, skeleton: Scene7Skeleton },
  { src: Scene8, skeleton: Scene8Skeleton },
  { src: Scene9, skeleton: Scene9Skeleton },
  { src: Scene10, skeleton: Scene10Skeleton },
  { src: Scene11, skeleton: Scene11Skeleton },
  { src: Scene12, skeleton: Scene12Skeleton },
];

interface CardProps {
  skeleton: string;
  src: string;
  isMobile: boolean;
}

const Card = ({
  skeleton,
  src,
  isMobile,
}: CardProps) => {
  return (
    <SkeletonMedia
      placeholder={skeleton}
      className={`${styles['skeleton']} ${isMobile && styles['mobile']}`}
    >
      <img className={`${styles['work-card']} ${isMobile && styles['mobile']}`} src={src} alt='' loading='lazy' />
    </SkeletonMedia>
  );
};

interface IllustrationProps {
  isMobile: boolean;
}

const Illustration = ({ isMobile }: IllustrationProps) => {

  return (
    <div className={`${styles['container']} ${isMobile && styles['mobile']}`}>
      {illustrations.map(({ src, skeleton }, i) => {
        return (
          <Card
            key={`illustration-${src}-${i}`}
            skeleton={skeleton}
            src={src}
            isMobile={isMobile}
          />
        );
      })}
    </div>
  );
};

export default Illustration;


