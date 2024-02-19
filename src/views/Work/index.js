import React from 'react';
import perfume_gif from '../../assets/Works/perfume_gif.gif';
import styles from './index.module.css';
import WorkCard from '../../components/WorkCard';
import { DetailPages } from '../../App';

const Work = () => {
  return (
    <div className={styles.container}>
      {
        DetailPages.map(({
          label,
          route,
        }) => (
          <WorkCard
            label={label}
            gif={perfume_gif}
            route={route}
          />
        ))}
    </div>
  );
};

export default Work;;