import { useState } from "react";
import styles from "./index.module.css";
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

// Placeholder-only: media has no src/placeholder yet, so this renders a
// plain pulsing skeleton. Once real assets land, switch to SkeletonMedia
// (src/components/SkeletonMedia) + <img> for the fade-in-on-load treatment.
const Media = ({ media }: { media: ProcessMilestone["media"] }) => {
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
  return <div className={styles["skeleton-hero"]} />;
};

const MilestonePanel = ({ milestone }: { milestone: ProcessMilestone }) => (
  <>
    <h3 className={styles["title"]}>{milestone.title}</h3>
    <span className={styles["field-label"]}>Description</span>
    <p className={styles["copy"]}>{milestone.description}</p>
    <Tags tags={milestone.tags} />
    <span className={styles["field-label"]}>Reference</span>
    <Media media={milestone.media} />
  </>
);

const ProcessTimeline = ({ milestones }: ProcessTimelineProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (milestones.length === 0) return null;

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
              <span className={styles["row-text"]}>
                <span className={styles["row-title"]}>{m.title}</span>
                <span className={styles["row-phase"]}>{m.phase}</span>
              </span>
            </button>
          ))}
        </div>
        <div className={styles["panel"]}>
          <MilestonePanel milestone={milestones[activeIndex]} />
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
                    <MilestonePanel milestone={m} />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProcessTimeline;
