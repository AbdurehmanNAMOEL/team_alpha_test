import React from 'react'
import '../styles/action_button.css'

const ActionButton = ({label,handleAction,width}) => {
  return (
    <div 
      style={{width:`${width}`}}
      onClick={handleAction} 
      className='action-btn-container'>
      {label}
    </div>
  )
}

export default ActionButton