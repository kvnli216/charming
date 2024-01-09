import React, { useState } from 'react'
import { IconButton, Tab, Tabs } from '@mui/material'
import Work from '../Work'
import styles from './index.module.css'
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import VimeoIcon from '../../assets/VimeoIcon';

const Home = () => {
  const [tab, setTab] = useState()

  const handleChange = (event, newValue) => {
    setTab(newValue);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Sabrina</h1>
        <Tabs value={tab} onChange={handleChange}>
          <Tab label='Reel' />
          <Tab label='Work' />
          <Tab label='Illustrations' />
          <Tab label='About Me' />
        </Tabs>
      </div>
      <div className={styles.content}>
        <Work />
      </div>
      <div className={styles.footer}>
        <div>
          <IconButton className={styles['icon-button']} variant='outlined'>
            <EmailIcon />
          </IconButton>
          <IconButton className={styles['icon-button']} variant='outlined'>
            <LinkedInIcon />
          </IconButton>
          <IconButton className={styles['icon-button']} variant='outlined'>
            <VimeoIcon />
          </IconButton>
        </div>
        <div className={styles['footer-text']}>Copyright © 2024 Sabrina Chen</div>
      </div>
    </div>
  )
}

Home.propTypes = {}

export default Home