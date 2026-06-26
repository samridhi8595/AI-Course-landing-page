import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Curriculum from './components/Curriculum'

const App = () => {
  return (
    <div className='bg-[#fcfbf8] flex min-h-screen items-center justify-center'>
         
        <Navbar/>
        <Hero/>
        <Curriculum/>
      
    </div>
  )
}

export default App
