import React from 'react'
import '../styles/nav_bar.css'
import Avatar from './Avatar'
import logo from '../../assets/images/logo.png'
import ActionButton from './ActionButton'
import { Link, useNavigate } from 'react-router-dom'
const NavBar = () => {
     const navigate=useNavigate('/login')
  return (
    <header className='nav-container'>
      <Avatar image={logo} size={80}/>
      <div className='nav-right-container'>
        <Link className='simulation' to={''}>Simulation</Link>
        <ActionButton
          label={'Login'}
          width={'100px'}
          handleAction={()=>navigate('/login')}
        />
      </div>
    </header>
  )
}

export default NavBar