import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import styles from "./index.module.css";
import WorkCard from "../../components/WorkCard";
import { projects } from "../../content/projects";
import { routes } from "../../routes";

const reelSrc = "/video/reel.mp4";

interface HomeProps {
  isMobile: boolean;
}

const Home = ({ isMobile }: HomeProps) => {
  const featuredProjects = projects.slice(0, 3);

  return (
    <div className={`${styles.container} ${isMobile && styles.mobile}`}>
      <section className={styles.hero}>
        <span className={styles.eyebrow}>Motion Designer · NYC</span>
        <h1 className={styles.title}>
          I animate ideas for brands that want their story to move.
        </h1>
        <p className={styles.sub}>
          I'm Sabrina Chen, a motion designer and illustrator who brings brand
          stories to life through motion.
        </p>
        <div className={styles.actions}>
          <Button asChild variant="solid" size="lg">
            <Link to={routes.work.path}>View work</Link>
          </Button>
        </div>
      </section>

      <section className={styles["reel-section"]}>
        <span className={styles.eyebrow}>2026 Reel</span>
        <div className={styles.reel}>
          <video
            className={styles["reel-video"]}
            controls
            preload="metadata"
            playsInline
          >
            <source src={reelSrc} type="video/mp4" />
          </video>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles["section-head"]}>
          <h2>Selected work</h2>
          <Link to={routes.work.path}>View all work →</Link>
        </div>
        <div className={styles.grid}>
          {featuredProjects.map(({ label, route, preview, subtitle, tags }) => (
            <WorkCard
              key={route}
              label={label}
              gif={preview}
              route={route}
              subtitle={subtitle}
              tags={tags}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
