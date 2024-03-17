import React from 'react';
import styles from './index.module.css';
import PropTypes from 'prop-types';

const Reel = ({ isMobile }) => {
  return (
    <>
      {
        isMobile
          ? (
            <div className={styles.container} >
              <div className={styles.header}>
                <h3>2024 Reel</h3>
              </div>
              <div className={`${styles['content']} ${styles['mobile']}`}>
                <iframe
                  className={`${styles['iframe-video']} ${styles['mobile']}`}
                  title={'Reel'}
                  src='https://player.vimeo.com/video/923468017?h=e458dba20c'
                  frameborder="0"
                  allow="autoplay; fullscreen"
                  allowfullscreen
                />
              </div>
            </div >
          )
          : (
            <div className={styles.container} >
              <div className={styles.header}>
                <h2>2024 Reel</h2>
              </div>
              <div className={styles.content}>
                <iframe
                  className={styles['iframe-video']}
                  title={'Reel'}
                  src='https://player.vimeo.com/video/923468017?h=e458dba20c'
                  frameborder="0"
                  allow="autoplay; fullscreen"
                  allowfullscreen
                />
              </div>
            </div >
          )
      }
    </>
  );
};

Reel.propTypes = {
  isMobile: PropTypes.bool,
};

export default Reel;

