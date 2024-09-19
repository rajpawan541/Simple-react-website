import React from 'react'

export const Contact = () => {
  return (
    <div className='contact'>
        <div className='contact-map'>
        <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224346.32835516133!2d77.20898509999999!3d28.5273522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1726600325642!5m2!1sen!2sin"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>
         </div>    
        <div className='contact-fomr'>

        </div>
    </div>
  )
}
