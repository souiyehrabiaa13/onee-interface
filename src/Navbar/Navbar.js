import React from 'react'
import './Navbar.css'
import logo from '../pictures/LOGOONE.jpg'
import bnner from '../pictures/ONEELC.jpg'
const Navbar = () => {
  return (
    <nav>
      <div className='container'>
        <img src={logo} className='logo' alt='logo'/>
        <img src={bnner} className='BNELC' alt='logo'/>
      </div>
        <ul className='nav-links'>
          <li className='link'><a>Acceuil</a></li>
          <li className='link'><a href='#service'>Branche</a></li>
          <li className='link'><a href='#support'>Support</a></li>
          <li className='link'><a>About-us</a></li>
        </ul>
    </nav>
  )
}

export default Navbar