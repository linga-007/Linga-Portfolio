import React from 'react'
import Image from 'next/image'


const header = () => {
  return (
    <div className=' h-[150px] mx-24  flex justify-between items-center p-12 '>
        
        <h1 className='text-4xl font-semibold font-mono text-slate-800'>Lingesh</h1>
        <div className='flex justify-between text-slate-800 gap-12 font-medium text-lg'>
            <button className='hover:text-[#FFB321]'>Home</button >
            <button className='hover:text-[#FFB321]'>About</button >
            <button className='hover:text-[#FFB321]'>Service</button >
            <button className='hover:text-[#FFB321]'>Portfolio</button >
            <button className='hover:text-[#FFB321] '>Contact</button >
        </div>

        <button className='bg-transparent border border-black  rounded-3xl font-semibold text-black w-32 text-lg h-12 hover:scale-110  transition duration-500'>Contact</button>


    </div>
  )
}

export default header