import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import SideBar from '../Sidebar/SideBar';

export default function Header() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            <header className="sticky bg-transparenttop-0 z-50 mb-12 sm:mb-16">
                <nav className="bg-slate-300 shadow-lg shadow-slate-800 hover:shadow-gray-50/80 rounded-2xl border-zinc-50 px-4 lg:px-6 py-2.5
                                dark:bg-slate-500 dark:shadow-gray-50/45">
                    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                        <Link to="/" className="flex items-center">
                            <img
                                src="./dianno.jpg"
                                className="h-12 border-b-2 shadow-lg shadow border-blue-400 rounded-3xl"
                                alt="Logo"
                            />
                        </Link>
                        <div className="flex items-center lg:order-2">
                            <Link
                                to="#"
                                className="text-white underline bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                            >
                                Download Resume!
                            </Link>
                        </div>
                        <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                                <li>
                                    <NavLink
                                        to="/"
                                        className={({ isActive }) =>
                                            `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-white" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                        }
                                    >
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/about"
                                        className={({ isActive }) =>
                                            `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-white" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                        }
                                    >
                                        About
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/contact"
                                        className={({ isActive }) =>
                                            `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-white" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                        }
                                    >
                                        Contact
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/github"
                                        className={({ isActive }) =>
                                            `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-white" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                        }
                                    >
                                        Github
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="lg:hidden">
                            <button
                                className={`focus:outline-none ${isSidebarOpen ? 'bg-transparent':'border border-2 dark:border-neutral-200 border-black' } rounded-lg`}
                                onClick={toggleSidebar}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="black" 
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="h-6 w-6 cursor-pointer dark:stroke-white"
                                >
                                    <line x1="4" y1="12" x2="20" y2="12"></line>
                                    <line x1="4" y1="6" x2="20" y2="6"></line>
                                    <line x1="4" y1="18" x2="20" y2="18"></line>
                                </svg>
                            </button>
                        </div>
                    </div>
                </nav>
                <SideBar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            </header>
        </>
    );
}
