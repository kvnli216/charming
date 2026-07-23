import styles from './index.module.css';
import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';

interface WorkCardProps {
  gif?: string;
  label?: ReactNode;
  route?: string;
  isMobile?: boolean;
  subtitle?: ReactNode;
}

const WorkCard = ({
  gif,
  label,
  route,
  isMobile,
  subtitle,
}: WorkCardProps) => {
  return (
    <>
      {
        route
          ? (<Link to={route} >
            <div className={styles['card']}>
              <div className={styles['card-hover']}>
                <div className={styles['hover-text']}>{label}</div>
                <div className={styles['hover-subtitle']}>{subtitle}</div>
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

export default WorkCard;

