import React from 'react'
import { Navbar } from './Components/Navbar/Navbar'
import { Hero } from './Components/Hero/Hero'
import { Services } from './Components/Services/services'
import { Title } from './Components/Title/title'
import { About } from './Components/About/About'
import { Projects } from './Components/Projects/Projects'
import { Testimonials } from './Components/Testimonials/Testimonials'

const App = () => {
  return (
    <div>    
      <Navbar/>
      <Hero/>
      <div className='container'>
        <Title subTitle = 'Our Services' title = 'What we Offer'/>
      <Services/>
      </div>
      <About/>
      <div className='container'>
        <Title subTitle= 'Our Projects' title = 'Work we do'/>
        <Projects/>
      </div>
      <div className='container'>
        <Title subTitle= ' Testimonial' title = 'What Client says'/>
        <Testimonials/>
      </div>
      <div className='container'>
        <Title subTitle='Contact Us' title='Feel free to contact'/>
      </div>
      
    </div>

  )
}

export default App