import React from "react";
import "./contact.css"
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {

    const form =useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_kdaz9l7', 'template_mqa7yvg', form.current, 'nDnAhPaFdQQAQPzGX')
        e.target.reset();
         
      };

      
    return (<section id="contact">
        <h5>Get in Touch</h5>
        <h2>Contact Me</h2>

        <div className="container contact_container">
            <div className="contact_options">
                <article className="contact_option">
                <MdOutlineEmail className="contact_option-icon" />
                    <h4>Email</h4>
                    <h5>sheriffgaye5@gmail.com</h5>
                    
                    <a href="mailto:sheriffgaye5@gmail.com">Send a  message</a>

                </article>

                

                <article className="contact_option">
                <BsWhatsapp  className="contact_option-icon"/>
                    <h4>Whatsapp</h4>
                    <h5>sheriffgaye5@gmail.com</h5>
                  
                    <a href="https://api.whatsapp.com/send?text=YourShareTextHere&phone=+233506264676" target="_blank">Send a  message</a>

                </article>

            </div>
            <form  ref={form} onSubmit={sendEmail}>
                <input type="text" name="name" placeholder="Your Full Name" required />
                <input type="email" name="email" placeholder="Your Email" required />
                <textarea name="message" rows="3" placeholder="Your Message" required></textarea>
                <button type="submit" name="message" className="btn btn-primary">Send Message</button>

            </form>

        </div>

    </section>)

}

export default Contact;