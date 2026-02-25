'use client'
import React from 'react'
import { useState } from "react";
import Logo from "../../image/logo.svg"
import Image from 'next/image';
import About from '@/About/page';
import Link from 'next/link';
import { Facebook, Github, Linkedin, Mail, MapPin, PhoneIncoming } from 'lucide-react';

const Footer = () => {
     const [value, setValue] = useState("");
     const [focused, setFocused] = useState(false);
     const year = new Date().getFullYear()

     return (
          <section className=' bg-[#F4F4F4] dark:bg-[#141414] border-t-2 border-slate-600 shadow-2xl  ' >
               {/* Dasktop */}
               <div className=' hidden lg:block container ' >
                    <div className=' pt-[80px] pb-[80px] ' >
                         <div className=' flex items-center justify-between ' >

                              <div className=' flex-col items-center space-y-10' >

                                   {/* Logo */}
                                   <div className=" grid justify-start ">
                                        <div className=' flex items-center' >
                                             <Link href="/" className="flex items-center justify-center space-x-2">
                                                  <h1 className=' absolute text-black dark:text-amber-50 font-extrabold text-[33px] translate-x-1 ' >Ñ</h1>
                                                  <Image className=' animate-spin relative z-20 h-16 ' src={Logo} alt='Logo' />
                                             </Link>
                                             <h1 className=' text-4xl font-serif font-extrabold text-black dark:text-white ' > SR.NOYON </h1>
                                        </div>
                                   </div>
                                   {/* Logo */}

                                   <h1 className=' text-6xl text-black dark:text-white max-w-[430px] ' > <span className=' font-extrabold text-red-700' >Get Ready</span> To Create Great</h1>

                                   <div className=" mt-20 ">
                                        <div className="w-80">
                                             <div
                                                  className={`flex items-center justify-between px-1 pb-3 border-b transition-colors duration-300 ${focused ? "border-slate-900 dark:border-amber-50" : "border-neutral-600 dark:border-slate-300 "
                                                       }`}
                                             >
                                                  {/* Label / Placeholder */}
                                                  <input
                                                       type="email"
                                                       value={value}
                                                       onChange={(e) => setValue(e.target.value)}
                                                       onFocus={() => setFocused(true)}
                                                       onBlur={() => setFocused(false)}
                                                       placeholder="Email Address"
                                                       className="bg-transparent text-black dark:text-white placeholder-black/40 dark:placeholder-amber-50/30 text-sm font-semibold outline-none w-full tracking-wide"
                                                  />

                                                  {/* Mail Icon */}
                                                  <svg
                                                       xmlns="http://www.w3.org/2000/svg"
                                                       className="h-5 w-5 text-black dark:text-white flex-shrink-0 ml-3"
                                                       fill="none"
                                                       viewBox="0 0 24 24"
                                                       stroke="currentColor"
                                                       strokeWidth={1.8}
                                                  >
                                                       <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                                       />
                                                  </svg>
                                             </div>
                                        </div>
                                   </div>

                              </div>

                              <div className=' flex-col items-center space-y-8 ' >
                                   <div>
                                        <h1 className=' font-bold text-2xl text-black dark:text-white'>Quick Link</h1>
                                   </div>
                                   <div>
                                        <Link className=' font-bold text-[18px] text-black dark:text-white' href="/" > Home </Link>
                                   </div>
                                   <div>
                                        <Link className=' font-bold text-[18px] text-black dark:text-white' href="/About">About</Link>
                                   </div>
                                   <div>
                                        <Link className=' font-bold text-[18px] text-black dark:text-white' href="/Experience">Experience</Link>
                                   </div>
                                   <div>
                                        <Link className=' font-bold text-[18px] text-black dark:text-white' href="/Projects">Projects</Link>
                                   </div>
                                   <div>
                                        <Link className=' font-bold text-[18px] text-black dark:text-white' href="/Contact">Contact</Link>
                                   </div>
                              </div>

                              <div>
                                   <div className=' flex-col items-center space-y-3 ' >

                                        <div>
                                             <h1 className='font-bold text-2xl text-black dark:text-white mb-8' > Contact Me </h1>
                                        </div>

                                        <div className=' flex items-center space-x-8' >
                                             <div className=' border-[1px] p-2 rounded-2xl hover:bg-transparent cursor-pointer bg-amber-100 dark:bg-slate-900 border-red-700 '>
                                                  <PhoneIncoming size={24} color="#c70000" />
                                             </div>
                                             <div>
                                                  <h1 className=' text-[17px] font-bold text-red-600 ' >Call Now</h1>
                                                  <h2 className=' text-[14px] font-bold text-black dark:text-white ' > +880 1822-798116 </h2>
                                             </div>
                                        </div>

                                        <div className=' flex items-center space-x-8 '>
                                             <div className=' border-[1px] p-2 rounded-2xl hover:bg-transparent cursor-pointer bg-amber-100 dark:bg-slate-900 border-red-700 '>
                                                  <Mail size={24} color="#c70000" />
                                             </div>
                                             <div>
                                                  <h1 className=' text-[17px] font-bold text-red-600 ' >Mail Me</h1>
                                                  <h2 className=' text-[14px] font-bold text-black dark:text-white ' > shahriarnoyon1@gmail.com </h2>
                                             </div>
                                        </div>

                                        <div className=' flex items-center space-x-8 '>
                                             <div className=' border-[1px] p-2 rounded-2xl hover:bg-transparent cursor-pointer bg-amber-100 dark:bg-slate-900 border-red-700 '>
                                                  <MapPin size={24} color="#c70000" />
                                             </div>
                                             <div>
                                                  <h1 className=' text-[17px] font-bold text-red-600 ' > Address </h1>
                                                  <h2 className=' text-[14px] font-bold text-black dark:text-white ' > Ecb Chottor, Cantonment, Dhaka </h2>
                                             </div>
                                        </div>

                                        <div className=' flex items-center space-x-14 mt-10 '>

                                             <div className=' border-[1px] p-2 rounded-2xl hover:bg-sky-700 cursor-pointer bg-sky-500 dark:bg-slate-900 border-sky-500 '>
                                                  <Facebook size={28} color="#ffffff" />
                                             </div>

                                             <div className=' border-[1px] p-2 rounded-2xl hover:bg-sky-700 cursor-pointer bg-sky-500 dark:bg-slate-900 border-sky-500 '>
                                                  <Github size={28} color="#ffffff" />
                                             </div>

                                             <div className=' border-[1px] p-2 rounded-2xl hover:bg-sky-700 cursor-pointer bg-sky-500 dark:bg-slate-900 border-sky-500 '>
                                                  <Linkedin size={28} color="#ffffff" />
                                             </div>

                                             <div className=' border-[1px] p-2 rounded-2xl hover:bg-sky-700 cursor-pointer bg-sky-500 dark:bg-slate-900 border-sky-500 '>
                                                  <Mail size={28} color="#ffffff" />
                                             </div>

                                        </div>

                                   </div>
                              </div>

                         </div>
                    </div>
               </div>
               {/* Dasktop */}

               {/* Mobile */}

               <div className=' lg:hidden container ' >
                    <div className=' pt-[40px] pb-[50px] ' >
                         <div className=' flex-col items-center justify-between space-y-12 ' >

                              <div className=' flex-col items-center' >

                                   {/* Logo */}
                                   <div className=" grid justify-start mb-3 ">
                                        <div className=' flex items-center' >
                                             <Link href="/" className="flex items-center justify-center space-x-2">
                                                  <h1 className=' absolute text-black dark:text-amber-50 font-extrabold text-[20px] translate-x-1 ' >Ñ</h1>
                                                  <Image className=' animate-spin relative z-20 h-12 ' src={Logo} alt='Logo' />
                                             </Link>
                                             <h1 className=' text-[30px] font-serif font-extrabold text-black dark:text-white ' > SR.NOYON </h1>
                                        </div>
                                   </div>
                                   {/* Logo */}

                                   <h1 className=' text-[35px] text-black dark:text-white ' > <span className=' font-serif font-extrabold text-red-700' >Get Ready</span> To Create Great</h1>

                                   <div className=" mt-8 ">
                                        <div className="w-80">
                                             <div
                                                  className={`flex items-center justify-between px-1 pb-3 border-b transition-colors duration-300 ${focused ? "border-slate-900 dark:border-amber-50" : "border-neutral-600 dark:border-slate-300 "
                                                       }`}
                                             >
                                                  {/* Label / Placeholder */}
                                                  <input
                                                       type="email"
                                                       value={value}
                                                       onChange={(e) => setValue(e.target.value)}
                                                       onFocus={() => setFocused(true)}
                                                       onBlur={() => setFocused(false)}
                                                       placeholder="Email Address"
                                                       className="bg-transparent text-black dark:text-white placeholder-black/40 dark:placeholder-amber-50/30 text-sm font-semibold outline-none w-full tracking-wide"
                                                  />

                                                  {/* Mail Icon */}
                                                  <svg
                                                       xmlns="http://www.w3.org/2000/svg"
                                                       className="h-5 w-5 text-black dark:text-white flex-shrink-0 ml-3"
                                                       fill="none"
                                                       viewBox="0 0 24 24"
                                                       stroke="currentColor"
                                                       strokeWidth={1.8}
                                                  >
                                                       <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                                       />
                                                  </svg>
                                             </div>
                                        </div>
                                   </div>

                              </div>

                              <div className=' flex-col items-center space-y-3 ' >
                                   <div>
                                        <h1 className=' font-bold text-2xl text-black dark:text-white'>Quick Link</h1>
                                   </div>
                                   <div>
                                        <Link className=' font-bold text-[16px] text-black dark:text-white' href="/" > Home </Link>
                                   </div>
                                   <div>
                                        <Link className=' font-bold text-[16px] text-black dark:text-white' href="/About">About</Link>
                                   </div>
                                   <div>
                                        <Link className=' font-bold text-[16px] text-black dark:text-white' href="/Experience">Experience</Link>
                                   </div>
                                   <div>
                                        <Link className=' font-bold text-[16px] text-black dark:text-white' href="/Projects">Projects</Link>
                                   </div>
                                   <div>
                                        <Link className=' font-bold text-[16px] text-black dark:text-white' href="/Contact">Contact</Link>
                                   </div>
                              </div>

                              <div>
                                   <div className=' flex-col items-center space-y-3 ' >

                                        <div>
                                             <h1 className='font-bold text-2xl text-black dark:text-white mb-8' > Contact Me </h1>
                                        </div>

                                        <div className=' flex items-center space-x-8' >
                                             <div className=' border-[1px] p-2 rounded-2xl hover:bg-transparent cursor-pointer bg-amber-100 dark:bg-slate-900 border-red-700 '>
                                                  <PhoneIncoming size={20} color="#c70000" />
                                             </div>
                                             <div>
                                                  <h1 className=' text-[15px] font-bold text-red-600 ' >Call Now</h1>
                                                  <h2 className=' text-[14px] font-bold text-black dark:text-white ' > +880 1822-798116 </h2>
                                             </div>
                                        </div>

                                        <div className=' flex items-center space-x-8 '>
                                             <div className=' border-[1px] p-2 rounded-2xl hover:bg-transparent cursor-pointer bg-amber-100 dark:bg-slate-900 border-red-700 '>
                                                  <Mail size={20} color="#c70000" />
                                             </div>
                                             <div>
                                                  <h1 className=' text-[15px] font-bold text-red-600 ' >Mail Me</h1>
                                                  <h2 className=' text-[14px] font-bold text-black dark:text-white ' > shahriarnoyon1@gmail.com </h2>
                                             </div>
                                        </div>

                                        <div className=' flex items-center space-x-8 '>
                                             <div className=' border-[1px] p-2 rounded-2xl hover:bg-transparent cursor-pointer bg-amber-100 dark:bg-slate-900 border-red-700 '>
                                                  <MapPin size={20} color="#c70000" />
                                             </div>
                                             <div>
                                                  <h1 className=' text-[15px] font-bold text-red-600 ' > Address </h1>
                                                  <h2 className=' text-[14px] font-bold text-black dark:text-white ' > Ecb Chottor, Cantonment, Dhaka </h2>
                                             </div>
                                        </div>

                                        <div className=' flex items-center space-x-14 mt-10 '>

                                             <div className=' border-[1px] p-2 rounded-2xl hover:bg-sky-700 cursor-pointer bg-sky-500 dark:bg-slate-900 border-sky-500 '>
                                                  <Facebook size={22} color="#ffffff" />
                                             </div>

                                             <div className=' border-[1px] p-2 rounded-2xl hover:bg-sky-700 cursor-pointer bg-sky-500 dark:bg-slate-900 border-sky-500 '>
                                                  <Github size={22} color="#ffffff" />
                                             </div>

                                             <div className=' border-[1px] p-2 rounded-2xl hover:bg-sky-700 cursor-pointer bg-sky-500 dark:bg-slate-900 border-sky-500 '>
                                                  <Linkedin size={22} color="#ffffff" />
                                             </div>

                                             <div className=' border-[1px] p-2 rounded-2xl hover:bg-sky-700 cursor-pointer bg-sky-500 dark:bg-slate-900 border-sky-500 '>
                                                  <Mail size={22} color="#ffffff" />
                                             </div>

                                        </div>

                                   </div>
                              </div>

                         </div>
                    </div>
               </div>

               {/* Mobile */}

               <div className="text-center pt-4 pb-6 text-slate-900 dark:text-gray-300 border-t border-gray-700 text-sm">
                    <p>&copy; {year} Full Stack Developer. All rights reserved. </p>

               </div>
          </section>
     )
}

export default Footer
