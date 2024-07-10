import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser'


const Contact = () => {
    const[letterClass,setLetterClass]=useState('text-animate');
    const refForm=useRef();

    useEffect(()=>{
        setTimeout(()=>
        setLetterClass('text-animate-hover')
        ,4000)
        }, []);

    const sendEmail = (e)=>{
        e.preventDefault();
        emailjs
        .sendForm(
            'service_0qs93ma',
            'template_rwlqknh',
            refForm.current,
            'f-8_B4d3bVda_W37w'
        )
        .then(
            ()=>{
                alert('Message successfully sent!');
                window.location.reload(false);
            },
            ()=>{
                alert('Failed to send the message, please try again')
            }
        )

    }

  return (
  <>
    <div className='container contact-page'>
        <div className='text-zone'>
            <h1>
            <AnimatedLetters strArray={['C','o','n','t','a','c','t',' ','m','e']} letterClass={letterClass} idx={15}/>
            </h1>
            <p>For any inquiries or to discuss potential opportunities, please feel free to contact me directly via the provided email address or the form below.</p>
            <div className='contact-form'>
                <form ref={refForm} onSubmit={sendEmail}>
                    <ul>
                    <li className='half'><input type="text" name="user_name" placeholder='Name' required/></li>
                    <li className='half'><input type="email" name="user_email" placeholder='Email' required/></li>
                    <li ><input type="text" name="subject" placeholder='Subject' required/></li>
                    <li><textarea placeholder='Message' required name='message'></textarea></li> 
                    <li><input className='flat-button' type="submit" value="SEND"/></li>
                    </ul>
                </form>
            </div>
        </div>
        <div className='add-info'>
        Dimitrije Rankov,<br/>Serbia,<br/>Beograd,<br/>Novi Beograd<br/>
        <span>dimitrije.rankov@outlook.com</span>
        </div>
    </div>
    <Loader type="triangle-skew-spin"/>
  </>

  )
}
export default Contact