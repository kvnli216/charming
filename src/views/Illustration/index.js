import gif1 from '../../assets/001_test.gif';
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import jpg1 from '../../assets/001_test-small.jpg';
import gif2 from '../../assets/002_test.gif';
import gif3 from '../../assets/003_test2.gif';
import styles from './index.module.css';

const illustrations = [
  gif1,
  gif1,
  gif1,
  gif1,
  gif1,
  gif1,
  gif1,
  gif1,
  gif1,
  gif2,
  gif2,
  gif2,
  gif2,
  gif2,
  gif2,
  gif2,
  gif2,
  gif2,
  gif3,
  gif3,
  gif3,
  gif3,
  gif3,
];

const Card = ({
  key,
  skeleton,
  src,
}) => {
  const cardRef = useRef(null);
  useEffect(() => {
    let img = cardRef?.current?.querySelector('img');
    const loaded = () => {
      cardRef?.current?.classList.add(styles.loaded);
    };

    if (img?.complete) {
      loaded();
    } else {
      img?.addEventListener('load', loaded);
    }
  }, []);


  return (
    <div
      ref={cardRef}
      key={key}
      className={styles['skeleton']}
      style={{ backgroundImage: `url(${skeleton})` }} >
      <img className={styles['work-card']} src={src} alt='' loading='lazy' />
    </div>
  );
};

const Illustration = props => {

  return (
    <div className={styles.container}>
      {illustrations.map((src, i) => {
        return (
          <Card
            key={`illustration-${src}-${i}`}
            skeleton={jpg1}
            src={src}
          />
        );
      })}
    </div>
  );
};

Illustration.propTypes = {};

export default Illustration;;
