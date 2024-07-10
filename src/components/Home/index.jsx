import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import { Link } from 'react-router-dom';
import LogoD from '../../assets/images/logo-d.png';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import Logo from './Logo';

const Home = () => {
  const[letterClass,setLetterClass]=useState('text-animate');
  const nameArray=['i', 'm', 'i', 't', 'r', 'i', 'j', 'e'];
  const jobArray=['w','e','b',' ','d','e','v','e','l','o','p','e','r','.'];

  useEffect(()=>{
    setTimeout(()=>
    setLetterClass('text-animate-hover')
    ,4000)
    }, []);
    
  return (<>
    <div className="container home-page">
        <div className="text-zone">
            <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>   
            <br/>
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img src={LogoD} alt="developer"/>
            <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
            <br/>
            <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={23} />
            </h1>
            <h2>Full-Stack Web Developer</h2>
            <Link to="/contact" className='flat-button'>CONTACT ME</Link>
        </div>
        <Logo/>
        </div>
        <Loader type="triangle-skew-spin" />
  </>
  )
}
export default Home