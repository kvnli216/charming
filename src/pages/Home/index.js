import React, { useState } from 'react'
import { Tab, Tabs } from '@mui/material'
import Work from '../Work'
import './index.css'

const Home = props => {
  const [tab, setTab] = useState()

  const handleChange = (event, newValue) => {
    setTab(newValue);
  };

  return (
    <div className='container'>
      <div className='header'>
        <h1>Sabrina</h1>
        <Tabs value={tab} onChange={handleChange}>
          <Tab label='Reel' />
          <Tab label='Work' />
          <Tab label='Illustrations' />
          <Tab label='About Me' />
        </Tabs>
      </div>
      <div className='content'>
        <Work />
      </div>
      <div className='footer'>footer</div>
    </div>
  )
}

Home.propTypes = {}

export default Home