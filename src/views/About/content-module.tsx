import styles from './index.module.css';

const ContentModule = () => (
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
  </div>);

export default ContentModule;