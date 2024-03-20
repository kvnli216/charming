import React, { useEffect, useRef } from 'react';
import jpg1 from '../../assets/Illustrations/001_test-small.jpg';
import jpg2 from '../../assets/Illustrations/002_test-small.jpg';
import jpg3 from '../../assets/Illustrations/003_test-small.jpg';
import gif1 from '../../assets/Illustrations/001_test.gif';
import gif2 from '../../assets/Illustrations/002_test.gif';
import gif3 from '../../assets/Illustrations/003_test2.gif';
import IMG_5860 from '../../assets/Illustrations/IMG_5860.jpg';
import IMG_5861 from '../../assets/Illustrations/IMG_5861.jpg';
import IMG_5863 from '../../assets/Illustrations/IMG_5863.jpg';
import IMG_5864 from '../../assets/Illustrations/IMG_5864.jpg';
import IMG_5865 from '../../assets/Illustrations/IMG_5865.jpg';
import IMG_5867 from '../../assets/Illustrations/IMG_5867.jpg';
import IMG_6090 from '../../assets/Illustrations/IMG_6090.jpg';
import IMG_6091 from '../../assets/Illustrations/IMG_6091.jpg';
import IMG_6093 from '../../assets/Illustrations/IMG_6093.jpg';
import IMG_5860_small from '../../assets/Illustrations/IMG_5860-small.jpg';
import IMG_5861_small from '../../assets/Illustrations/IMG_5861-small.jpg';
import IMG_5863_small from '../../assets/Illustrations/IMG_5863-small.jpg';
import IMG_5864_small from '../../assets/Illustrations/IMG_5864-small.jpg';
import IMG_5865_small from '../../assets/Illustrations/IMG_5865-small.jpg';
import IMG_5867_small from '../../assets/Illustrations/IMG_5867-small.jpg';
import IMG_6090_small from '../../assets/Illustrations/IMG_6090-small.jpg';
import IMG_6091_small from '../../assets/Illustrations/IMG_6091-small.jpg';
import IMG_6093_small from '../../assets/Illustrations/IMG_6093-small.jpg';
import 角色設計_頭髮 from '../../assets/Illustrations/角色設計_頭髮.jpg';
import 角色設計small from '../../assets/Illustrations/角色設計_頭髮.jpg';
import PropTypes from 'prop-types';
import styles from './index.module.css';

const illustrations = [
  { src: gif1, skeleton: jpg1 },
  { src: gif2, skeleton: jpg2 },
  { src: gif3, skeleton: jpg3 },
  { src: IMG_5860, skeleton: IMG_5860_small },
  { src: IMG_5861, skeleton: IMG_5861_small },
  { src: IMG_5863, skeleton: IMG_5863_small },
  { src: IMG_5864, skeleton: IMG_5864_small },
  { src: 角色設計_頭髮, skeleton: 角色設計small },
  { src: IMG_5865, skeleton: IMG_5865_small },
  { src: IMG_5867, skeleton: IMG_5867_small },
  { src: IMG_6090, skeleton: IMG_6090_small },
  { src: IMG_6091, skeleton: IMG_6091_small },
  { src: IMG_6093, skeleton: IMG_6093_small },
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


