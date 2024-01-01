import Link from 'next/link'
import React, { useState } from 'react'

const pages = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Projects",
    href: "/projects",
  },
  {
    title: "Contact Me",
    href: "/contactMe",
  }
]

const NavBar = () => {

  return (
    <div className="navbar bg-base-100 sticky top-0 z-40">
        <div className="flex-1 pl-10 pt-8">
          <Link className="font-mono font-black text-5xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400" href={"/"}>TL</Link>
        </div>
        <div className="flex-none">
        </div>
    </div>
  )
}

export default NavBar