import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import dami from '../assets/mypic.jpeg'


const Landing = () => {
  return (
    <>
        <Navbar/>
        <div className="container">
           <img src={dami} alt="" style={{height:400}}/>
        </div>
        <Footer/>
    </>
    

  )
}

export default Landing