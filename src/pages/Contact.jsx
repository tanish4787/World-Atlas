import React from 'react'
import '../App.css'

const Contact = () => {
  const handleFormSubmit = (formData) => {
    const formInputData = Object.fromEntries(formData.entries())
    console.log(formInputData);

  }


  return (
    <section className='section-contact'>
      <h2 className='container-title'>
        Contact Us
      </h2>
      <div className="contact-wrapper container">

        <form action={handleFormSubmit}>
          <input type="text" className='form-control' required autoComplete='false' placeholder='Enter Your Name'
            name='username' />

          <input type="email" name="email" className='form-control' placeholder='Enter Your Mail' required autoComplete='false' />

          <textarea name="message" className='form-control'
            rows="10"
            placeholder='Enter your Message'
            required
            autoComplete='false'
          ></textarea>

          <button type='submit'>Send</button>

        </form>
      </div>


    </section>
  )
}

export default Contact
