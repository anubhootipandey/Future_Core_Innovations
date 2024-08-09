import React from 'react';
import logo from "../images/logo1.svg";

const Navbar = () => {
  return (
    <div>
        <nav className='flex shadow-md sticky h-20 align-middle'>
            <div className='mt-2'>
                <img src={logo} alt="logo" className='h-[60px] w-40 ml-10 mr-[450px]' />
            </div>
            <ul className='flex gap-12 m-6'>
                <li className='text-gray-600 hover:text-red-500'>About us</li>
                <li className='text-gray-600 hover:text-red-500'>Services</li>
                <li className='text-gray-600 hover:text-red-500'>Feature</li>
                <li className='text-gray-600 hover:text-red-500'>Blog</li>
                <li className='text-gray-600 hover:text-red-500'>Careers</li>
            </ul>
            <button type='btn' className='px-6 py-0 text-white bg-blue-950 m-4'>Contact Us</button>
        </nav>
    </div>
  )
}

export default Navbar;