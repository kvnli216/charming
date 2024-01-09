import React from 'react';
import PropTypes from 'prop-types';
import gif1 from '../../assets/003_test2.gif';
import styles from './index.module.css'

const Work = props => {
  return (
    <div className={styles.container}>
      <img className={styles['work-card']} src={gif1} />
      <img className={styles['work-card']} src={gif1} />
      <img className={styles['work-card']} src={gif1} />
      <img className={styles['work-card']} src={gif1} />
    </div>
  )
}

Work.propTypes = {}

export default Work