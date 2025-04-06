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
      <div className={styles.content}>
        <div className={styles.section}>
          <h3>Education</h3>
          <div>
            <b>School of Visual Arts</b>
            <br />
            MFA in Computer Arts
            <br />
            Class of 2024
            <br />
          </div>
          <div>
            <b>National Taiwan Normal University</b>
            <br />
            Master in Graphic Arts and Communications
            <br />
            Class of 2018
            <br />
          </div>
          <div>
            <b>National Chiayi University</b>
            <br />
            Bachelor of Humanities and Arts in Foreign Languages
            <br />
            Class of 2016
            <br />
          </div>
        </div>
        <div className={styles.section}>
          <h3>Work Experience</h3>
          <div>
            Skycar Creative
            <br />
            <b>Motion Design Intern</b> - San Francisco
            <br />
          </div>
          <div>
            WebTVAsia
            <br />
            <b>Integrated Marketing Specialist</b> - Taipei City, Taiwan
            <br />
          </div>
          <div>
            National Taiwan Normal University,
            <br />
            Graphic Arts and Communications, ATA Lab
            <br />
            <b>Motion Design Assistant</b> - Taipei City, Taiwan
            <br />
          </div>
        </div>
        <div className={styles.section}>
          <h3>Skills</h3>
          Adobe After Effects
          <br />
          Cinema 4D
          <br />
          Adobe Illustrator
          <br />
          Adobe Photoshop
          <br />
          Procreate
          <br />
          Procreate Dreams
          <br />
          Figma
          <br />
          Adobe Premiere Pro
          <br />
        </div>
      </div>
    </div>
  );
};

About.propTypes = {};

export default About;