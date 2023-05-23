import React from 'react'
import './Link.css'

const Link = ({text,link}) => (
      <li class="footer-link-item_q" placeholder="footer_responsive_link_faq_item">
        <a class="footer-link" data-uia="footer-link" href={link} placeholder="footer_responsive_link_faq">
          <span id="" data-uia="data-uia-footer-label">{text}</span></a>
      </li> 
  
);

export default Link