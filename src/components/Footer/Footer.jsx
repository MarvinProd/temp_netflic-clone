import React from 'react'
import './Footer.css'
import {ImSphere} from 'react-icons/im'
import {MdArrowDropDown} from 'react-icons/md'
import Link from '../List_link_data/Link'

function Footer() {
  return (
    <div className='app__footer_'>

    <a href='https://help.netflix.com/en/contactus'>Questions? Contact us.</a>

        <div className='app__footer_div'>

        <Link 
          text="FAQ"
          link="/"
          />
          <Link 
          text="Help Center"
          link="/"
          />
          <Link 
          text="Account"
          link="/"
          />
          <Link 
          text="Media Center"
          link="/"
          />
          <Link 
          text="Investor Relations"
          link="/"
          />
          <Link 
          text="Jobs"
          link="/"
          />
          <Link 
          text="Ways to Watch"
          link="/"
          />
          <Link 
          text="Terms of Use"
          link="/"
          />
          <Link 
          text="Privacy"
          link="/"
          />
          <Link 
          text="Cookie Preferences"
          link="/"
          />
          <Link 
          text="Corporate Information"
          link="/"
          />
          <Link 
          text="Contact Us"
          link="/"
          />
          <Link 
          text="Speed Test"
          link="/"
          />
          <Link 
          text="Legal Notices"
          link="/"
          />
          <Link 
          text="Only on Netflix"
          link="/"
          />
         
        </div>

        <div className='app__block'> 
            <ImSphere color='#FFFFFF'/>

            <p >English</p>

            <MdArrowDropDown color='#FFFFFF'/>

        </div>

        <p style={{textDecoration:"none",marginTop:'2rem', marginBottom:'1rem'}}>Netflix Nigeria</p>
      
    </div>
  )
}

export default Footer
