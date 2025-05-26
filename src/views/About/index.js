import React from 'react';
import AboutMePhoto from '../../assets/AboutMePhoto2.jpg';
import styles from './index.module.css';
import resume from '../../assets/resume/Resume_0318.pdf';
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
            Textures, Lines, and Motion:
            <br />
            Welcome to My Illustrated Universe!
            <br />
            <br />
            I'm Sabrina Chen.
            I'm a motion designer who is passionate about bringing brand to life using motion and storytelling.
            With three years background of social media marking, I enjoy creating animations that drives engagement across digital platforms.
            <br />
            <br />
            I'm currently exploring new creative opportunities as a passionate Junior Motion Designer.
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
              Contact me!
              <br />
              <a className={styles['press-link']} href={'mailto:chen.chiamin16@gmail.com'} target='_blank' rel="noreferrer noopener">
                chen.chiamin16@gmail.com
              </a>
            </div>
            <Button className={styles['resume-button']} color='primary' variant='contained'>
              <a className={styles['resume-link']} href={resume} download='Sabrina Resume 2024.pdf'>Download Resume</a>
            </Button>
          </div>
        </div>
      </div>

    </div>
  );
};

About.propTypes = {};

export default About;