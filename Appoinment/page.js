import React from 'react'

export default function page() {
  return (
    <div>
      <div className='heading'>
      Book An Appointment
      </div>
      
   <div className='doctor' style={{marginTop : "20px",display : 'flex'}}>
     <form className='form' action="#" method="post">
        <label htmlFor="name">Your Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="phone">Phone Number:</label>
        <input type="tel" id="phone" name="phone" required />

        <label htmlFor="date">Appointment Date:</label>
        <input type="date" id="date" name="date" required />

        <label htmlFor="time">Appointment Time:</label>
        <input type="time" id="time" name="time" required />

        <label htmlFor="message">Additional Information:</label>
        <textarea id="message" name="message" rows="4"></textarea>

        <input type="submit" value="Book Appointment" />
      </form>
      {/* <div><Image src={img1} /> */}
 </div>
        </div>

    
  )
}
