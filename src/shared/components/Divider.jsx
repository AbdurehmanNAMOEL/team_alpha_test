import React from 'react'

const Divider = ({width}) => {
  return (
    <div
     style={{
     height:'1px',
     width:`${width}`,
     marginBottom:'10px',
     backgroundColor:'rgba(255,255,255,0.2)'   
    }}
    />
  )
}
export default Divider