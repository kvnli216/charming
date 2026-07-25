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
        previewPlaceholder,
        subtitle,
        tags,
      }) => (
        <WorkCard
          key={route}
          label={label}
          gif={preview}
          placeholder={previewPlaceholder}
          route={route}
          subtitle={subtitle}
          tags={tags}
        />
      ))}
    </div>
  );
};

export default Work;
