import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.css';
import WorkCard from '../../../components/WorkCard';


const HandsOnMePage = ({
  label,
  media,
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
            src="https://player.vimeo.com/video/900298628?h=7d99a41d2c&byline=0"
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
  preview: PropTypes.string,
};

export default HandsOnMePage;;