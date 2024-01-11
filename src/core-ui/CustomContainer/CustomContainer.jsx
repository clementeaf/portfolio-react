import React from 'react'

export default function CustomContainer({ children }) {
  return (
    <div data-testid="custom-container" className="flex flex-col items-center justify-center p-10 gap-4 rounded-md shadow-md bg-white">
      {children}
    </div>
  )
}
