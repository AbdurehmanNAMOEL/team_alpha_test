import React from 'react'
import '../styles/login.css'
import InputField from '../../../shared/components/InputField'
import ActionButton from '../../../shared/components/ActionButton'
import Avatar from '../../../shared/components/Avatar'
import logo from '../../../assets/images/logo.png'
import Divider from '../../../shared/components/Divider'
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const navigate=useNavigate()
  return (
    <div className='login-container'>
        <div className='create-account-container'>
           <Avatar handleAction={()=>navigate('/')} 
            border={true} 
            image={logo} 
            size={80}
           />
            <ActionButton
               label={'SignUp'}
               width={'100px'}
               handleAction={()=>navigate('/sign_up')}
             />
        </div>
       <div className='login-card'>
        {/* <Avatar 
          border={true} 
          image={logo} 
          size={60}
        /> */}
         <span style={{fontSize:'25px'}}>Login</span>
        <Divider width={'80%'}/>
        <InputField
          inputLabel={'Email'}
          type={'text'}
          width={'80%'}
        />
         <InputField
          inputLabel={'Password'}
          type={'password'}
          width={'80%'}
        />
        <ActionButton
          width={'80%'}
          label={'Login'}
        />

       </div>
    </div>
  )
}

export default Login