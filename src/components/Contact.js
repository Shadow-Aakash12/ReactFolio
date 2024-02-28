import React from 'react'
import '../components/Contact.css'

const Contact = () => {
  return (
    <div>
        <div className='header'>
            <a href="#" id='nav' className="logo"><span>C</span>ontact</a>
        </div>

        <div className='contact-form'>
            <label>Name</label>
            <input type='text'/>
            <label>E-mail</label>
            <input type='email'/>
            
        </div>
    </div>
  )
}

export default Contact
