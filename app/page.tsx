import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import SelfImg from './components/self'

export default function Home() {
  return (
    <main>
      <div className="hero bg-base-100" style={{"height": "85vh"}}>
        <div className="hero-content text-center">
          <div className="max-w-8xl">
            <h2 className="text-6xl font-black">MY NAME IS</h2>
            <h1 className="text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">TAI YU LIN</h1>
          </div>
        </div>
      </div>
      <div>
        <div className='grid grid-flow-row-dense grid-cols-6 gap-14 items-stretch py-72'>
          <div></div>
          <div className='col-span-2 self-center'>
            <h1 className="text-3xl font-black text-right">ABOUT ME</h1>
            <p className="text-md font-medium text-right pt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div className='col-span-2 self-center'>
            <SelfImg></SelfImg>
          </div>
          <div></div>
        </div>
      </div>
    </main>
  )
}
