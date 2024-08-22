import React from 'react'
import { RiReactjsLine, RiJavaFill, RiNodejsFill, RiJavascriptFill } from 'react-icons/ri'
import { SiMongodb } from 'react-icons/si'
import { BiLogoPostgresql } from 'react-icons/bi'

function Technologies() {
  return (
    <div className='border-b border-neutral-800 pb-24'>
      <h1 className='my-20 text-center text-4xl'>Technologies</h1>
      <div className='flex flex-wrap items-center justify-center gap-4'>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
            <RiReactjsLine className='text-7xl text-cyan-400'/>
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
            <RiNodejsFill className='text-7xl text-green-500'/>
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
            <RiJavaFill className='text-7xl text-orange-400'/>
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
            <RiJavascriptFill className='text-7xl text-yellow-400'/>
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
            <SiMongodb className='text-7xl text-green-500'/>
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
            <BiLogoPostgresql className='text-7xl text-sky-600'/>
        </div>
      </div>
    </div>
  )
}

export default Technologies
