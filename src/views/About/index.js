import React, { useState } from 'react'
import { IconButton, Tab, Tabs } from '@mui/material'
import styles from './index.module.css'

const About = () => {
  const [tab, setTab] = useState()

  const handleChange = (event, newValue) => {
    setTab(newValue);
  };

  return (
    <div className={styles.container}>
      About me
    </div>
  )
}

About.propTypes = {}

export default About