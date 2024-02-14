import React from 'react';
import PropTypes from 'prop-types';
import gif1 from '../../assets/001_test.gif';
import gif2 from '../../assets/002_test.gif';
import gif3 from '../../assets/003_test2.gif';
import perfume_gif from '../../assets/Works/perfume_gif.gif';
import styles from './index.module.css';
import WorkCard from '../../components/WorkCard';
import { DetailPages } from '../../App';

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
      {
        DetailPages.map(({
          label,
          preview,
          route,
        }) => (
          <WorkCard
            label='HandsOnMe'
            gif={perfume_gif}
            route={route}
          />
        ))}
      <iframe title="vimeo-player" src="https://player.vimeo.com/video/908945140?h=e755c01041&title=0&byline=0&portrait=0" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
      <iframe title="vimeo-player" src="https://player.vimeo.com/video/908945140?h=e755c01041" width="640" height="360" frameborder="0" ></iframe>
      <iframe title="vimeo-player" src="https://player.vimeo.com/video/900298628?h=7d99a41d2c" width="640" height="360" frameborder="0" ></iframe>
      <iframe title="vimeo-player" src="https://player.vimeo.com/video/879936928?h=7d5262ff78" width="640" height="360" frameborder="0" ></iframe>
      <iframe title="vimeo-player" src="https://player.vimeo.com/video/873528404?h=c2658e077e" width="640" height="360" frameborder="0" ></iframe>
      <iframe title="vimeo-player" src="https://player.vimeo.com/video/797600155?h=04ae50be7d" width="640" height="360" frameborder="0" ></iframe>
    </div>
  );
};

Work.propTypes = {};

export default Work;;