import React from 'react';
import styles from './index.module.css';

const Reel = props => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>2024 Reel</h2>
      </div>
      <div className={styles.content}>
        <div className={styles['embed-wrapper']}>
          <iframe
            title={'Reel'}
            src='https://player.vimeo.com/video/923468017?h=e458dba20c'
            className={styles['iframe-video']}
            frameborder="0"
            allow="autoplay; fullscreen"
            allowfullscreen
          />
        </div>
      </div>
    </div>
  );
};

Reel.propTypes = {};

export default Reel;