import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                            className="mr-3 h-12"
                            alt="Logo"
                        />
                    </Link>
                    <div className="flex items-center lg:order-2">
                        <Link
                            to="#"
                            className="text-white bg-purple-800 hover:bg-purple-500 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Log in
                        </Link>
                        <Link
                            to="#"
                            className="text-white bg-purple-800 hover:bg-purple-500 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Get started
                        </Link>
                    </div>
                    <div className="lg:hidden">
                        <button onClick={toggleMenu} className="text-purple-800 focus:outline-none">
                            Menu
                        </button>
                    </div>
                    <div className={`lg:hidden absolute top-14 left-0 right-0 bg-white z-10 ${showMenu ? 'block' : 'hidden'}`}>
                        <ul className="flex flex-col py-2 border-t border-gray-200">
                            <li>
                                <NavLink to="/" className="block py-2 px-4 hover:bg-gray-50" onClick={() => setShowMenu(false)}>
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/about" className="block py-2 px-4 hover:bg-gray-50" onClick={() => setShowMenu(false)}>
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact" className="block py-2 px-4 hover:bg-gray-50" onClick={() => setShowMenu(false)}>
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                    to="/"
                                    activeClassName="text-purple-800"
                                    className="block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-purple-500 lg:p-0"
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    activeClassName="text-purple-800"
                                    className="block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-purple-500 lg:p-0"
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact"
                                    activeClassName="text-purple-800"
                                    className="block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-purple-500 lg:p-0"
                                >
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
