import React from 'react'
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import { v4 as uuidv4 } from 'uuid';

const Navbar = () => {
  return (
    <nav className='nav-container'>
    <h1 className='nav-title'>HarshitTomar.dev</h1> 
      <ul className='nav-container-list'>
     
        {/* <div className="socials-container"> */}
        {/* <a href='/'>Projects</a> */}
        
        {/* <a href='/'>Blogs</a> */}
       
          <a href="https://github.com/HarshitSinghT0mar" target="_black" rel={`noopener noreferrer ${uuidv4()}`}><GitHubIcon sx={{fontSize:30}}/></a>
          <a href="https://www.linkedin.com/in/harshitsinghtomar/" target="_black" rel={`noopener noreferrer ${uuidv4()}`}><LinkedInIcon sx={{fontSize:30}}/></a>
         
        {/* </div> */}
      </ul>
    </nav>
  )
}

export default Navbar
