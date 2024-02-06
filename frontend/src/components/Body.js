import React from 'react'
import SportComponent from './SportComponent'
import Badminton from '../components/badminton.jpeg'
import Squash from '../components/squash.webp'
import Tennis from '../components/tennis.jpeg'
import Golf from '../components/golf.jpeg'
import { useNavigate } from 'react-router-dom'

function Body() {
  
  const navigate = useNavigate();
  const handleClick = (site) => {
    navigate(`/${site}`);
  }
  return (
    <div className='home-body'>
        <h1 className='home-body-title'>Whenever you go to Recwell, it's always crowded, right?</h1>
        <p className='home-body-para'>I created this app to help you fellow terps who like to stay active</p>
        <p className='home-body-para'>As always, active terps stay well</p>

        <div className='sports'>
        <SportComponent title="Badminton" image={Badminton} onClick={() => handleClick('badminton')}/>
        <SportComponent title="Squash" image={Squash} onClick={() => handleClick('squash')}/>
        <SportComponent title="Tennis" image={Tennis} onClick={() => handleClick('tennis')}/>
        <SportComponent title="Golf" image={Golf} onClick={() => handleClick('golf')}/>
        </div>
    </div>
  )
}

export default Body