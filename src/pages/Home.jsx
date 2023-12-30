import React from 'react'
import CustomContainer from '../core-ui/CustomContainer'
import About from './About'

export default function Home() {
  return (
    <div className="flex flex-col h-screen w-screen px-5 pt-10 pb-5">
      <h1 className="text-[40px] w-fit tracking-[10px]">Clemente Falcone</h1>
      <h3 className="text-[20px] tracking-[10px]">Software Engineer</h3>
      <div className="flex flex-col w-full h-full items-center border-b border-black pr-4 pb-4 mt-2">
        <About />
        <div className='flex justify-between w-[375px] fixed bottom-9 right-5'>
          <p className="text-[15px] tracking-[2px] font-light text-black/60 hover:text-black cursor-pointer ease-in-out duration-150">About me</p>
          <p className="text-[15px] tracking-[2px] font-light text-black/60 hover:text-black cursor-pointer ease-in-out duration-150">Projects</p>
          <p className="text-[15px] tracking-[2px] font-light text-black/60 hover:text-black cursor-pointer ease-in-out duration-150">Contact</p>
        </div>
      </div>
    </div>
  )
}
