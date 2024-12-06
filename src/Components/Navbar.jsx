import React from 'react';
import { NavLink } from 'react-router-dom';




const Navbar = () => {

    return (
        <div className="bg-gradient-to-b from-black to-gray-800 navbar">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="white">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-gradient-to-b from-black to-gray-800 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <NavLink to="/" className={({ isActive }) => isActive ? 'text-orange-600 font-bold underline' : 'text-orange-700'}>
                            Home
                        </NavLink>
                        <NavLink to="/allvisas" className={({ isActive }) => isActive ? 'text-orange-600 font-bold underline' : 'text-orange-700'}>
                            All Visas
                        </NavLink>
                        <NavLink to="/addvisa" className={({ isActive }) => isActive ? 'text-orange-600 font-bold underline' : 'text-orange-700'}>
                            Add Visa
                        </NavLink>
                        <NavLink to="/myaddedvisas" className={({ isActive }) => isActive ? 'text-orange-600 font-bold underline' : 'text-orange-700'}>
                            My added visas
                        </NavLink>
                        <NavLink to="/myvisaapplication" className={({ isActive }) => isActive ? 'text-orange-600 font-bold underline' : 'text-orange-700'}>
                            My Visa applications
                        </NavLink>



                    </ul>
                </div>
                <NavLink to={'/'} className={'font-bold text-2xl text-green-700'}>BD<span className='text-orange-700'>Embassy</span></NavLink>
            </div>
            <div className="justify-center hidden gap-4 navbar-center lg:flex ">
                <ul className="gap-4 px-1 menu menu-horizontal ">
                    <NavLink to="/" className={({ isActive }) => isActive ? 'text-orange-600 font-bold underline' : 'text-orange-700'}>
                        Home
                    </NavLink>
                    <NavLink to="/allvisas" className={({ isActive }) => isActive ? 'text-orange-600 font-bold underline' : 'text-orange-700'}>
                        All Visas
                    </NavLink>
                    <NavLink to="/addvisa" className={({ isActive }) => isActive ? 'text-orange-600 font-bold underline' : 'text-orange-700'}>
                        Add Visa
                    </NavLink>
                    <NavLink to="/myaddedvisas" className={({ isActive }) => isActive ? 'text-orange-600 font-bold underline' : 'text-orange-700'}>
                        My added visas
                    </NavLink>
                    <NavLink to="/myvisaapplication" className={({ isActive }) => isActive ? 'text-orange-600 font-bold underline' : 'text-orange-700'}>
                        My Visa applications
                    </NavLink>
                </ul>
            </div>
            <div className="gap-4 navbar-end">
                <NavLink className={'text-green-700 link-hover font-semibold'} to={'/login'}>Login</NavLink>
                <NavLink className={'text-green-700 link-hover font-semibold hidden md:block'} to={'/register'}>Register</NavLink>
            </div>
        </div>
    );
};

export default Navbar;