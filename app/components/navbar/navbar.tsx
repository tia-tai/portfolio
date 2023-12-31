import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const NavBar = () => {
    const [setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);


  return (
    <div className="navbar bg-base-100">
        <div className="flex-1 pl-10 pt-8">
            <Link className="font-mono font-black text-5xl" href={"/"}>TL</Link>
        </div>
    </div>
  )
}

export default NavBar