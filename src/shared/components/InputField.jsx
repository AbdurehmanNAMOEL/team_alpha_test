import React from 'react'
import '../styles/input_field.css'

const InputField = ({inputLabel,setInput,value,type,width}) => {
  return (
    <div className='input_field' style={{width:`${width}`}}>
      <span>{inputLabel}</span>
      <input type={type} style={{width:'100%',height:'40px',textIndent:'10px'}}/>
    </div>
  )
}

export default InputField