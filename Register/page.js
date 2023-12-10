import React from 'react'
import Button from '../(components)/Button'
import Image from 'next/image'
export default function page() {
  return (
    <div>
      <div className='heading'>Register As</div>
      <Button/><br/>
      <Button/>
      <fieldset className='form'>
      <input type='text'  placeholder='Enter Your Name'></input><br/><br/>
      <input type='Email' placeholder='Email'></input><br/><br/>
      <input type='password' placeholder='Enter Your City'></input><br/><br/>
      <select className='option' id="specialty">
  <option value="">--Select Speciality--</option>
  <option value="Pediatrician">Pediatrician</option>
  <option value="Obstetricians">gynecologist</option>
  <option value="Cardiologist">Cardiologist</option>
  <option value="Oncologist">Oncologist</option>
  <option value="Gastroenterologist">Gastroenterologist</option>
  <option value="Pulmonologist">Pulmonologist</option>
  <option value="Infectious disease">Infectious disease</option>
  <option value="Nephrologist">Nephrologist</option>
  <option value="Endocrinologist">Endocrinologist</option>
  <option value="Ophthalmologist">Ophthalmologist</option>
  <option value="Otolaryngologist">Otolaryngologist</option>
  <option value="Dermatologist">Dermatologist</option>
  <option value="Psychiatrist">Psychiatrist</option>
  <option value="Neurologist">Neurologist</option>
  <option value="Radiologist">Radiologist</option>
  <option value="Anesthesiologist">Anesthesiologist</option>
  <option value="Surgeon">Surgeon</option>
  <option value="Physician">Physician</option>
</select>


      <input type='password' placeholder='Pasword'></input>

      <Button/>
      </fieldset>
    </div>
  )
}
