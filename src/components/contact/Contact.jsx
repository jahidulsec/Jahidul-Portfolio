import React, { useRef, useState } from 'react'
import {FaPhoneAlt} from "react-icons/fa"
import {MdEmail, MdLocationOn} from "react-icons/md"
import emailjs from '@emailjs/browser'


const Contact = () => {
  const formRef = useRef();

  const [success, setSuccess] = useState(false)

  

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      import.meta.env.VITE_SERVICE_ID, 
      import.meta.env.VITE_TEMPLATE_ID, 
      formRef.current, 
      import.meta.env.VITE_PUBLIC_KEY)
        .then((result) => {
            console.log(result.text);
            setSuccess(true)
            e.target.reset()
            const timeout = setTimeout(()=> {
              setSuccess(false)
            },5000)
        }, (error) => {
            console.log(error.text);
        });
  }
  
  return (
    <section className='contact-section' id='contact'>
      <div className="container grid">
        <div className="title">
          <h1 className='text-neutral-300 fw-extra-bold fs-section-title ff-primary'>
            CONTACT <span className='fw-light'>ME</span>
          </h1>
        </div>
        <div className="contact-info-list">
          <div className="contact-card">
            <FaPhoneAlt size={20} />
            <h5 className="contact-title text-primary ff-primary fw-bold fs-para">Call Me</h5>
            <h5 className='contact-value text-primary ff-primary fw-regular fs-para'>+880 1785 945968</h5>
          </div>
          <div className="contact-card">
            <MdEmail size={20} />
            <h5 className="contact-title text-primary ff-primary fw-bold fs-para">Email</h5>
            <h5 className='contact-value text-primary ff-primary fw-regular fs-para'>jahidul.islam.sec@gmail.com</h5>
          </div>
          <div className="contact-card">
            <MdLocationOn size={20} />
            <h5 className="contact-title text-primary ff-primary fw-bold fs-para">Location</h5>
            <h5 className='contact-value text-primary ff-primary fw-regular fs-para'>Feni, Bangladesh</h5>
          </div>
        </div>
        <form 
          className='contact-form' 
          action=""
          ref={formRef}
          onSubmit={sendEmail}
        >
          <input 
            className='ff-primary fw-regular fs-para' 
            type="text" 
            name="name" 
            id="name" 
            placeholder='Full Name'
            required
          />
          <input 
            className='ff-primary fw-regular fs-para' 
            type="email" 
            name="email" 
            id="email" 
            placeholder='Email' 
            required
          />
          <textarea 
            className='ff-primary fw-regular fs-para' 
            name="message" 
            id="message" 
            cols="30" 
            rows="10" 
            placeholder='Leave a message'
          ></textarea>
          <button className="btn-light">Send Message</button>
          <p className='text-neutral-500 fs-para fw-para ff-primary'>
            {success && `Successfully send!`}
          </p>
        </form>
      </div>
    </section>
  )
}

export default Contact