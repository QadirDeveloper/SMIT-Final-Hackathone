import React from 'react'
import Link from 'next/link'
export default function Navebar() {
  return (
    <div>
        <div>
        <Link className='link' href={"./"}>Home Page</Link>
        <Link className='link' href={"./Login"}>Login page</Link>
        <Link className='link' href={"./Doctor"}>Doctor page</Link>
        <Link className='link' href={"./Register"}>Register page</Link>
        <Link className='link' href={"./Appoinment"}>Appoinment page</Link>
      </div>
    </div>
  )
}
