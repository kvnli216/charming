import AboutMePhoto from "../../assets/AboutMePhoto.jpg";
import styles from "./index.module.css";
import { Button } from "@chakra-ui/react";
import { LuExternalLink, LuMail } from "react-icons/lu";

const RESUME_URL =
  "https://drive.google.com/file/d/1A9WbnL1r5rb-qPFIXscR546g-McTT3Be/view?usp=sharing";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.photo}>
        <img className={styles.image} src={AboutMePhoto} alt="Sabrina Chen" />
      </div>
      <div className={styles.intro}>
        <span className={styles.eyebrow}>About</span>
        <p className={styles.bio}>
          I'm Sabrina Chen, a motion designer who is passionate about bringing
          brand to life using motion and storytelling. I enjoy creating
          animations that drive engagement across digital platforms.
        </p>
        <p className={styles.sub}>
          Feel free to reach out — I'm always excited to connect!
        </p>
        <div className={styles.actions}>
          <Button asChild variant="outline" size="lg">
            <a href={RESUME_URL} target="_blank" rel="noopener noreferrer">
              Resume <LuExternalLink />
            </a>
          </Button>
          <Button asChild variant="solid" size="lg">
            <a href="mailto:chen.chiamin16@gmail.com">
              Let's talk! <LuMail />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default About;
