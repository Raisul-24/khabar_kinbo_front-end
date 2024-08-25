// app/components/navbar/navbar.js
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
   return (
      <div className="bg-yellow-50 ">
         <div className="navbar w-full mx-auto max-w-7xl">
            <div className="navbar-start">
               <div className="dropdown">
                  <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           strokeWidth="2"
                           d="M4 6h16M4 12h8m-8 6h16" />
                     </svg>
                  </div>
                  <ul
                     tabIndex={0}
                     className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                     <li><Link href='/'>item-1</Link></li>
                     <li><Link href='/addRestaurant'>Add Restaurants</Link></li>
                     <li><Link href='/login'>Login</Link></li>
                  </ul>
               </div>
               <div className="flex justify-center p-0 m-0">
                  <Image className='hidden md:flex rounded-full'
                     src="/logo.jpg"
                     width={50}
                     height={50}
                     alt="Logo"
                  />
                  <Link href='/' className="btn btn-ghost text-xl text-red-900">Khabar Kinbo</Link>
               </div>
            </div>
            <div className="navbar-center hidden lg:flex">
               <ul className="menu menu-horizontal px-1">
                  <li><Link href='/'>item-1</Link></li>
                  <li className="rounded-xl bg-transparent hover:bg-gradient-to-r from-yellow-50 to-red-50"><Link href='/addRestaurant'>Add Restaurant</Link></li>
               </ul>
            </div>
            <div className="navbar-end">
               <Link href='/login' 
               className="font-semibold border-2 px-7 py-1 rounded-xl border-yellow-700 hover:border-red-600 bg-transparent hover:bg-gradient-to-r from-yellow-50 to-red-50 text-red-400 hover:text-yellow-900 hidden lg:flex"
               >Login</Link>

            </div>
         </div>
      </div>
   );
};

export default Navbar;
