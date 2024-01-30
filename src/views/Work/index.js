import React from 'react';
import PropTypes from 'prop-types';
import gif1 from '../../assets/001_test.gif';
import gif2 from '../../assets/002_test.gif';
import gif3 from '../../assets/003_test2.gif';
import styles from './index.module.css';

const illustrations = [
  gif1,
  gif2,
  gif3,
  gif1,
  gif2,
  gif3,
  gif1,
  gif2,
  gif3,
];

const Work = props => {
  return (
    <div className={styles.container}>
      Work
      {/* {illustrations.map((src) => {
        console.log('src: ', src);
        return <img className={styles['work-card']} src={src} alt='' loading='lazy' />;
      })} */}
    </div>
  );
};

Work.propTypes = {};

export default Work;;