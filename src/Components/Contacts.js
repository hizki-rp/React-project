import React from 'react'

const Contacts = () => {
  return (
    <div className='app__contacts ' id='contact'>
        <div className='app__contacts-header'>
           <h2>Contact</h2>
           <p>
            please fill out the form and I will get back to you!
           </p>
        </div>
        <div className='app__contacts-form'>
           <form className='form'>
           <input type='text' className='form-control'
           name='name'
           placeholder='Name'/>
             <input type='email' className='form-control'
           name='name'
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
            <button>submit</button>
           </form>
        </div>
    </div>
  )
}

export default Contacts;