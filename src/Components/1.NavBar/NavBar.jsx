import React from 'react';
import logo from '../../assets/DigiTools.png'
import { FiShoppingCart } from 'react-icons/fi';
const NavBar = () => {
    return (
        <>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><a href='#'>Products</a></li>
                            <li><a href="#">Features</a></li>
                            <li><a href='#'>Pricing</a></li>
                            <li><a href="#">Testimonials</a></li>
                            <li><a href="#">FAQ</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl"><img className='w-25 md:w-35 lg:w-45' src={logo} alt="" /></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a href='#'>Products</a></li>
                        <li><a href="#">Features</a></li>
                        <li><a href='#'>Pricing</a></li>
                        <li><a href="#">Testimonials</a></li>
                        <li><a href="#">FAQ</a></li>
                    </ul>
                </div>
                <div className="navbar-end gap-1">
                    <div className='hidden md:inline-block hover:cursor-pointer'>
                    <span className='badge badge-sm'>0</span>
                    <FiShoppingCart></FiShoppingCart>
                    </div>
                    <a className="btn btn-ghost hidden md:flex">Login</a>
                    <a href="#" className='btn btn-ghost rounded-3xl bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white'>Get Started</a>
                </div>
            </div>
        </>
    );
};

export default NavBar;