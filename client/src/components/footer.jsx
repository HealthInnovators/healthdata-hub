import React from 'react'
import { Link } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <div className='py-5 bg-blue-500 text-white text-center'>
      <div className='flex justify-center py-3'>
        <FaFacebook className='text-3xl mx-3' />
        <FaLinkedin className='text-3xl mx-3' />
        <FaYoutube className='text-3xl mx-3' />
      </div>
      <div className='py-3 md:px-20'>
        <span>Healthi AI is a non-profit organization dedicated to revolutionizing the way individuals approach their health. Your contributions directly contribute to our mission of providing personalized health guidance to all.</span>
      </div>
      <div className='py-3'>
        <span>© Copyright 2024 | Healthi AI</span>
      </div>
    </div>
  )
}

export default Footer
