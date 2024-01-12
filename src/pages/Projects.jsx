import React, { useState } from 'react'
import { projectDetails } from '../config'

export default function Projects() {

  return (
    <div className="flex flex-col w-full text-justify gap-10 overflow-y-hidden">
      <div className="flex flex-col gap-2">
        <p className="text-[30px] tracking-[15px]">Projects</p>
        <small>Click on a project title to see more</small>
      </div>
      <div className="flex flex-col items-start justify-start over">
        {projectDetails.map(({name, details}, index) => (
          <ProjectButton key={index} name={name} details={details} />
        ))}
      </div>
    </div>
  )
}

function ProjectButton({ name, details }) {
  const [openDetails, setOpenDetails] = useState(false)

  return (
    <div className="flex flex-col w-full items-start justify-start gap-4">
      <button
        className="flex w-full text-[22px] border-b border-black/30 gap-4"
        type="button"
        onClick={() => setOpenDetails(!openDetails)}
      >
        {name}
      </button>
      <div
        className={`${
          openDetails ? 'h-full' : 'h-0'
        } overflow-hidden ease-in-out duration-300`}
      >
        {openDetails && <DetailProjectContent details={details} />}
      </div>
    </div>
  )
}

function DetailProjectContent({ details }) {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-[16px] font-light">{details}</p>
      <div className="h-[30px] w-[35px] bg-gray-600" />
    </div>
  )
}
