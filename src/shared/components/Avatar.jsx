import React from 'react'
import '../styles/avatar.css'

const Avatar = ({image,size,border,handleAction}) => {
  return (
    <div 
    onClick={handleAction} 
     className='avatar-container' 
     style={{
        width:`${size}px`,
        height:`${size}px`,
        border:border?'solid 1px white':'none'
    }} >
      <img 
         src={image}  
         style={{width:`${size}px`,height:`${size}px`}} 
         alt='avatar'
         />
    </div>
  )
}

export default Avatar