import React, { useEffect, useState } from 'react';
import './Navbar.css';
import Logo from '../../assets/logo/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  } from '@fortawesome/free-regular-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {  } from '@fortawesome/free-brands-svg-icons';
import {Link} from 'react-scroll';



function Navbar() {
  //mobile menu state
  const [sidenav,setSidenav] = useState(false);
  //desktop fixed menu
  const [sticky,setSticky] = useState(false);

  //menu icon
  const menuIcon = <FontAwesomeIcon icon={faBars}/>
  

  //side navbar function
  const sidenavShow = () =>{
    setSidenav(!sidenav);
  }
  //scroll fixed navbar
  useEffect(()=>{
    const handleScroll = ()=>{
      setSticky(window.scrollY > 20 )
    }
    window.addEventListener('scroll',handleScroll);
    return () => window.removeEventListener('scroll',handleScroll);
  })
  return (
  <>
    <header id='site_header' className={`${sticky ? 'sticky' : ''}`}>
      <div className="container">
        <nav className='navbar' id='Navbar'>
          <div className="navbar_brand">
            <a href="/">
              <img src={Logo} alt="Logo"/>
            </a>
          </div>
          <div className="navbar_toggler" onClick={sidenavShow}>
            {menuIcon}
          </div>
          <div className={`menu_items ${sidenav === true ? 'active':' '}`}>
            <ul>
              <li>
                <Link activeClass='active' to='home' spy={true} smooth={true}>
                Home
                </Link>
              </li>
              <li>
                <Link to='about' spy={true} smooth={true}>
                About US 
                </Link>
              </li>
              <li>
                <Link to='services' spy={true} smooth={true}>
                Services
                </Link>
              </li>
              <li>
                <Link to='blog' spy={true} smooth={true}>
                Blog
                </Link>
              </li>
              <li>
                <Link to='blog' spy={true} smooth={true}>
                Contact US
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header> 
  </>
  )
}

export default Navbar;