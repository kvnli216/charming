import React, { useState } from 'react';
import styles from './index.module.css';
import { IconButton, Menu, MenuItem, Tab, Tabs } from '@mui/material';
import { Link, Outlet, useLocation } from 'react-router-dom';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MenuIcon from '@mui/icons-material/Menu';
import VimeoIcon from '../../assets/VimeoIcon';
import InstagramIcon from '@mui/icons-material/Instagram';
import { routes } from '../../App';

const Header = ({
  isMobile,
}) => {
  const { pathname } = useLocation();
  const path = pathname.length > 1 ? pathname.slice(1) : 'home';

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const ITEM_HEIGHT = 40;

  return (
    <>
      {
        isMobile
          ? (
            <>
              <div>
                <Link className={styles['header-link']} to={'/'} >
                  <h2 className={`${styles['header-logo']} ${styles['mobile']}`}>Sabrina Chen</h2>
                </Link >
              </div >
              <div>
                <IconButton
                  aria-label="menu"
                  id="nav-menu"
                  aria-controls={open ? 'long-menu' : undefined}
                  aria-expanded={open ? 'true' : undefined}
                  aria-haspopup="true"
                  onClick={handleClick}
                >
                  <MenuIcon className={styles['menu-icon']} />
                </IconButton>
                <Menu
                  id="long-menu"
                  MenuListProps={{
                    'aria-labelledby': 'long-button',
                  }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  PaperProps={{
                    style: {
                      maxHeight: ITEM_HEIGHT * 4.5,
                      width: '20ch',
                    },
                  }}
                >
                  <MenuItem
                    dense
                    component={Link}
                    to={routes.reel.path}
                    onClick={handleClose}
                    selected={routes[path]?.id === routes.reel.id}
                  >
                    Reel
                  </MenuItem>
                  <MenuItem
                    dense
                    component={Link}
                    to={routes.illustration.path}
                    onClick={handleClose}
                    selected={routes[path]?.id === routes.illustration.id}
                  >
                    Illustration
                  </MenuItem>

                  <MenuItem
                    dense
                    component={Link}
                    to={routes.about.path}
                    onClick={handleClose}
                    selected={routes[path]?.id === routes.about.id}
                  >
                    About Me
                  </MenuItem>
                </Menu>
              </div>
            </>
          )
          : (
            <>
              <div>
                <Link className={styles['header-link']} to={'/'} >
                  <h1 className={styles['header-logo']}>Sabrina Chen</h1>
                </Link >
              </div >
              <div>
                <Tabs value={routes[path]?.id}>
                  <Tab disableRipple value={routes.reel.id} component={Link} to={routes.reel.path} label='Reel' />
                  {/* <Tab disableRipple value={routes.work.id} component={Link} to={routes.work.path} label='Work' /> */}
                  <Tab disableRipple value={routes.illustration.id} component={Link} to={routes.illustration.path} label='Illustration' />
                  <Tab disableRipple value={routes.about.id} component={Link} to={routes.about.path} label='About Me' />
                </Tabs>;
              </div>
            </>
          )
      }
    </>
  );
};

const Layout = () => {


  // TODO: skeleton loader for reel;
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const mobileBreakpoint = 430;
  console.log('windowWidth: ', windowWidth);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Header isMobile={windowWidth < mobileBreakpoint} />
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