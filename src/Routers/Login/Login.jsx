import React from 'react'
import logo from '../../assets/logo.svg'
import './Login.css';
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

            <input style={{marginTop:'1rem'}} type="email" placeholder="Enter your email address" />
            <input style={{marginTop:'1rem'}} type="password" placeholder='Input Password' />

            <div className="custom__button_login">

            <NavLink to='/login'>
              <button> Sign Up</button></NavLink>
            
            </div>

            <div className="input__value">
              <div>
              <input type='checkbox'/>

              </div>

              <div className='div_rem'>
                <p style={{color:'#FFFFFF'}}>Remember Me</p>

                <p style={{color:'#FFFFFF'}}> Need Help?</p>
              </div>
              

              
            </div>
            

           
         </div>
        

        

    </div>
    </div>
  )
}

export default Login