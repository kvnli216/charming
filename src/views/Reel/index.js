import React from 'react';
import styles from './index.module.css';
import PropTypes from 'prop-types';

const reelUrl = 'https://player.vimeo.com/video/937077444?h=f09dc0488b';
const title = 'MOTION REEL';

const Reel = ({ isMobile }) => {
  return (
    <>
      {
        isMobile
          ? (
            <div className={styles.container} >
              <div className={styles.header}>
                <h3>{title}</h3>
              </div>
              <div className={`${styles['content']} ${isMobile && styles['mobile']}`}>
                <iframe
                  className={`${styles['iframe-video']} ${isMobile && styles['mobile']}`}
                  title={title}
                  src={reelUrl}
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
                <h2>{title}</h2>
              </div>
              <div className={styles.content}>
                <iframe
                  className={styles['iframe-video']}
                  title={title}
                  src={reelUrl}
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

