import React, { useState } from 'react'

export default function Projects() {
    const [openDetails, setOpenDetails] = useState(false)
  return (
    <div className="flex flex-col w-full h-full text-justify gap-10 mt-5">
      <div className='flex flex-col gap-2'>
      <p className="text-[30px] tracking-[15px]">Projects</p>
      <small>Click on a project title to see more</small>
      </div>
      <div className="flex flex-col items-start justify-start">
        <div className="flex flex-col w-full items-start justify-start gap-4">
          <button className="flex w-full text-[22px] border-b border-black/30 gap-4" type='button' onClick={() => setOpenDetails(!openDetails)}>Authentication module</button>
          <div className={`${openDetails ? 'h-full' : 'h-0'} overflow-hidden ease-in-out duration-300`}>
            {openDetails && <DetailProjectContent />}
          </div>
        </div>
      </div>
    </div>
  )
}

function DetailProjectContent() {
  return (
    <div className=''>
      <p className="text-[16px] font-light">
        Microservice with: React | Springboot 3 | MySQL | Docker
      </p>
      <p className="text-[14px] font-light text-black/60">
        Developed to register and authenticate users using JWT in order to
        provide a token for specific operations
      </p>
      <div className="h-[200px] w-[350px] bg-slate-500" />
    </div>
  )
}
