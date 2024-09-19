import React from 'react';
import styles from './index.module.css';
import { IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, SwipeableDrawer, Tab, Tabs } from '@mui/material';
import { Link, Outlet, useLocation } from 'react-router-dom';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MenuIcon from '@mui/icons-material/Menu';
import VimeoIcon from '../../assets/VimeoIcon';
import InstagramIcon from '@mui/icons-material/Instagram';
import { routes } from '../../App';
import PropTypes from 'prop-types';
import Logo from '../../assets/Logo_white_mobile.png';
import Logo_web from '../../assets/Logo_white_web.png';

// TODO: skeleton load for reel

const paths = [
  'reel',
  'work',
  'illustration',
  'about',
];

const Header = ({
  isMobile,
}) => {
  const { pathname } = useLocation();
  const path = pathname.length > 1 ? pathname.slice(1) : 'home';

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const handleOnTabChange = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      {
        isMobile
          ? (
            <>
              <div className={styles['header-logo-wrapper']}>
                <Link className={styles['header-link']} to={'/'} >
                  <img className={styles['header-logo']} src={Logo} alt='logo' />
                </Link >
              </div >
              <div className={styles['menu-icon-wrapper']}>
                <IconButton
                  aria-label="menu"
                  id="nav-menu"
                  aria-controls={open ? 'long-menu' : undefined}
                  aria-expanded={open ? 'true' : undefined}
                  aria-haspopup="true"
                  onClick={toggleDrawer(true)}
                >
                  <MenuIcon className={styles['menu-icon']} />
                </IconButton>

                <SwipeableDrawer
                  anchor='right'
                  open={open}
                  onClose={toggleDrawer(false)}
                  PaperProps={{
                    sx: {
                      width: 'calc(100svw / 2)',
                      background: '#f6ad73',
                    }
                  }}
                >
                  <List>
                    {paths.map((route) => (
                      <>
                        <ListItem key={route} disablePadding divider componentsProps={{ root: { className: styles['list-item'] } }}>
                          <ListItemButton
                            component={Link}
                            to={routes[route].path}
                            onClick={toggleDrawer(false)}
                            selected={routes[path]?.id === routes[route].id}
                          >
                            <ListItemIcon>
                            </ListItemIcon>
                            <ListItemText classes={{
                              primary: styles['list-item-text']
                            }} primary={route} />
                          </ListItemButton>
                        </ListItem>
                      </>
                    ))}
                  </List>
                </SwipeableDrawer>
              </div>
            </>
          )
          : (
            <>
              <div>
                <Link className={styles['header-link']} to={'/'} >
                  <img className={styles['header-logo']} src={Logo_web} alt='logo' />
                </Link >
              </div >
              <div>
                <Tabs value={routes[path]?.id} onChange={handleOnTabChange}>
                  <Tab disableRipple value={routes.reel.id} component={Link} to={routes.reel.path} label='Reel' />
                  <Tab disableRipple value={routes.work.id} component={Link} to={routes.work.path} label='Work' />
                  <Tab disableRipple value={routes.illustration.id} component={Link} to={routes.illustration.path} label='Illustration' />
                  <Tab disableRipple value={routes.about.id} component={Link} to={routes.about.path} label='About Me' />
                </Tabs>
              </div>
            </>
          )
      }
    </>
  );
};

const Footer = () => (
  <>
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
  </>
);

const Layout = ({ isMobile }) => {
  return (
    <div className={styles.container}>
      <div className={`${styles['header']} ${isMobile && styles['mobile']}`}>
        <Header isMobile={isMobile} />
      </div>
      <div className={styles.content}>
        <div className={`${styles['content-wrapper']} ${isMobile && styles['mobile']}`}>
          <Outlet />
        </div>
        <div className={styles.footer}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

Layout.propTypes = {
  isMobile: PropTypes.bool,
};

export default Layout;