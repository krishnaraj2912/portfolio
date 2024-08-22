import React from 'react'
import logo from '../assets/krLogo.png'
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'

function Navbar() {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img className='mx-2 w-10' src={logo} alt="" />
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <a href="https://www.linkedin.com/in/krishna-raj-36269b142/" target="_blank"><FaLinkedin /></a>
            <a href="https://github.com/krishnaraj2912" target="_blank"><FaGithub /></a>
            <a href="https://www.instagram.com/_.krish_______/" target='_blank'><FaInstagram /></a>
        </div>
    </nav>
  )
}

export default Navbar
