import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import LoadingPageAnimation from '../shared/components/LoadingPageAnimation'

const Home=lazy(()=>import('../pages/pages/HomePage'))
const SignUp=lazy(()=>import('../pages/auth/pages/SignUp'))
const Login=lazy(()=>import('../pages/auth/pages/Login'))

const MainRoute = () => {
  return (
    <Suspense fallback={<LoadingPageAnimation/>}> 
    <Routes>     
      <Route path='' element={<Home/>}/>
      <Route path='/sign_up' element={<SignUp/>}/>
      <Route path='/login' element={<Login/>}/>
  
    </Routes>
        </Suspense>
  )
}

export default MainRoute