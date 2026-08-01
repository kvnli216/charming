import { useState } from "react";
import { Dialog, IconButton } from "@chakra-ui/react";
import { LuX } from "react-icons/lu";
import styles from "./index.module.css";
import SkeletonMedia from "../SkeletonMedia";
import type { ProcessMilestone } from "../../content/types";

interface ProcessTimelineProps {
  milestones: ProcessMilestone[];
}

const pad = (n: number) => String(n).padStart(2, "0");

const Tags = ({ tags }: { tags?: string[] }) => {
  const list = (tags ?? []).filter(Boolean);
  if (list.length === 0) return null;

  return (
    <div className={styles["tags"]}>
      {list.map((tag, i) => (
        <span key={tag} className={i === 0 ? styles["tag"] : styles["tag--alt"]}>
          {tag}
        </span>
      ))}
    </div>
  );
};

// Gallery tiles have no per-tile src yet, so they always render as plain
// pulsing skeletons. A "hero" milestone renders its real image (once src is
// set) via SkeletonMedia for the fade-in-on-load treatment, sized to the
// asset's own aspect ratio so the frame doesn't crop it; until then it falls
// back to the same plain skeleton, at that same aspect ratio. Real images
// open the full-resolution lightbox on click.
const Media = ({
  media,
  onOpen,
}: {
  media: ProcessMilestone["media"];
  onOpen: (src: string) => void;
}) => {
  if (media.type === "gallery") {
    const tiles = media.tiles ?? 6;
    return (
      <div className={styles["gallery"]}>
        {Array.from({ length: tiles }).map((_, i) => (
          <div key={i} className={styles["skeleton-tile"]} />
        ))}
      </div>
    );
  }

  const aspectRatio = media.aspectRatio ?? 16 / 9;

  if (media.src) {
    const src = media.src;
    return (
      <button
        type="button"
        className={styles["hero-button"]}
        onClick={() => onOpen(src)}
        aria-label="View reference image full size"
      >
        <SkeletonMedia
          placeholder={media.placeholder}
          className={styles["hero-media"]}
          style={{ aspectRatio }}
        >
          <img className={styles["hero-img"]} src={src} alt="Reference" />
        </SkeletonMedia>
      </button>
    );
  }

  return <div className={styles["skeleton-hero"]} style={{ aspectRatio }} />;
};

const MilestonePanel = ({
  milestone,
  onOpenLightbox,
}: {
  milestone: ProcessMilestone;
  onOpenLightbox: (src: string) => void;
}) => (
  <>
    <h3 className={styles["title"]}>{milestone.title}</h3>
    <span className={styles["field-label"]}>Description</span>
    <div className={styles["copy"]}>{milestone.description}</div>
    <Tags tags={milestone.tags} />
    <span className={styles["field-label"]}>Reference</span>
    <Media media={milestone.media} onOpen={onOpenLightbox} />
  </>
);

const ProcessTimeline = ({ milestones }: ProcessTimelineProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  if (milestones.length === 0) return null;

  const closeLightbox = () => setLightboxSrc(null);

  return (
    <div className={styles["component"]}>
      <div className={styles["desktop"]}>
        <div className={styles["rail"]}>
          {milestones.map((m, i) => (
            <button
              key={`${m.title}-${i}`}
              type="button"
              className={`${styles["row"]} ${i === activeIndex ? styles["active"] : ""}`}
              onClick={() => setActiveIndex(i)}
              aria-current={i === activeIndex}
            >
              <span className={styles["num"]}>{pad(i + 1)}</span>
              <span className={styles["row-title"]}>{m.title}</span>
            </button>
          ))}
        </div>
        <div className={styles["panel"]}>
          <MilestonePanel milestone={milestones[activeIndex]} onOpenLightbox={setLightboxSrc} />
        </div>
      </div>

      <div className={styles["accordion"]}>
        {milestones.map((m, i) => {
          const open = openIndex === i;
          return (
            <div
              key={`${m.title}-${i}`}
              className={`${styles["accordion-row"]} ${open ? styles["open"] : ""}`}
            >
              <button
                type="button"
                className={styles["accordion-head"]}
                onClick={() => setOpenIndex(open ? null : i)}
                aria-expanded={open}
              >
                <span className={styles["num"]}>{pad(i + 1)}</span>
                <span className={styles["accordion-title"]}>{m.title}</span>
                <span className={styles["chevron"]} aria-hidden="true">⌄</span>
              </button>
              <div className={styles["accordion-wrap"]}>
                <div className={styles["accordion-body"]}>
                  <div className={styles["panel-inner"]}>
                    <MilestonePanel milestone={m} onOpenLightbox={setLightboxSrc} />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <Dialog.Root
        open={Boolean(lightboxSrc)}
        onOpenChange={(details) => {
          if (!details.open) closeLightbox();
        }}
      >
        <Dialog.Backdrop bg="surface.overlay" backdropFilter="blur(8px)" />
        <Dialog.Positioner
          onClick={closeLightbox}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Dialog.Content
            bg="transparent"
            boxShadow="none"
            maxWidth="none"
            margin="0"
            display="flex"
            alignItems="center"
            justifyContent="center"
            padding="2"
            overflow="hidden"
            _focus={{ outline: "none" }}
            onClick={(e) => e.stopPropagation()}
          >
            <IconButton
              aria-label="Close"
              onClick={closeLightbox}
              variant="ghost"
              position="absolute"
              right="2"
              top="2"
              color="fg.onDark"
              _hover={{ bg: "whiteAlpha.200" }}
              zIndex="1"
            >
              <LuX />
            </IconButton>
            {lightboxSrc && (
              <img
                src={lightboxSrc}
                alt="Reference (full size)"
                style={{
                  maxWidth: "95vw",
                  maxHeight: "95vh",
                  width: "auto",
                  height: "auto",
                  objectFit: "contain",
                }}
                onClick={(e) => e.stopPropagation()}
                draggable={false}
              />
            )}
          </Dialog.Content>
        </Dialog.Positioner>
      </Dialog.Root>
    </div>
  );
};

export default ProcessTimeline;
