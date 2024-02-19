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
            Hello, I'm Sabrina Chen!
            <br />
            <br />
            I’m a Motion Designer based in NYC who loves handling a wide range of creative challenges.
            <br />
            I am deeply passionate about illustrations and motion arts.
            With a background in communications, I enjoy understanding different thinking patterns of all groups of people and produce suitable pieces accordingly.
            I've always been fascinated by how visual arts can be delivered regardless of language and culture; it is a form of art that can strike a chord with audiences worldwide.
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
            <b>Graphic Designer</b> -  Taipei City, Taiwan
            <br />
          </div>
          <div>
            WebTVAsia
            <br />
            <b>Video Content Creator</b> - Taipei City, Taiwan
            <br />
          </div>
          <div>
            BV Public Relations
            <br />
            <b>Graphic Design Intern</b> - Taipei City, Taiwan
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