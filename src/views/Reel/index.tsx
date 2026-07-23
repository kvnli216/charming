import styles from "./index.module.css";

const reelUrl = "https://player.vimeo.com/video/1205470853";
const title = "MOTION REEL";

interface ReelProps {
  isMobile: boolean;
}

const Reel = ({ isMobile }: ReelProps) => {
  return (
    <>
      {isMobile ? (
        <div className={styles.container}>
          <div className={styles.description}>
            Hi, I'm <span className={styles["white-text"]}>Sabrina Chen</span>.
            <br />
            A motion designer and illustratorbased in NYC.
            <br />
            Check out my reel!
            <br />I love illustrations and dynamic visuals.
          </div>
          <div
            className={`${styles["content"]} ${isMobile && styles["mobile"]}`}
          >
            <iframe
              className={`${styles["iframe-video"]} ${isMobile && styles["mobile"]}`}
              title={title}
              src={reelUrl}
              frameBorder="0"
              allow="autoplay; fullscreen"
              allowFullScreen
            />
          </div>
        </div>
      ) : (
        <div className={styles.container}>
          <div className={styles.description}>
            Hi, I'm <span className={styles["white-text"]}>Sabrina Chen</span>.
            <br />
            A motion designer and illustrator based in NYC.
            <br />
            Check out my reel!
          </div>
          <div className={styles.content}>
            <iframe
              className={styles["iframe-video"]}
              title={title}
              src={reelUrl}
              frameBorder="0"
              allow="autoplay; fullscreen"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Reel;
