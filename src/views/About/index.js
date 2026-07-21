import React from 'react';
import AboutMePhoto from '../../assets/AboutMePhoto.jpg';
import styles from './index.module.css';
import { Button } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

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
            className={styles['resume-button']}
            variant="contained"
            color="primary"
            component="a"
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            endIcon={<OpenInNewIcon />}
          >
            Resume
          </Button>
        </div>
      </div>

    </div>
  );
};

About.propTypes = {};

export default About;