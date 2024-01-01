import Link from 'next/link'
import React, { useState } from 'react'
import DropMenu from '../dropMenu'

const NavBar = () => {

  return (
    <div className="navbar bg-base-100 sticky top-0 z-40">
        <div className="flex-1 pl-10 pt-8">
          <Link className="font-mono font-black text-5xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400" href={"/"}>TL</Link>
        </div>
        <div className="flex-none">
          <DropMenu/>
        </div>
    </div>
  )
}

export default NavBar