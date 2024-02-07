import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faGitAlt, faHtml5, faJsSquare, faReact, faSass } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';

const About = () => {
  const[letterClass,setLetterClass]=useState("text-animate")

  useEffect(()=>{
    setTimeout(()=>
    setLetterClass("text-animate-hover")
    ,3000)
    }, []);

  
  return (
  <>
    <div className='container about-page'>
      <div className='text-zone'>
        <h1>
          <AnimatedLetters letterClass={letterClass} strArray={['A','b','o','u','t',' ','m','e']} idx={15}/>
        </h1>
        <p>
        I am a highly motivated and driven full-stack web developer, actively seeking opportunities to grow, learn, and collaborate with like-minded individuals on challenging and diverse projects involving the latest technologies.
          </p>
        <p>
        If I were to define myself in one sentence, I would say that I am an eager and ambitious individual who thrives under pressure and is always eager to learn and discover.
          </p>
        <p>I'm perpetually working on improving my skills and expertise by tackling design problems one at a time. With each challenge, I strive to enhance my abilities and stay up-to-date with the latest industry trends and best practices.</p>
      </div>
      <div className='stage-cube-cont'>
        <div className='cubespinner'>
          <div className='face1'><FontAwesomeIcon icon={faReact} color='#61DBFB'/></div>
          <div className='face2'><FontAwesomeIcon icon={faHtml5} color='#f06529'/></div>
          <div className='face3'><FontAwesomeIcon icon={faCss3} color='#264de4'/></div>
          <div className='face4'><FontAwesomeIcon icon={faJsSquare} color='#EFD81D'/></div>
          <div className='face5'><FontAwesomeIcon icon={faGitAlt} color='#EC4D28'/></div>
          <div className='face6'><FontAwesomeIcon icon={faSass} color='#c69'/></div>
        </div>
      </div>
    </div>
    <Loader type="triangle-skew-spin" />
  </>
  )
}
export default About;