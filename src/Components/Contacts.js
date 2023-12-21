import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import undrawContact from '../assets/undraw_contact.svg';


 const Contacts = () => {
  const style = 'color: green;'
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if(document.getElementById("success") != null){
      var s =document.getElementById("success").innerHTML = 'message successfull!';
      
    }

    emailjs.sendForm('service_ID', 'template_ID', form.current, 'JH28xpWa47BdlhPUE')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
   <div className='contact'>
       
      <div id='contact' className='contact__info'> 
        <h1>Contact</h1>
        <img className='contactSVG' src={undrawContact} alt='contact logo'/>
        <p> Please Leave a message Here! , and I'll get back to you as soon as possible!</p>
      </div>
      <div className='contact__form'>
      <form className='form' ref={form} onSubmit={sendEmail}>
      <label className='form__label'>Name</label>
      <input className='form__input' type="text" name="name" required/>
      <label className='form__label' >Email</label>
      <input className='form__input' type="email" required name="email" />
      <label className='form__label'>Subject</label>
      <input className='form__input' type="text" name="subject" />
      <label className='form__label'>message</label>
      <textarea className='form__input' name="description" />
      < input className='form__btn' type="submit" value="Send" />
    </form>

    <h1 id='success'></h1>
      </div>
   </div>
  );
};

export default Contacts;