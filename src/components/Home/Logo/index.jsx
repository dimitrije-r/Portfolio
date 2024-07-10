import './index.scss';
import LogoD from '../../../assets/images/logo-d.png';
import { useRef, useEffect } from 'react';
import gsap from 'gsap-trial';

const Logo = () => {
  const logoRef = useRef();

  useEffect(() => {
    gsap.to(logoRef.current, {
      duration: 1,
      opacity: 1,
      delay: 1
    });
  }, []);

  return (
    <div className="logo-container">
      <img ref={logoRef} className="solid-logo" src={LogoD} alt="D" />
    </div>
  );
};

export default Logo;