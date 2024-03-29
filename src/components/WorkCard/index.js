import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.css';
import { Link } from 'react-router-dom';

const WorkCard = ({
  gif,
  label,
  route,
  isMobile,
}) => {
  return (
    <>
      {
        route
          ? (<Link to={route} >
            <div className={styles['card']}>
              <div className={styles['card-hover']}>
                <div className={styles['hover-text']}>{label}</div>
              </div>
              <img
                className={`${styles['work-gif']} ${isMobile && styles['mobile']}`}
                src={gif}
                alt='label'></img>
            </div>
          </Link >)
          : <div className={styles['stub-card']} />
      }
    </>
  );
};

WorkCard.propTypes = {
  gif: PropTypes.string,
  label: PropTypes.string,
  route: PropTypes.string,
  isMobile: PropTypes.bool,
};

export default WorkCard

