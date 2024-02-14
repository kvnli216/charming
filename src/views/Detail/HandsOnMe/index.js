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
      {/* Replace with media view */}
      <WorkCard
        label={label}
        gif={media}
      />
    </div>
  );
};

HandsOnMePage.propTypes = {
  label: PropTypes.string,
  preview: PropTypes.string,
};

export default HandsOnMePage;;