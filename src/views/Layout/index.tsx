import React from 'react';
import styles from './index.module.css';
import { IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, SwipeableDrawer, Tab, Tabs } from '@mui/material';
import { Link, Outlet, useLocation } from 'react-router-dom';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MenuIcon from '@mui/icons-material/Menu';
import VimeoIcon from '../../assets/VimeoIcon';
import InstagramIcon from '@mui/icons-material/Instagram';
import { routes } from '../../routes';

// TODO: skeleton load for reel

const paths = [
  'reel',
  'work',
  'play',
  'about',
];

interface HeaderProps {
  isMobile: boolean;
}

const Header = ({
  isMobile,
}: HeaderProps) => {
  const { pathname } = useLocation();
  const path = pathname.length > 1 ? pathname.slice(1) : 'home';

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
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
              <div className={styles['header-wrapper']}>
                <Link className={styles['header-link']} to={'/'} >
                  <h2 className={styles['header-name']}>
                    Sabrina Chen
                  </h2>
                </Link >
              </div >
              <div className={styles['menu-icon-wrapper']}>
                <IconButton
                  className={styles['menu-button-toggle']}
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
                  onOpen={toggleDrawer(true)}
                  PaperProps={{
                    sx: {
                      width: 'calc(100svw / 2)',
                      background: '#f2ad8a',
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
              <div className={styles['header-wrapper']}>
                <Link className={styles['header-link']} to={'/'} >
                  <h2 className={styles['header-name']}>
                    Sabrina Chen
                  </h2>
                </Link >
              </div >
              <div className={styles['tabs-wrapper']}>
                <Tabs value={routes[path]?.id} onChange={handleOnTabChange}>
                  <Tab disableRipple value={routes.reel.id} component={Link} to={routes.reel.path} label='Reel' />
                  <Tab disableRipple value={routes.work.id} component={Link} to={routes.work.path} label='Work' />
                  <Tab disableRipple value={routes.play.id} component={Link} to={routes.play.path} label='Fun' />
                  <Tab disableRipple value={routes.about.id} component={Link} to={routes.about.path} label='Connect' />
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
        href='https://www.instagram.com/sabrina.art21/'
        target='_blank'
      >
        <InstagramIcon className={styles['icon-link']} />
      </IconButton>
      <IconButton
        href='mailto:chen.chiamin16@gmail.com'
      >
        <EmailIcon className={styles['icon-link']} />
      </IconButton>
      <IconButton
        href='https://www.linkedin.com/in/sabrina-chiamin-chen-05609514b/'
        target='_blank'
      >
        <LinkedInIcon className={styles['icon-link']} />
      </IconButton>
      <IconButton
        href='https://vimeo.com/user194145687'
        target='_blank'
      >
        <VimeoIcon className={styles['icon-link']} />
      </IconButton>
    </div>
    <div className={styles['footer-text']}>Copyright © 2026 Sabrina Chen</div>
  </>
);

interface LayoutProps {
  isMobile: boolean;
}

const Layout = ({ isMobile }: LayoutProps) => {
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

export default Layout;