import React from 'react'
import'./App.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Hero from './Components/Hero'
import Section1 from './Components/Section1'
import Section2 from './Components/Section2'

const App = () => {
  return (
    <>
        <Navbar/>
        <Hero/>
        <Section1/>
        <Section2/>
        <Footer/>    
        
    </>
  )
}

export default App