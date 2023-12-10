import React from 'react'
import Header from './(components)/Header'
import img from "./asserts/hospital.jpg"
import Image from 'next/image'
import img1 from "./asserts/img1.jpeg"
export default function page() {
  return (
    <div>
       <Header/>
      <div style={{display : 'flex'}}>
    
       <div >
     <Image className='image' src={img} width={1800} height={1000}  /></div>
     <div className='article'style={{padding : "30px"}}>Hospitals, often referred to as sanctuaries of healing, play a pivotal role in safeguarding the well-being of communities. In this article, we explore the multifaceted dimensions of hospitals, delving into the compassionate care, cutting-edge technologies, and the dedicated professionals that collectively define these vital institutions.

Section 1: The Heartbeat of Compassionate Care
At the core of every hospital lies the commitment to provide compassionate care to those in need. Doctors, nurses, and an entire team of healthcare professionals work tirelessly to ensure patients not only receive medical treatment but also experience empathy, understanding, and a sense of comfort during their most vulnerable moments.</div>

      </div>
      <div  className='article2' style={{display:"flex"}}>
 


In the 21st century, technology has become an indispensable ally in the medical field. Electronic health records, robotic surgeries, and diagnostic advancements empower healthcare professionals to provide more accurate and personalized care.
The medical profession stands as a testament to human resilience, empathy, and the relentless pursuit of knowledge. Healthcare professionals, armed with compassion and expertise, navigate the intricate web of challenges, emerging triumphant in their mission to heal and comfort. As we celebrate the medical profession, we acknowledge the profound impact it has on individual lives and the collective well-being of societies worldwide.
<div>
  <Image  src={img1} width={1800} height={1600}/>
</div>


</div>
    </div>
  )
}
