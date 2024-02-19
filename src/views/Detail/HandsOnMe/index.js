import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.css';

const HandsOnMePage = ({
  label,
  mediaUrl,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>{label}</h2>
      </div>
      <div className={styles.content}>
        <div className={styles['embed-wrapper']}>
          <iframe
            title={label}
            src={mediaUrl}
            className={styles['iframe-video']}
            frameborder="0"
            allow="autoplay; fullscreen"
            allowfullscreen
          />
        </div>
        <div className={styles['description-wrapper']}>
          <h2>Intro</h2>
        </div>
      </div>
    </div>
  );
};

HandsOnMePage.propTypes = {
  label: PropTypes.string,
  mediaUrl: PropTypes.string,
};

export default HandsOnMePage;;