import React from 'react'
import { HERO_CONTENT } from '../constants'

// import photo from '../assets/KrishnaRaj_Photo.jpg'
import photo from '../assets/kr_photo.jpeg'
function Hero() {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-36'>
        <div className='flex flex-wrap'>
            <div className='w-full lg:w-1/2'>
                <div className='flex flex-col items-center lg:items-start'>
                    <h1 className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl'>Krishna Raj</h1>
                    <span className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent'>Full Stack Developer</span>
                    <p className='py-6 font-light my-2 max-w-xl tracking-tighter'>{HERO_CONTENT}</p> 
                </div>
            </div>
            <div className='w-full lg:w-1/2 lg:pd-8'>
                <div className='flex justify-center'>
                    <img className='h-96 lg:ml-20 lg:mt-20 rounded-2xl' src={photo} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero
