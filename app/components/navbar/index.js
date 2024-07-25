// app/components/navbar/navbar.js
import React from "react";
import Link from "next/link";

const Navbar = () => {
   return (
      <nav className="block w-full px-4 py-2 mx-auto text-black bg-white border shadow-md rounded-b-xl border-white/80 bg-opacity-80 backdrop-blur-2xl backdrop-saturate-200 lg:px-8 lg:py-4">
         <div className="container flex items-center justify-between mx-auto text-blue-gray-900">
            <Link href="/" className="mr-4 block cursor-pointer py-1.5 font-sans text-base font-medium leading-relaxed text-inherit antialiased">
               Khabar Kinbo
            </Link>
            <div className="lg:hidden">
               <button id="menu-btn" className="focus:outline-none">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                  </svg>
               </button>
            </div>
            <div id="menu" className="hidden lg:flex lg:items-center lg:gap-6">
               <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
                  <li className="flex items-center p-1 font-sans text-sm antialiased font-medium leading-normal gap-x-2 text-blue-gray-900">
                     <Link href="" className="flex items-center">Pages</Link>
                  </li>
                  <li className="flex items-center p-1 font-sans text-sm antialiased font-medium leading-normal gap-x-2 text-blue-gray-900">
                     <Link href="" className="flex items-center">Account</Link>
                  </li>
                  <li className="flex items-center p-1 font-sans text-sm antialiased font-medium leading-normal gap-x-2 text-blue-gray-900">
                     <Link href="" className="flex items-center">Blocks</Link>
                  </li>
                  <li className="flex items-center p-1 font-sans text-sm antialiased font-medium leading-normal gap-x-2 text-blue-gray-900">
                     <Link href="" className="flex items-center">Docs</Link>
                  </li>
                  <li>
                     <link href="/login">
                     <button
                        class="hidden px-4 py-2 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
                        type="button">
                        <span>Log In</span>
                     </button>
                     </link>
                  </li>
                  <li>
                     <button
                        class="hidden select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
                        type="button">
                        <span>Sign in</span>
                     </button>
                  </li>
               </ul>
            </div>
         </div>
      </nav>
   );
};

export default Navbar;
