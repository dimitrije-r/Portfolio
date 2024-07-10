import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faGitAlt, faJsSquare, faReact, faNode, faPhp } from '@fortawesome/free-brands-svg-icons';
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
        <p>
          I'm perpetually working on improving my skills and expertise by tackling design problems one at a time. With each challenge, I strive to enhance my abilities and stay up-to-date with the latest industry trends and best practices.
          </p>
      </div>
      <div className="cube-container">
  <div className="rubiks-cube rubiks-cube-1">
    {/* 1 */}
    <div className="detail">
      <div className="side front"><FontAwesomeIcon icon={faReact} color='#61DBFB'/></div>
      <div className="side back"><FontAwesomeIcon icon={faPhp} color='#777BB3'/></div>
      <div className="side top"><FontAwesomeIcon icon={faCss3} color='#264de4'/></div>
      <div className="side bottom"><FontAwesomeIcon icon={faJsSquare} color='#EFD81D'/></div>
      <div className="side left"><FontAwesomeIcon icon={faGitAlt} color='#EC4D28'/></div>
      <div className="side right"><FontAwesomeIcon icon={faNode} color='#3c873a'/></div>
    </div>
    {/* 2 */}
    <div className="detail">
      <div className="side front"><FontAwesomeIcon icon={faReact} color='#61DBFB'/></div>
      <div className="side back"><FontAwesomeIcon icon={faPhp} color='#777BB3'/></div>
      <div className="side top"><FontAwesomeIcon icon={faCss3} color='#264de4'/></div>
      <div className="side bottom"><FontAwesomeIcon icon={faJsSquare} color='#EFD81D'/></div>
      <div className="side left"><FontAwesomeIcon icon={faGitAlt} color='#EC4D28'/></div>
      <div className="side right"><FontAwesomeIcon icon={faNode} color='#3c873a'/></div>
    </div>
    {/* 3 */}
    <div className="detail">
      <div className="side front"><FontAwesomeIcon icon={faReact} color='#61DBFB'/></div>
      <div className="side back"><FontAwesomeIcon icon={faPhp} color='#777BB3'/></div>
      <div className="side top"><FontAwesomeIcon icon={faCss3} color='#264de4'/></div>
      <div className="side bottom"><FontAwesomeIcon icon={faJsSquare} color='#EFD81D'/></div>
      <div className="side left"><FontAwesomeIcon icon={faGitAlt} color='#EC4D28'/></div>
      <div className="side right"><FontAwesomeIcon icon={faNode} color='#3c873a'/></div>
    </div>
    {/* 4 */}
    <div className="detail">
      <div className="side front"><FontAwesomeIcon icon={faReact} color='#61DBFB'/></div>
      <div className="side back"><FontAwesomeIcon icon={faPhp} color='#777BB3'/></div>
      <div className="side top"><FontAwesomeIcon icon={faCss3} color='#264de4'/></div>
      <div className="side bottom"><FontAwesomeIcon icon={faJsSquare} color='#EFD81D'/></div>
      <div className="side left"><FontAwesomeIcon icon={faGitAlt} color='#EC4D28'/></div>
      <div className="side right"><FontAwesomeIcon icon={faNode} color='#3c873a'/></div>
    </div>
    {/* 5 */}
    <div className="detail">
      <div className="side front"><FontAwesomeIcon icon={faReact} color='#61DBFB'/></div>
      <div className="side back"><FontAwesomeIcon icon={faPhp} color='#777BB3'/></div>
      <div className="side top"><FontAwesomeIcon icon={faCss3} color='#264de4'/></div>
      <div className="side bottom"><FontAwesomeIcon icon={faJsSquare} color='#EFD81D'/></div>
      <div className="side left"><FontAwesomeIcon icon={faGitAlt} color='#EC4D28'/></div>
      <div className="side right"><FontAwesomeIcon icon={faNode} color='#3c873a'/></div>
    </div>
    {/* 6 */}
    <div className="detail">
      <div className="side front"><FontAwesomeIcon icon={faReact} color='#61DBFB'/></div>
      <div className="side back"><FontAwesomeIcon icon={faPhp} color='#777BB3'/></div>
      <div className="side top"><FontAwesomeIcon icon={faCss3} color='#264de4'/></div>
      <div className="side bottom"><FontAwesomeIcon icon={faJsSquare} color='#EFD81D'/></div>
      <div className="side left"><FontAwesomeIcon icon={faGitAlt} color='#EC4D28'/></div>
      <div className="side right"><FontAwesomeIcon icon={faNode} color='#3c873a'/></div>
    </div>
    {/* 7 */}
    <div className="detail">
      <div className="side front"><FontAwesomeIcon icon={faReact} color='#61DBFB'/></div>
      <div className="side back"><FontAwesomeIcon icon={faPhp} color='#777BB3'/></div>
      <div className="side top"><FontAwesomeIcon icon={faCss3} color='#264de4'/></div>
      <div className="side bottom"><FontAwesomeIcon icon={faJsSquare} color='#EFD81D'/></div>
      <div className="side left"><FontAwesomeIcon icon={faGitAlt} color='#EC4D28'/></div>
      <div className="side right"><FontAwesomeIcon icon={faNode} color='#3c873a'/></div>
    </div>
    {/* 8 */}
    <div className="detail">
      <div className="side front"><FontAwesomeIcon icon={faReact} color='#61DBFB'/></div>
      <div className="side back"><FontAwesomeIcon icon={faPhp} color='#777BB3'/></div>
      <div className="side top"><FontAwesomeIcon icon={faCss3} color='#264de4'/></div>
      <div className="side bottom"><FontAwesomeIcon icon={faJsSquare} color='#EFD81D'/></div>
      <div className="side left"><FontAwesomeIcon icon={faGitAlt} color='#EC4D28'/></div>
      <div className="side right"><FontAwesomeIcon icon={faNode} color='#3c873a'/></div>
    </div>
    {/* 9 */}
    <div className="detail">
      <div className="side front"><FontAwesomeIcon icon={faReact} color='#61DBFB'/></div>
      <div className="side back"><FontAwesomeIcon icon={faPhp} color='#777BB3'/></div>
      <div className="side top"><FontAwesomeIcon icon={faCss3} color='#264de4'/></div>
      <div className="side bottom"><FontAwesomeIcon icon={faJsSquare} color='#EFD81D'/></div>
      <div className="side left"><FontAwesomeIcon icon={faGitAlt} color='#EC4D28'/></div>
      <div className="side right"><FontAwesomeIcon icon={faNode} color='#3c873a'/></div>
    </div>
    {/* 10 */}
    <div className="detail">
      <div className="side front"><FontAwesomeIcon icon={faReact} color='#61DBFB'/></div>
      <div className="side back"><FontAwesomeIcon icon={faPhp} color='#777BB3'/></div>
      <div className="side top"><FontAwesomeIcon icon={faCss3} color='#264de4'/></div>
      <div className="side bottom"><FontAwesomeIcon icon={faJsSquare} color='#EFD81D'/></div>
      <div className="side left"><FontAwesomeIcon icon={faGitAlt} color='#EC4D28'/></div>
      <div className="side right"><FontAwesomeIcon icon={faNode} color='#3c873a'/></div>
    </div>
    {/* 11 */}
    <div className="detail">
      <div className="side front"><FontAwesomeIcon icon={faReact} color='#61DBFB'/></div>
      <div className="side back"><FontAwesomeIcon icon={faPhp} color='#777BB3'/></div>
      <div className="side top"><FontAwesomeIcon icon={faCss3} color='#264de4'/></div>
      <div className="side bottom"><FontAwesomeIcon icon={faJsSquare} color='#EFD81D'/></div>
      <div className="side left"><FontAwesomeIcon icon={faGitAlt} color='#EC4D28'/></div>
      <div className="side right"><FontAwesomeIcon icon={faNode} color='#3c873a'/></div>
    </div>
    {/* 12 */}
    <div className="detail">
      <div className="side front"><FontAwesomeIcon icon={faReact} color='#61DBFB'/></div>
      <div className="side back"><FontAwesomeIcon icon={faPhp} color='#777BB3'/></div>
      <div className="side top"><FontAwesomeIcon icon={faCss3} color='#264de4'/></div>
      <div className="side bottom"><FontAwesomeIcon icon={faJsSquare} color='#EFD81D'/></div>
      <div className="side left"><FontAwesomeIcon icon={faGitAlt} color='#EC4D28'/></div>
      <div className="side right"><FontAwesomeIcon icon={faNode} color='#3c873a'/></div>
    </div>
    {/* 13 */}
    <div className="detail">
      <div className="side front"><FontAwesomeIcon icon={faReact} color='#61DBFB'/></div>
      <div className="side back"><FontAwesomeIcon icon={faPhp} color='#777BB3'/></div>
      <div className="side top"><FontAwesomeIcon icon={faCss3} color='#264de4'/></div>
      <div className="side bottom"><FontAwesomeIcon icon={faJsSquare} color='#EFD81D'/></div>
      <div className="side left"><FontAwesomeIcon icon={faGitAlt} color='#EC4D28'/></div>
      <div className="side right"><FontAwesomeIcon icon={faNode} color='#3c873a'/></div>
    </div>
    {/* 14 */}
    <div className="detail">
      <div className="side front"><FontAwesomeIcon icon={faReact} color='#61DBFB'/></div>
      <div className="side back"><FontAwesomeIcon icon={faPhp} color='#777BB3'/></div>
      <div className="side top"><FontAwesomeIcon icon={faCss3} color='#264de4'/></div>
      <div className="side bottom"><FontAwesomeIcon icon={faJsSquare} color='#EFD81D'/></div>
      <div className="side left"><FontAwesomeIcon icon={faGitAlt} color='#EC4D28'/></div>
      <div className="side right"><FontAwesomeIcon icon={faNode} color='#3c873a'/></div>
    </div>
    {/* 15 */}
    <div className="detail">
      <div className="side front"><FontAwesomeIcon icon={faReact} color='#61DBFB'/></div>
      <div className="side back"><FontAwesomeIcon icon={faPhp} color='#777BB3'/></div>
      <div className="side top"><FontAwesomeIcon icon={faCss3} color='#264de4'/></div>
      <div className="side bottom"><FontAwesomeIcon icon={faJsSquare} color='#EFD81D'/></div>
      <div className="side left"><FontAwesomeIcon icon={faGitAlt} color='#EC4D28'/></div>
      <div className="side right"><FontAwesomeIcon icon={faNode} color='#3c873a'/></div>
    </div>
    {/* 16 */}
    <div className="detail">
      <div className="side front"><FontAwesomeIcon icon={faReact} color='#61DBFB'/></div>
      <div className="side back"><FontAwesomeIcon icon={faPhp} color='#777BB3'/></div>
      <div className="side top"><FontAwesomeIcon icon={faCss3} color='#264de4'/></div>
      <div className="side bottom"><FontAwesomeIcon icon={faJsSquare} color='#EFD81D'/></div>
      <div className="side left"><FontAwesomeIcon icon={faGitAlt} color='#EC4D28'/></div>
      <div className="side right"><FontAwesomeIcon icon={faNode} color='#3c873a'/></div>
    </div>
    {/* 17 */}
    <div className="detail">
      <div className="side front"><FontAwesomeIcon icon={faReact} color='#61DBFB'/></div>
      <div className="side back"><FontAwesomeIcon icon={faPhp} color='#777BB3'/></div>
      <div className="side top"><FontAwesomeIcon icon={faCss3} color='#264de4'/></div>
      <div className="side bottom"><FontAwesomeIcon icon={faJsSquare} color='#EFD81D'/></div>
      <div className="side left"><FontAwesomeIcon icon={faGitAlt} color='#EC4D28'/></div>
      <div className="side right"><FontAwesomeIcon icon={faNode} color='#3c873a'/></div>
    </div>
    {/* 18 */}
    <div className="detail">
      <div className="side front"><FontAwesomeIcon icon={faReact} color='#61DBFB'/></div>
      <div className="side back"><FontAwesomeIcon icon={faPhp} color='#777BB3'/></div>
      <div className="side top"><FontAwesomeIcon icon={faCss3} color='#264de4'/></div>
      <div className="side bottom"><FontAwesomeIcon icon={faJsSquare} color='#EFD81D'/></div>
      <div className="side left"><FontAwesomeIcon icon={faGitAlt} color='#EC4D28'/></div>
      <div className="side right"><FontAwesomeIcon icon={faNode} color='#3c873a'/></div>
    </div>
    {/* 19 */}
    <div className="detail">
      <div className="side front"><FontAwesomeIcon icon={faReact} color='#61DBFB'/></div>
      <div className="side back"><FontAwesomeIcon icon={faPhp} color='#777BB3'/></div>
      <div className="side top"><FontAwesomeIcon icon={faCss3} color='#264de4'/></div>
      <div className="side bottom"><FontAwesomeIcon icon={faJsSquare} color='#EFD81D'/></div>
      <div className="side left"><FontAwesomeIcon icon={faGitAlt} color='#EC4D28'/></div>
      <div className="side right"><FontAwesomeIcon icon={faNode} color='#3c873a'/></div>
    </div>
    {/* 20 */}
    <div className="detail">
      <div className="side front"><FontAwesomeIcon icon={faReact} color='#61DBFB'/></div>
      <div className="side back"><FontAwesomeIcon icon={faPhp} color='#777BB3'/></div>
      <div className="side top"><FontAwesomeIcon icon={faCss3} color='#264de4'/></div>
      <div className="side bottom"><FontAwesomeIcon icon={faJsSquare} color='#EFD81D'/></div>
      <div className="side left"><FontAwesomeIcon icon={faGitAlt} color='#EC4D28'/></div>
      <div className="side right"><FontAwesomeIcon icon={faNode} color='#3c873a'/></div>
    </div>
    {/* 21 */}
    <div className="detail">
      <div className="side front"><FontAwesomeIcon icon={faReact} color='#61DBFB'/></div>
      <div className="side back"><FontAwesomeIcon icon={faPhp} color='#777BB3'/></div>
      <div className="side top"><FontAwesomeIcon icon={faCss3} color='#264de4'/></div>
      <div className="side bottom"><FontAwesomeIcon icon={faJsSquare} color='#EFD81D'/></div>
      <div className="side left"><FontAwesomeIcon icon={faGitAlt} color='#EC4D28'/></div>
      <div className="side right"><FontAwesomeIcon icon={faNode} color='#3c873a'/></div>
    </div>
    {/* 22 */}
    <div className="detail">
      <div className="side front"><FontAwesomeIcon icon={faReact} color='#61DBFB'/></div>
      <div className="side back"><FontAwesomeIcon icon={faPhp} color='#777BB3'/></div>
      <div className="side top"><FontAwesomeIcon icon={faCss3} color='#264de4'/></div>
      <div className="side bottom"><FontAwesomeIcon icon={faJsSquare} color='#EFD81D'/></div>
      <div className="side left"><FontAwesomeIcon icon={faGitAlt} color='#EC4D28'/></div>
      <div className="side right"><FontAwesomeIcon icon={faNode} color='#3c873a'/></div>
    </div>
    {/* 23 */}
    <div className="detail">
      <div className="side front"><FontAwesomeIcon icon={faReact} color='#61DBFB'/></div>
      <div className="side back"><FontAwesomeIcon icon={faPhp} color='#777BB3'/></div>
      <div className="side top"><FontAwesomeIcon icon={faCss3} color='#264de4'/></div>
      <div className="side bottom"><FontAwesomeIcon icon={faJsSquare} color='#EFD81D'/></div>
      <div className="side left"><FontAwesomeIcon icon={faGitAlt} color='#EC4D28'/></div>
      <div className="side right"><FontAwesomeIcon icon={faNode} color='#3c873a'/></div>
    </div>
    {/* 24 */}
    <div className="detail">
      <div className="side front"><FontAwesomeIcon icon={faReact} color='#61DBFB'/></div>
      <div className="side back"><FontAwesomeIcon icon={faPhp} color='#777BB3'/></div>
      <div className="side top"><FontAwesomeIcon icon={faCss3} color='#264de4'/></div>
      <div className="side bottom"><FontAwesomeIcon icon={faJsSquare} color='#EFD81D'/></div>
      <div className="side left"><FontAwesomeIcon icon={faGitAlt} color='#EC4D28'/></div>
      <div className="side right"><FontAwesomeIcon icon={faNode} color='#3c873a'/></div>
    </div>
    {/* 25 */}
    <div className="detail">
      <div className="side front"><FontAwesomeIcon icon={faReact} color='#61DBFB'/></div>
      <div className="side back"><FontAwesomeIcon icon={faPhp} color='#777BB3'/></div>
      <div className="side top"><FontAwesomeIcon icon={faCss3} color='#264de4'/></div>
      <div className="side bottom"><FontAwesomeIcon icon={faJsSquare} color='#EFD81D'/></div>
      <div className="side left"><FontAwesomeIcon icon={faGitAlt} color='#EC4D28'/></div>
      <div className="side right"><FontAwesomeIcon icon={faNode} color='#3c873a'/></div>
    </div>
    {/* 26 */}
    <div className="detail">
      <div className="side front"><FontAwesomeIcon icon={faReact} color='#61DBFB'/></div>
      <div className="side back"><FontAwesomeIcon icon={faPhp} color='#777BB3'/></div>
      <div className="side top"><FontAwesomeIcon icon={faCss3} color='#264de4'/></div>
      <div className="side bottom"><FontAwesomeIcon icon={faJsSquare} color='#EFD81D'/></div>
      <div className="side left"><FontAwesomeIcon icon={faGitAlt} color='#EC4D28'/></div>
      <div className="side right"><FontAwesomeIcon icon={faNode} color='#3c873a'/></div>
    </div>
    {/* 27 */}
    <div className="detail">
      <div className="side front"><FontAwesomeIcon icon={faReact} color='#61DBFB'/></div>
      <div className="side back"><FontAwesomeIcon icon={faPhp} color='#777BB3'/></div>
      <div className="side top"><FontAwesomeIcon icon={faCss3} color='#264de4'/></div>
      <div className="side bottom"><FontAwesomeIcon icon={faJsSquare} color='#EFD81D'/></div>
      <div className="side left"><FontAwesomeIcon icon={faGitAlt} color='#EC4D28'/></div>
      <div className="side right"><FontAwesomeIcon icon={faNode} color='#3c873a'/></div>
    </div>
  </div>
  <div className="glowing-background"></div>
  </div>
    </div>
    <Loader type="triangle-skew-spin" />
  </>
  )
}
export default About;