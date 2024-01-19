import React from 'react'
import CaroScroll from '../components/caroscroll'

const Projects = () => {
  return (
    <main>
      <div className="hero bg-base-100" style={{"height": "85vh"}}>
        <div className="hero-content text-center">
          <div className="max-w-8xl">
            <h1 className="text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">PROJECTS</h1>
          </div>
        </div>
      </div>
      <CaroScroll></CaroScroll>
    </main>
  )
}

export default Projects