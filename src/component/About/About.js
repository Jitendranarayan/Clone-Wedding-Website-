import React from 'react'
import './about.css';
import { Link ,Outlet} from 'react-router-dom'
import logo from '../../images/logo.png'
import WhatChoose from './WhatChoose';
import Features from './Features';

const About = () => {
  return (
    <>
    
    <nav class="bg-black border-gray-200 dark:bg-gray-900" >
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" class="flex items-center">
            <img src={logo} class="h-32 mr-3" alt="Flowbite Logo" />
            {/* <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">D_NOIRE </span> */}
        </a>
        <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
        </button>
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-black dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 text-white text-lg">
            <li>
              <Link to="/home" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</Link>
            </li>
            <li>
              <Link to="/about" class="block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pages</Link>
            </li>
            <li>
              <Link to="/gallery" class="block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Gallery</Link>
            </li>
            <li>
              <Link to="/blog" class="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Blog</Link>
            </li>
            <li>
              <Link to="/contact" class="block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
      {/* <Outlet style={{display:"none"}} /> */}
       <div className="section-container">
<div className="columns-image">
<img src="./img2.jpg" alt="" className="image" />
</div>
<div className="content-text">
      <h2 className="wrap1">
        <span className="firstspan">My Name is Alex Novo,<br/>I'm a {""}</span>
        <span className="secondspan">Photographer.</span>
      </h2>
      <div className="para"><p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
        ipsum sit fugiat blanditiis vero dolore inventore eveniet saepe
        placeat, m Dolorum architecto earum esse soluta laboriosam in at
        maiores voluptatibus nihil saepe quae, assumenda tempore delectus
        ad quod ab molestiae quas! Culpa.
      </p></div>
      <div className="columns-image1">
    <img src="./Signature.png" alt="" className="image5" />
  </div>
      
    </div>
  </div> 
  <WhatChoose/>
  <Features/>
  <div className="touch-container">
      <div className="bold">
        <h1>Get in touch</h1>
      </div>
      <h2>mail@domain.com</h2>
      <p>
        Feel free to write us. We’ll consider all suggestions, ideas and
        projects.
      </p>
    </div>
    <div className="footer">
        <hr/>
        <p>Copyright @ Ajileminds </p>
    </div>
        </>
  )
}

export default About