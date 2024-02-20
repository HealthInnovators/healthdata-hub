import React from 'react'
import { Link } from 'react-router-dom'
import image1 from '../images/healthiAI.png'

function Navbar() {
  return (
    <div className='px-4 py-3 bg-white text-blue-800 flex justify-between drop-shadow-lg'>
      <div>
        <img src={image1} alt="Logo" className='w-10 h-10 py-0' />
      </div>
      <div className='hidden md:flex items-center'>
        <Link to={'/'} className='px-5'>Home</Link>
        <Link to={'/about'} className='px-5'>About</Link>
        <Link className='px-5'>Features</Link>
        <Link className='px-5'>Contact</Link>
      </div>
    </div>
  )
}

export default Navbar
