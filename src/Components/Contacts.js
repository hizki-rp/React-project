import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contacts = () => {

  const serviceID = 'service_ID';
  const templateID = 'template_ID';
  const publicKey = 'JH28xpWa47BdlhPUE';

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('serviceID', 'templateID', form.current, 'publicKey')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='app__contacts ' id='contact'>
        <div className='app__contacts-header'>
           <h2>Contact</h2>
           <p>
            please fill out the form and I will get back to you!
           </p>
        </div>
        <div className='app__contacts-form'>
           <form ref={form} onSubmit={sendEmail}>
           <input type='text' className='form-control'
           name='name'
           placeholder='Name'/>
             <input type='email' className='form-control'
           name='email'
           placeholder='Email'/>
             <input type='phone' className='form-control'
           name='phone'
           placeholder='Phone Number'/>
            <input type='text' className='form-control'
           name='subject'
           placeholder='Subject'/>
            <textarea
              placeholder='Your Message'
              name='description'
            ></textarea>
           <input type='submit' value="send" />
           </form>
        </div>
    </div>
  )
}

export default Contacts;