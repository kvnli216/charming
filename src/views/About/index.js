import React from 'react';
import AboutMePhoto from '../../assets/AboutMePhoto.jpg';
import styles from './index.module.css';

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.avatar}>
          <img className={styles.photo} src={AboutMePhoto} alt='about-me'></img>
        </div>
        <div className={styles.intro}>
          <div className={styles['intro-text']}>
            Sabrina is a motion designer who is driven by a passion for storytelling through dynamic visuals.
            <br />
            <br />
            With a background in communications, she creates animations that resonate with audiences on an emotional level.
            <br />
            <br />
            She approaches motion design from a strategic standpoint, ensuring that every visual element serves a purpose.
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
            National Taiwan Normal University,
            <br />
            Office of Administrative Affairs
            <br />
            <b>Project Planner</b> -  Taipei City, Taiwan
            <br />
          </div>
          <div>
            WebTVAsia
            <br />
            <b>Integrated Marketing Specialist</b> - Taipei City, Taiwan
            <br />
          </div>
          <div>
            BV Public Relations
            <br />
            <b>Public Relations Intern</b> - Taipei City, Taiwan
            <br />
          </div>
          <div>
            National Taiwan Normal University,
            <br />
            Graphic Arts and Communications, ATA Lab
            <br />
            <b>Motion Design Teaching Assistant</b> - Taipei City, Taiwan
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
          Adobe Premiere Pro
          <br />
        </div>
      </div>
    </div>
  );
};

About.propTypes = {};

export default About;