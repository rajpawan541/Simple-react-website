import React from 'react'
import { Navbar } from './Components/Navbar/Navbar'
import { Hero } from './Components/Hero/Hero'
import { Services } from './Components/Services/services'

const App = () => {
  return (
    <div>    
      <Navbar/>
      <Hero/>
      <Services/>
    </div>

  )
}

export default App