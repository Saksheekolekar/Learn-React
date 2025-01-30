import React from "react";
import { Link, NavLink } from 'react-router-dom'

function SideBar ({ isOpen, toggleSidebar }) {
  return ( 
    <>
     <div className= {`lg:hidden  fixed inset-y-0 right-0 transform ${isOpen ? 'translate-x-full' : '-translate-x-0'} over transition-transform duration-300 ease-in-out bg-slate-400  bg-opacity-90 dark:bg-gray-800 dark:bg-opacity-95  dark:text-white font-oswald font-bold w-full `}>
      <div className=" relative justify-end text-right p-4 ">
        <button className="focus:outline-dotted bg-transparent shadow-md  " onClick={toggleSidebar}>
          <svg className="w-6 h-6 stroke-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
      <nav className="mt-8">
        
      <ul className="flex flex-col mt-4 font-oswald lg:flex-row text-center lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        `block py-4 text-xl pr-4 pl-3  pb-4 duration-200 ${isActive ? "text-orange-700" : "text-white dark:text-white "} border-b border-gray-100 hover:bg-black lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                    <NavLink
                                        to="/about"
                                        className={({ isActive }) =>
                                            `block py-4 text-xl pr-4 pl-3 duration-200 ${isActive ? "text-orange-500 " : "text-white dark:text-white"} border-b border-gray-100 hover:bg-black lg:hover:bg-transparent lg:border-0 hover:text-orange-500  lg:p-0`
                                        }
                                    >
                                        About
                                    </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) =>
                                        `block py-4 text-xl pr-4 pl-3 duration-200 ${isActive ? "text-orange-500 " : "text-white dark:text-white"} border-b border-gray-100 hover:bg-black lg:hover:bg-transparent lg:border-0 hover:text-orange-500  lg:p-0`
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/github"
                                    className={({ isActive }) =>
                                        `block py-4 text-xl pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-white dark:text-white"} border-b border-gray-100 hover:bg-black lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Github
                                </NavLink>
                            </li>

                        </ul>
      </nav>
    </div>
    </>
  );
}

export default SideBar;