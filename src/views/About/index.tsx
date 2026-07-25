import AboutMePhoto from '../../assets/AboutMePhoto.jpg';
import styles from './index.module.css';
import { Button } from '@chakra-ui/react';
import { LuExternalLink } from 'react-icons/lu';

const RESUME_URL = 'https://drive.google.com/file/d/1A9WbnL1r5rb-qPFIXscR546g-McTT3Be/view?usp=sharing';

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.avatar}>
          <img className={styles.photo} src={AboutMePhoto} alt='about-me'></img>
        </div>
        <div className={styles.intro}>
          <div className={styles['intro-text']}>
            I'm Sabrina Chen, a motion designer who is passionate about bringing brand to life using motion and storytelling.
            I enjoy creating animations that drives engagement across digital platforms.
          </div>
          <div className={styles['resume-link-wrapper']}>
            <div className={styles['press-text']}>
              <div>
                <p>
                  Feel free to reach out — I’m always excited to connect!
                </p>
              </div>
              <a className={styles['press-link']} href={'mailto:chen.chiamin16@gmail.com'} target='_blank' rel="noreferrer noopener">
                chen.chiamin16@gmail.com
              </a>
            </div>
          </div>
          <Button
            asChild
            className={styles['resume-button']}
            variant="solid"
            size="lg"
            borderRadius="pill"
            bg="accent.solid"
            color="neutral.950"
            _hover={{ bg: 'accent.solidHover' }}
          >
            <a href={RESUME_URL} target="_blank" rel="noopener noreferrer">
              Resume <LuExternalLink />
            </a>
          </Button>
        </div>
      </div>

    </div>
  );
};

export default About;