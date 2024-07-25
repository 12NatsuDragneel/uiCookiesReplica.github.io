import React from 'react'

const Navbar = () => {
  return (
    <div>
        <div className='flex items-center justify-between bg-transparent py-10 text-white'>
            <h2 className='uppercase font-bold text-[25px] mx-20'><a href="#">Frame</a></h2>
            <ul className='flex  float-right mx-20'>
                <li className='uppercase px-5'><a href="#">Home</a></li>
                <li className='uppercase px-5'><a href="#">Features</a></li>
                <li className='uppercase px-5'><a href="#">Pricing</a></li>
                <li className='uppercase px-5'><a href="#">Reviews</a></li>
                <li className='uppercase px-5'><a href="#">Contact</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
