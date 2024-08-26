import React from 'react';

const works = () => {
   return (
      <div className='my-10'>
         <h1 className='text-lg md:text-3xl lg:text-5xl text-center font-bold md:font-extrabold'>How it works?</h1>
         <div className='flex justify-center mt-10'>
            <div class="w-[32rem]">
               <ul class="flex flex-col w-full">
                  <li class="relative flex flex-col gap-2">
                     <span class="absolute left-0 grid justify-center transition-opacity duration-200 bg-transparent">
                        <span class="h-full w-0.5 bg-blue-gray-100"></span>
                     </span>
                     <div class="flex items-center gap-4">
                        <span class="relative z-[2] w-max flex-shrink-0 overflow-hidden rounded-full bg-gray-900 p-2 text-white">
                           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
                              class="w-4 h-4">
                              <path
                                 d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z">
                              </path>
                              <path
                                 d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z">
                              </path>
                           </svg>
                        </span>
                        <h5
                           class="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                           Step 1 <br></br>
                           Create your page on Khabar-Kinbo.
                        </h5>
                     </div>
                     <div class="flex gap-4 pb-8">
                        <span class="flex-shrink-0 invisible h-full pointer-events-none"></span>
                        <div>
                           <p class="block font-sans text-base antialiased font-normal leading-relaxed text-gray-600">
                              Help users discover your place by creating a listing on Khabar Kinbo
                           </p>
                        </div>
                     </div>
                  </li>
                  <li class="relative flex flex-col gap-2">
                     <span class="absolute left-0 grid justify-center transition-opacity duration-200 bg-transparent">
                        <span class="h-full w-0.5 bg-blue-gray-100"></span>
                     </span>
                     <div class="flex items-center gap-4">
                        <span class="relative z-[2] w-max flex-shrink-0 overflow-hidden rounded-full bg-gray-900 p-2 text-white">
                           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
                              class="w-4 h-4">
                              <path fill-rule="evenodd"
                                 d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z"
                                 clip-rule="evenodd"></path>
                           </svg>
                        </span>
                        <h5
                           class="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                           Step 2 <br></br>
                           Register for online ordering
                        </h5>
                     </div>
                     <div class="flex gap-4 pb-8">
                        <span class="flex-shrink-0 invisible h-full pointer-events-none"></span>
                        <div>
                           <p class="block font-sans text-base antialiased font-normal leading-relaxed text-gray-600">
                              And deliver orders to millions of customers with ease
                           </p>
                        </div>
                     </div>
                  </li>
                  <li class="relative flex flex-col gap-2">
                     <div class="flex items-center gap-4">
                        <span class="relative z-[2] w-max flex-shrink-0 overflow-hidden rounded-full bg-gray-900 p-2 text-white">
                           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
                              class="w-4 h-4">
                              <path
                                 d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 01-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004zM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 01-.921.42z">
                              </path>
                              <path fill-rule="evenodd"
                                 d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v.816a3.836 3.836 0 00-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 01-.921-.421l-.879-.66a.75.75 0 00-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 001.5 0v-.81a4.124 4.124 0 001.821-.749c.745-.559 1.179-1.344 1.179-2.191 0-.847-.434-1.632-1.179-2.191a4.122 4.122 0 00-1.821-.75V8.354c.29.082.559.213.786.393l.415.33a.75.75 0 00.933-1.175l-.415-.33a3.836 3.836 0 00-1.719-.755V6z"
                                 clip-rule="evenodd"></path>
                           </svg>
                        </span>
                        <h5
                           class="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                           Step 3 <br></br>
                           Start receiving orders online
                        </h5>
                     </div>
                     <div class="flex gap-4">
                        <span class="flex-shrink-0 invisible h-full pointer-events-none"></span>
                        <div>
                           <p class="block font-sans text-base antialiased font-normal leading-relaxed text-gray-600">
                              Manage orders on our partner app, web dashboard or API partners
                           </p>
                        </div>
                     </div>
                  </li>
               </ul>
            </div>
         </div>
      </div>
   );
};

export default works;