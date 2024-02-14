import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.css';
import { Link } from 'react-router-dom';

const WorkCard = ({
  gif,
  label,
  route,
}) => {
  return (
    <Link to={route}>
      <div className={styles.card}>
        <div className={styles['card-hover']}>
          <div className={styles['hover-text']}>{label}</div>
        </div>
        <img className={styles['work-gif']} src={gif} alt='label'></img>
      </div>
    </Link>
  );
};

WorkCard.propTypes = {
  gif: PropTypes.string,
  label: PropTypes.string,
  route: PropTypes.string,
};

export default WorkCard

