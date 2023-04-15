import React from 'react'
import logo from '../../assets/logo.svg'
import './Login.css';
import {AiOutlineRight} from 'react-icons/ai'
import {NavLink} from 'react-router-dom'


function Login() {
  return (
    <div className='app__header_login  app__login_bg'>

    <div className='nav flex__aline'>
        <img src={logo} alt='ne' className='logo__size'/>



    </div>

    <div className='custom__header_login'>
      

        <div className="app__header-login flex__center">

        <h1>Sign In</h1>

            <input type="email" placeholder="Enter your email address" />
            <input type="password" placeholder='Input Password' />

            <NavLink to='/login'>
              <button className='custom__button_login'> Sign Up</button></NavLink>
            
         </div>
        

        

    </div>
    </div>
  )
}

export default Login