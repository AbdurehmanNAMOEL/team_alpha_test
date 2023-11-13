import React from 'react'
import '../styles/home.css'
import NavBar from '../../shared/components/NavBar'
import PlanetCard from '../../shared/components/PlanetCard'
import heroSectionImage from '../../assets/images/space.svg'
import marsImage from '../../assets/images/mars.png'
import earthImage from '../../assets/images/earth.png'
import jupiterImage from '../../assets/images/jupiter.png'

const HomePage = () => {
   

  return (
    <div className='home-container'>
      <NavBar/>
      <section className='hero-section'>
        <img  
         loading='lazy' 
         src={heroSectionImage} 
         alt="hero-section" 
         style={{width:'100%',height:'60vh'}} />
      </section>

      <section className='card-container'>
        <PlanetCard image={earthImage} name={'Earth'}/>
        <PlanetCard image={marsImage} name={'Mars'}/>
        <PlanetCard image={jupiterImage}  name={'Jupiter'}/>
      </section>
    
    </div>
  )
}

export default HomePage