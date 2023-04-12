import React from 'react'
import './Heading.css'

const Heading = ({title,text}) => (
    <div className='app__heading'>
      <h1>
      {title}
      </h1>
      <p> {text}</p>
    </div>
  
);

export default Heading
