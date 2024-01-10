import React from 'react'

export default function Button({children}) {
  return (
    <button className="text-[15px] tracking-[2px] font-light text-black/60 hover:text-black cursor-pointer ease-in-out duration-150">
      {children}
    </button>
  )
}
