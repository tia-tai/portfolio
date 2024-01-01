import React from 'react'

interface BackgroundProps {
    children: string
}

function BackDrop({ children }: BackgroundProps) {
  return (
    <div className='relative text-9xl font-semibold opacity-10 text-center italic tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-zinc-50'>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
    </div>
  )
}

export default BackDrop