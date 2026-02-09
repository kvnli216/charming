import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Scene24 from '../../assets/Illustrations/Scene24-square.gif';
import Scene4 from '../../assets/Illustrations/Scene4-square.gif';
import Scene28 from '../../assets/Illustrations/Scene28-square.gif';
import Scene7 from '../../assets/Illustrations/Scene7-square.gif';
import Scene10 from '../../assets/Illustrations/Scene10-square.gif';
import Scene13 from '../../assets/Illustrations/Scene13-square.gif';
import Scene21 from '../../assets/Illustrations/Scene21-square.gif';
import Scene1 from '../../assets/Illustrations/Scene1-square.gif';
import Scene9 from '../../assets/Illustrations/Scene9-square.gif';
import styles from './index.module.css';

const illustrations = [
  { src: Scene24, skeleton: '' },
  { src: Scene4, skeleton: '' },
  { src: Scene28, skeleton: '' },
  { src: Scene7, skeleton: '' },
  { src: Scene10, skeleton: '' },
  { src: Scene13, skeleton: '' },
  { src: Scene21, skeleton: '' },
  { src: Scene1, skeleton: '' },
  { src: Scene9, skeleton: '' },
];

const Card = ({
  key,
  skeleton,
  src,
  isMobile,
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
      className={`${styles['skeleton']} ${isMobile && styles['mobile']}`}
      style={{ backgroundImage: `url(${skeleton})` }} >
      <img className={`${styles['work-card']} ${isMobile && styles['mobile']}`} src={src} alt='' loading='lazy' />
    </div>
  );
};

const Illustration = ({ isMobile }) => {

  return (
    <div className={`${styles['container']} ${isMobile && styles['mobile']}`}>
      {illustrations.map(({ src, skeleton }, i) => {
        return (
          <Card
            key={`illustration-${src}-${i}`}
            skeleton={skeleton}
            src={src}
            isMobile={isMobile}
          />
        );
      })}
    </div>
  );
};

Illustration.propTypes = {
  isMobile: PropTypes.bool,
};

export default Illustration;;


