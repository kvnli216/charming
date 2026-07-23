import styles from './index.module.css';
import WorkCard from '../../components/WorkCard';
import { projects } from '../../content/projects';

interface WorkProps {
  isMobile: boolean;
}

const Work = ({ isMobile }: WorkProps) => {
  return (
    <div className={`${styles['container']} ${isMobile && styles['mobile']}`}>
      {projects.map(({
        label,
        route,
        preview,
        subtitle,
      }) => (
        <WorkCard
          key={route}
          label={label}
          gif={preview}
          route={route}
          isMobile={isMobile}
          subtitle={subtitle}
        />
      ))}
      {/* Trailing empty card to avoid a single centered card on the last row. */}
      <WorkCard isMobile={isMobile} />
    </div>
  );
};

export default Work;
