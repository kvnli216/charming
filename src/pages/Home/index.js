import React, { useState } from 'react'
import { IconButton, Tab, Tabs } from '@mui/material'
import Work from '../Work'
import styles from './index.module.css'

const Home = props => {
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
        <IconButton />
      </div>
    </div>
  )
}

Home.propTypes = {}

export default Home