import React from 'react'
import { useNavigate } from 'react-router'

export default function Header() {
  const navigate = useNavigate();
  return (
    <button type="button" className="flex flex-col gap-5" onClick={() => navigate("/")}>
      <h1 className="text-[23px] font-bold w-fit tracking-[10px] sm:text-[65px]">Clemente Falcone</h1>
      <h3 className="text-[20px] tracking-[10px]">Software Engineer</h3>
    </button>
  )
}
