import React, { useState } from 'react'
import '../styles/planet_card.css'
import {FaBars} from 'react-icons/fa'
import { Link } from 'react-router-dom'
const PlanetCard = ({image,name}) => {
    const [isCardBarBtnClicked,setClicked]=useState(false)
  return (
    <div className='planet-card-container'>
        <div className="planet-detail" style={{marginLeft:isCardBarBtnClicked?'150px':'400px'}}>
           <Link onClick={()=>setClicked(prev=>!prev)} className='text-link'>About</Link>
           <Link onClick={()=>setClicked(prev=>!prev)} className='text-link'>Simulation</Link>
           <Link onClick={()=>setClicked(prev=>!prev)} className='text-link'>More</Link>
        </div>
        <div className="header">
            <span>Ezana</span>
            <FaBars onClick={()=>setClicked(prev=>!prev)}/>
        </div>
        <img src={image} alt="" srcset="" className='image'/>
        <span className='planet_name'>{name}</span>
    </div>
  )
}

export default PlanetCard