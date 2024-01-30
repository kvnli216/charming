import React, { useState } from 'react';
import { IconButton, Tab, Tabs } from '@mui/material';
import AboutMePhoto from '../../assets/AboutMePhoto.jpg';
import styles from './index.module.css';

const About = () => {
  const [tab, setTab] = useState();

  const handleChange = (event, newValue) => {
    setTab(newValue);
  };

  return (
    <div className={styles.container}>
      <div className={styles.avatar}>
        <img className={styles.photo} src={AboutMePhoto}></img>
      </div>
      <div className={styles.intro}>
        Hello, I'm Sabrina Chen!
        <br />
        <br />
        I’m a Motion Designer based in NYC who loves handling a wide range of creative challenges.
        <br />
        I am deeply passionate about illustrations and motion arts.
        With a background in communications, I enjoy understanding different thinking patterns of all groups of people and produce suitable pieces accordingly.
        I've always been fascinated by how visual arts can be delivered regardless of language and culture; it is a form of art that can strike a chord with audiences worldwide.
      </div>
      <div className={styles.content}>
        <div className={styles.education}>
          <h3>Education</h3>
          ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
        </div>
        <div className={styles.skills}>
          <h3>Skills</h3>
          quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum
        </div>
        <div className={styles.experience}>
          <h3>Work Experience</h3>
          e reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
        </div>
      </div>
    </div>
  );
};

About.propTypes = {};

export default About;