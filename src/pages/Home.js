import React from 'react'
import "./Home.scss"

const Home = props => {
  return (
    <div className='container'>
      <div className='header'>
        <h1>Sabrina</h1>
      </div>
      <div className='content'>content</div>
      <div className='footer'>footer</div>
    </div>
  )
}

Home.propTypes = {}

export default Home