import React from 'react'
import Button from '../(components)/Button'
export default function page() {
  return (
    
    <div>
      <div>
     <h1 className='heading'>All Doctors</h1>
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

      </div>
<div> <Button/></div>
    </div>
    
  )
}
