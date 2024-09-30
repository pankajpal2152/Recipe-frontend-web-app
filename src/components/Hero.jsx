import React from 'react'
import{IoSearchOutline} from "react-icons/io5";

export const Hero = () => {
  return (
    <div className='px-5 xl:px-10 md:w-1/2 mb-10'>
        <h1 className='mt-6 mb-10 text-5xl xl:text-6xl text-center font-bold text-[#2A3342] leading-normal xl:leading-relaxed'><span className='text-violet-400'>A</span> <span className='text-indigo-400'>blog</span> <span className='text-blue-400'>f</span><span className='text-green-400'>o</span><span className='text-yellow-400'>r</span> <span className='text-orange-400'>food</span> <span className='text-red-400'> enthusiasts </span></h1>
        <form action='/search' className='bg-white p-4 rounded relative flex items-center'>
        <IoSearchOutline className='w-5 h-5 mr-2 text-neutral-300'/>
        <input className='outline-none w-full placeholder:text-[#1b2629]' type='search' name='query' placeholder='Search for recipes...' id='search' required=''/>
        </form>
    </div>
  )
}