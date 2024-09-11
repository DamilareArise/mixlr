import React from 'react'

const Navbar = () => {
  return (
    <>
   <header>
        <nav>
            <img src="/images/mixlr.png" alt=""/>
            <ul>
                <li><a href="" className='fit'>Features</a></li>
                <li><a href="">Listen</a></li>
                <li><a href="">Pricing</a></li>
                <li><a href="">Login</a></li>
               <a href="" className='link'><i class="fa-solid fa-circle-plus"></i><p>Get Started</p></a>
            </ul>
        </nav>
    </header>
    
    </>
  )
}

export default Navbar