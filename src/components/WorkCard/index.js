import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.css';

const WorkCard = ({
  gif,
  label,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles['card-hover']}>
        <div className={styles['hover-text']}>{label}</div>
      </div>
      <img className={styles['work-gif']} src={gif} alt='label'></img>
    </div>
  );
};

WorkCard.propTypes = {
  gif: PropTypes.string,
  label: PropTypes.string,
};

export default WorkCard

