import React from 'react';
import styles from './index.module.css';
import { IconButton, Tab, Tabs } from '@mui/material';
import { Link, Outlet, useLocation } from 'react-router-dom';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import VimeoIcon from '../../assets/VimeoIcon';
import InstagramIcon from '@mui/icons-material/Instagram';
import { routes } from '../../App';

const Layout = () => {
  const { pathname } = useLocation();
  const path = pathname.length > 1 ? pathname.slice(1) : 'home';

  // TODO: skeleton loader for reel;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <Link className={styles['header-link']} to={'/'}>
            <h1 className={styles['header-logo']}>Sabrina Chen</h1>
          </Link>
        </div>
        <Tabs value={routes[path]?.id}>
          <Tab disableRipple value={routes.reel.id} component={Link} to={routes.reel.path} label='Reel' />
          {/* <Tab disableRipple value={routes.work.id} component={Link} to={routes.work.path} label='Work' /> */}
          <Tab disableRipple value={routes.illustration.id} component={Link} to={routes.illustration.path} label='Illustration' />
          <Tab disableRipple value={routes.about.id} component={Link} to={routes.about.path} label='About Me' />
        </Tabs>
      </div>
      <div className={styles.content}>
        <Outlet />
      </div>
      <div className={styles.footer}>
        <div>
          <IconButton
            variant='outlined'
            href='https://www.instagram.com/sabrina.art21/'
            target='_blank'
          >
            <InstagramIcon className={styles['icon-link']} />
          </IconButton>
          <IconButton
            variant='outlined'
            href='mailto:chen.chiamin16@gmail.com'
          >
            <EmailIcon className={styles['icon-link']} />
          </IconButton>
          <IconButton
            variant='outlined'
            href='https://www.linkedin.com/in/sabrina-chiamin-chen-05609514b/'
            target='_blank'
          >
            <LinkedInIcon className={styles['icon-link']} />
          </IconButton>
          <IconButton
            variant='outlined'
            href='https://vimeo.com/user194145687'
            target='_blank'
          >
            <VimeoIcon className={styles['icon-link']} />
          </IconButton>
        </div>
        <div className={styles['footer-text']}>Copyright © 2024 Sabrina Chen</div>
      </div>
    </div>
  );
};

Layout.propTypes = {
};

export default Layout;