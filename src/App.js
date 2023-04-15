import React from 'react'
import './App.css';
import {Route,Routes,HashRouter} from 'react-router-dom'
import Home from './Home/Home';
import Login from './Routers/Login/Login';


function App() {
  return (
    <div>
      <HashRouter>
      <Routes>
      <Route path='/' element= {<Home/>}/>
      <Route path='/Login' element= {<Login/>}/>
      </Routes>
      </HashRouter>
      
        
    
    </div>
  )
}

export default App
