import React from 'react';
import AboutMePhoto from '../../assets/AboutMePhoto2.jpg';
import styles from './index.module.css';
import resume from '../../assets/resume/scresume_2026.pdf';
import { Button } from '@mui/material';

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
              Press:
              <br />
              <a className={styles['press-link']} href={'https://voyagela.com/interview/conversations-with-sabrina-chen/'} target='_blank' rel="noreferrer">
                Voyagela Interview
              </a>
            </div>
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
          <Button className={styles['resume-button']} color='primary' variant='contained'>
            <a className={styles['resume-link']} href={resume} download='Sabrina Resume 2024.pdf'>Download Resume</a>
          </Button>
        </div>
      </div>

    </div>
  );
};

About.propTypes = {};

export default About;