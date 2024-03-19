import React from 'react';
import styles from './index.module.css';
import WorkCard from '../../components/WorkCard';
import { DetailPages } from '../../App';
import PropTypes from 'prop-types';

const Work = ({ isMobile }) => {
  return (
    <div className={`${styles['container']} ${isMobile && styles['mobile']}`}>
      {
        DetailPages.map(({
          label,
          route,
          preview,
        }) => (
          <WorkCard
            label={label}
            gif={preview}
            route={route}
            isMobile={isMobile}
          />
        ))}
    </div>
  );
};


Work.propTypes = {
  isMobile: PropTypes.bool,
};

export default Work;;