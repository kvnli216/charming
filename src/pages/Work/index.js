import React from 'react';
import PropTypes from 'prop-types';
import gif1 from '../../assets/003_test2.gif';
import './index.css'

const Work = props => {
  return (
    <div className='container'>
      <img className='work-card' src={gif1} />
      <img className='work-card' src={gif1} />
      <img className='work-card' src={gif1} />
      <img className='work-card' src={gif1} />
    </div>
  )
}

Work.propTypes = {}

export default Work