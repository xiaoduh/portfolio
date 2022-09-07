import React from 'react';
import { useRef} from 'react';
import "./contact.css";
import {MdAlternateEmail} from 'react-icons/md'
import {SiMessenger} from 'react-icons/si'
import {IoLogoWhatsapp} from 'react-icons/io'
import emailjs from '@emailjs/browser';


const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        const formMess = document.getElementById("output-mess");
    
        emailjs
      .sendForm(
        "service_wzwertf",
        "template_p6waqzi",
        form.current,
        'L5n2ElM8iKvEQ3oim'
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();

          formMess.innerHTML = "<button class='btn btn-primary' id='success'>Message envoyé !</button>";

          setTimeout(() => {
            formMess.innerHTML = "";
          }, 4500);
        },
        (error) => {
          console.log(error.text);
          formMess.innerHTML =
            "<button class='btn btn-primary' id='failed'>Une erreur s'est produite, veuillez réessayer</button>";

          setTimeout(() => {
            formMess.innerHTML = "";
          }, 4500);
        }
      );
      };
    return (
        <section id='contact'>
            <h5>échangeons sur votre projet</h5>
            <h2>Me contacter</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className='contact__option'>
                        <MdAlternateEmail className='contact__icon'/>
                        <h4>Email</h4>
                        <a href="mailto:clement.lidar@gmail.com" target="_blank">Me pinger par email</a>
                    </article>
                    <article className='contact__option'>
                        <SiMessenger className='contact__icon'/>
                        <h4>Messenger</h4>
                        <a href="https://m.me/clement.ldr" target="_blank">Me pinger sur Messenger</a>
                    </article>
                    <article className='contact__option'>
                        <IoLogoWhatsapp className='contact__icon'/>
                        <h4>WhatsApp</h4>
                        <a href="https://api.whatsapp.com/send?phone=+2222222" target="_blank">Me pinger par email</a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='nom' placeholder='Nom' required />
                    <input type="email" name='email' placeholder='john.duff@email.com' required />
                    <textarea name="Message" rows="10" placeholder='Message' required></textarea>
                    <div className='output-message'>
                        <button type='submit' className='btn btn-primary'>Envoyer</button>
                        <div id='output-mess'></div>
                    </div>
                </form>
            </div>

        </section>
    );
};

export default Contact;