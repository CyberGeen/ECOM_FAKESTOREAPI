import React from 'react'
import "../styles/contact.css";
import { FaFacebookF } from "react-icons/fa";
import { BsFillPhoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

function Contact() {

  const jsxBuilder = (Icon,text,value) => {
    return(
      <>
      <div className='contact-icon-container' >
        <Icon size={80} />
      </div>
      <div className='contact-text' >
        {text}
      </div>
      <div className='contact-value' >
        {value}
      </div>

      </>
    )
  }


  return (
    <div className='contact-container' >
      <h1>
        CONTACT US
      </h1>
      <div className='contact-holder' >
        <div className='place-holder' >
          { jsxBuilder(FaFacebookF,'Follow us in Facebook !','FakeFacebook') }
        </div>
        
        <div className='place-holder' >
          { jsxBuilder(BsFillPhoneFill,'Give us a call !','0552321235') }
        </div>

        <div className='place-holder' >
          { jsxBuilder(MdEmail,'Send us a Mail !','fakeMail@faker.com') }
        </div>
      </div>
      
    </div>
  )
}

export default Contact