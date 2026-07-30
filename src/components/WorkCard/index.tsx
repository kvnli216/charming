import styles from "./index.module.css";
import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import SkeletonMedia from "../SkeletonMedia";

interface WorkCardProps {
  gif: string;
  placeholder?: string;
  label?: ReactNode;
  route: string;
  subtitle?: ReactNode;
  tags?: string[];
}

const WorkCard = ({
  gif,
  placeholder,
  label,
  route,
  subtitle,
  tags,
}: WorkCardProps) => {
  const pills = [...(tags ?? [])].filter(Boolean);

  return (
    <Link to={route} className={styles["card"]}>
      <SkeletonMedia
        placeholder={placeholder}
        style={{ position: "absolute", inset: 0 }}
      >
        <img
          className={styles["work-gif"]}
          src={gif}
          alt={typeof label === "string" ? label : ""}
        />
      </SkeletonMedia>
      <div className={styles["overlay"]}>
        <h4 className={styles["title"]}>{label}</h4>
        {pills.length > 0 && (
          <div className={styles["meta"]}>
            {pills.map((pill, i) => (
              <span key={i} className={styles["tag"]}>
                {pill}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
};

export default WorkCard;
