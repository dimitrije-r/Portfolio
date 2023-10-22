import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import LogoD from '../../assets/images/logo-d.png';
import LogoSubtitle from '../../assets/images/logo_sub.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBars, faClose, faEnvelope, faHome, faSuitcase, faUser } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';

 const Sidebar = () => {
  const[showNav,setShowNav]=useState(false);


  return (
    <div className='nav-bar'>
    <Link className='logo' to='/'>
    <img src={LogoD} alt="logo"/>
    <img className='sub-logo' src={LogoSubtitle} alt="logo-subtitle"/>
    </Link>
      <nav className={showNav ? 'mobile-show':''}>
      <NavLink onClick={()=>setShowNav(false)} exact="true" activeclassname="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#5f5f60"/>
      </NavLink>
      <NavLink onClick={()=>setShowNav(false)} exact="true" activeclassname="active" className="about-link" to="/about">
        <FontAwesomeIcon icon={faUser} color="#5f5f60"/>
      </NavLink>
      <NavLink onClick={()=>setShowNav(false)} exact="true" activeclassname="active" className="portfolio-link" to="/portfolio">
        <FontAwesomeIcon icon={faSuitcase} color="#5f5f60"/>
      </NavLink>
      <NavLink onClick={()=>setShowNav(false)} exact="true" activeclassname="active" className="contact-link" to="/contact">
        <FontAwesomeIcon icon={faEnvelope} color="#5f5f60"/>
      </NavLink>
      <FontAwesomeIcon icon={faClose} color="#66fcf1" size='3x' className='close-icon' onClick={()=>setShowNav(false)}/>
    </nav>
    <ul>
    <li>
        <a target="_blank" rel='noreferrer' href='https://github.com/dimitrije-r'>
          <FontAwesomeIcon icon={faGithub} color="#5f5f60"/>
        </a>
      </li>
      <li>
        <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/dimitrije-rankov-a8097a295/'>
          <FontAwesomeIcon icon={faLinkedin} color="#5f5f60"/>
        </a>
      </li>
    </ul>
    <FontAwesomeIcon icon={faBars} color='#5f5f60' size="3x" className='hamburger-icon' onClick={()=>{setShowNav(true)}}/>
   </div>
  )
}

export default Sidebar