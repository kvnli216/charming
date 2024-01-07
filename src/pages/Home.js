import React, { useState } from 'react'
import "./Home.scss"
import { Tab, Tabs } from '@mui/material'

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
          <Tab label='Thesis' />
          <Tab label='About' />
        </Tabs>
      </div>
      <div className='content'>content</div>
      <div className='footer'>footer</div>
    </div>
  )
}

Home.propTypes = {}

export default Home