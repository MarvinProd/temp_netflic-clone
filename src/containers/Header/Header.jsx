import React from 'react'
import logo from '../../assets/logo.svg'
import './Header.css';
import {AiOutlineRight} from 'react-icons/ai'

function Header() {
  return (
    <div className='app__header  app__bg'>

        <div className='nav flex__aline'>
            <img src={logo} alt='ne' className='logo__size'/>

            <button className='custom__button'> Sign Up</button>

        </div>

        <div className='custom__header'>

            <div className='custom__header_top'>

                <h1 > Unlimited movies, TV shows and, more. </h1>
                <p className='p__opensans'> Watch anywhere. Cancle anytime</p>
                <p className='p__opensans'> 
                    Ready to watch? Enter your email to create or restart your membership</p>
            </div>

            <div className="app__header-input flex__center">
                <input type="email" placeholder="Enter your email address" />
                <div className='app__svg'> 
                    <p>Get Started</p>
                    <AiOutlineRight/>
                </div>
             </div>
            

            

        </div>
      
    </div>
  )
}

export default Header
