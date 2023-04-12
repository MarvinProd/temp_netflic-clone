import React from 'react'
import './Footer.css'
import {ImSphere} from 'react-icons/im'
import {MdArrowDropDown} from 'react-icons/md'

function Footer() {
  return (
    <div className='app__footer_'>

        <p>Questions? Contact us.</p>

        <div className='app__footer_div'>

        <div >
        <p>FAQ</p>
        <p>Media Center</p>
        <p>Ways to Watch</p>
        <p>Cookie Preferences</p>
        <p>Speed Test</p>

        </div>

        <div>
        <p>Help Center</p>
        <p>Investor Relations</p>
        <p>Terms of Use</p>
        <p>Corporate Information</p>
        <p>Legal Notices</p>


        </div>

        <div>

        <p>Account</p>
        <p>Jobs</p>
        <p>Jobs</p>
        <p>Contact Us</p>
        <p>Only on Netflix</p>


        </div>


        </div>


        <div className='app__block'> 
            <ImSphere color='#FFFFFF'/>

            <p >English</p>

            <MdArrowDropDown color='#FFFFFF'/>

        </div>

        


      
    </div>
  )
}

export default Footer
