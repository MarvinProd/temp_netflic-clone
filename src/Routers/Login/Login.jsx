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

            <div style={{width:'100%'}} className="input__value">
              <div>
              <input type='checkbox'/>

              </div>

              <div style={{width:'100%'}}className='div_rem'>
                <div style={{width:'100%',display:'flex', marginLeft:'1%', alignItems:'center',marginBottom:'0.7%'}}>
                <p style={{color:'#737373'}}>Remember Me</p>

                </div>
                
                <div style={{width:'100%', display:'flex' ,flexDirection:'row',marginBottom:'0.7%'}} className="help_div">
                  <p style={{color:'#737373',textAlign:'left'}}> Need Help?</p>
                </div>

                
              </div>
                
            </div>

            <div className="lower_div">
              <div className='first_p'>
                <p> 
                New to Netflix? <a style={{color:'#FFFFFF'}} href='/'> Sign up Now.</a>
                  </p>  
              </div>

              <div className="second_p">
                <p style={{fontSize:'13px'}}>This page is protected by Google reCAPTCHA to 
                  <br/>ensure you're not a bot. <a href='/'>Learn more.</a></p>
              </div>
            </div>
                   
         </div>

    </div>

    <div className="footer">

  
  <div className="footerpad">


      

  

    <a href='https://help.netflix.com/en/contactus'>Questions? Contact us.</a>

      <div className="footer_div">
      <li class="footer-link-item" placeholder="footer_responsive_link_faq_item">
        <a class="footer-link" data-uia="footer-link" href="https://help.netflix.com/support/412" placeholder="footer_responsive_link_faq">
          <span id="" data-uia="data-uia-footer-label">FAQ</span></a>
      </li>      
      <li class="footer-link-item" placeholder="footer_responsive_link_faq_item">
        <a class="footer-link" data-uia="footer-link" href="https://help.netflix.com" placeholder="footer_responsive_link_faq">
          <span id="" data-uia="data-uia-footer-label">Help Center</span></a>
      </li>      
      <li class="footer-link-item" placeholder="footer_responsive_link_faq_item">
        <a class="footer-link" data-uia="footer-link" href="https://help.netflix.com/legal/termsofuse" placeholder="footer_responsive_link_faq">
          <span id="" data-uia="data-uia-footer-label">Terms of Use</span></a>
      </li>     
       <li class="footer-link-item" placeholder="footer_responsive_link_faq_item">
        <a class="footer-link" data-uia="footer-link" href="https://help.netflix.com/legal/privacy" placeholder="footer_responsive_link_faq">
          <span id="" data-uia="data-uia-footer-label">Privacy</span></a>
      </li>      
      <li class="footer-link-item" placeholder="footer_responsive_link_faq_item">
        <a class="footer-link" data-uia="footer-link" href="https://help.netflix.com/support/412" placeholder="footer_responsive_link_faq">
          <span id="" data-uia="data-uia-footer-label">Cookies Preferences</span></a>
      </li>
      <li class="footer-link-item" placeholder="footer_responsive_link_faq_item">
        <a class="footer-link" data-uia="footer-link" href="https://help.netflix.com/legal/corpinfo" placeholder="footer_responsive_link_faq">
          <span id="" data-uia="data-uia-footer-label">Corporate Information</span></a>
      </li>
       
      </div>

    </div>

    </div>

    </div>
  )
}

export default Login