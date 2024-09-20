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
              <div className={styles.description}>
                Hi, I'm Sabrina Chen.
                <br />
                A <span className={styles['orange-text']}>motion designer</span> and <span className={styles['yellow-text']}>illustrator</span> based in NYC.
                Check out my reel!
                <br />
                I love illustrations and dynamic visuals.
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
              <div className={styles.description}>
                Hi, I'm Sabrina Chen.
                <br />
                A <span className={styles['blue-text']}>motion designer</span> and <span className={styles['orange-text']}>illustrator</span> based in NYC.
                Check out my reel!
                <br />
                I love illustrations and dynamic visuals.
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

