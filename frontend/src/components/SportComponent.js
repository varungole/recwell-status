import React from 'react'

function SportComponent({title , image , onClick}) {
  return (
    <div className='sport-component' onClick={onClick}>
        <img src={image} className='sport-image' alt='sports'></img>
        <h2 className='sport-badminton'>{title}test</h2>
    </div>
  )
}

export default SportComponent