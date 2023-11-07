import React from "react";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('react_contact_portfolio', 'React Contact Form', form.current, '7lg6x-BWHcIfBQDMt')
        .then((result) => {
            console.log(result.text);
            console.log("message sent");
            form.current.reset();
            window.alert('Votre e-mail a été envoyé avec succès');
        }, (error) => {
            console.log(error.text);
        });
    };

  return (
    <section id="contact">
         <article className="wrapper">
            <h2 className="section-title">Contact</h2>
            <form ref={form} onSubmit={sendEmail} action="#">
                <div className="dbl-field">
                    <div className="field">
                        <input type="text" name="user_name" placeholder="Renseigner votre nom" required />
                    </div>
                    <div className="field">
                        <input type="text" name="user_email" placeholder="Renseigner votre adresse mail" required />
                    </div>
                </div>
                <div className="message">
                    <textarea name="message" placeholder="Rédiger votre message" required ></textarea>
                </div>
                <div className="button-area">
                    <button type="submit">Envoyer</button>
                </div>
            </form>
        </article>
    </section>
  );
}

export default Contact;