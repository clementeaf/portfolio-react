import React from 'react'

export default function About() {
  return (
    <div className="flex flex-col w-full text-justify gap-10 mt-5">
      <div className="flex flex-col">
        <p className="text-[25px] tracking-[15px] pb-5">Brief Resume</p>
        <p className='w-[350px] lg:w-[800px]'>
          Self-taught 32-year-old software engineer, highly focused on resolving
          requirements through efficient, readable code geared towards
          satisfying companies and clients.
        </p>
      </div>
      <div className="flex flex-col">
        <p className="text-[25px] tracking-[15px] pb-5">Tech Stacks</p>
        <p>JavaScript | Java | SQL | NoSQL</p>
      </div>
    </div>
  )
}
