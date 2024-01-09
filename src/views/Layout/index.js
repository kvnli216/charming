import React, { useState } from 'react'
import styles from './index.module.css'
import { IconButton, Tab, Tabs } from '@mui/material'
import { Link, Outlet, useParams } from 'react-router-dom'
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import VimeoIcon from '../../assets/VimeoIcon';

const Layout = () => {
  const params = useParams();
  console.log('params: ', params);

  const [tab, setTab] = useState(1)

  const handleChange = (event, newValue) => {
    setTab(newValue);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Sabrina</h1>
        <Tabs value={tab} onChange={handleChange}>
          <Tab value={0} component={Link} to="/reel" label='Reel' />
          <Tab value={1} component={Link} to="/" label='Work' />
          <Tab value={2} component={Link} to="/illustration" label='Illustration' />
          <Tab value={3} component={Link} to="/about" label='About Me' />
        </Tabs>
      </div>
      <div className={styles.content}>
        <Outlet />
      </div>
      <div className={styles.footer}>
        <div>
          <IconButton
            className={styles['icon-button']}
            variant='outlined'
          // TODO: Professional Email?
          // href='mailto:'
          // target='_blank'
          >
            <EmailIcon />
          </IconButton>
          <IconButton
            className={styles['icon-button']}
            variant='outlined'
            href='https://www.linkedin.com/in/sabrina-chen-05609514b/'
            target='_blank'
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton
            className={styles['icon-button']}
            variant='outlined'
            href='https://vimeo.com/user194145687'
            target='_blank'
          >
            <VimeoIcon />
          </IconButton>
        </div>
        <div className={styles['footer-text']}>Copyright © 2024 Sabrina Chen</div>
      </div>
    </div>
  )
}

Layout.propTypes = {
}

export default Layout