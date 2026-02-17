import React from 'react'
import Link from 'next/link'
import darkBG from "../../image/darkBG.jpg"  // imported file will be processed by Next.js
import lightBG from "../../image/lightBG.jpg"
import Hiemoji from '@/OtherComponent/Hiemoji'
import TextAnimation from '@/OtherComponent/TextAnimation'

const Homepages = () => {
  const baseYear = 2025;
  const currentYear = new Date().getFullYear();
  const yearCount = currentYear - baseYear + 1;

  return (
    <section>

      {/* wrap the hero with fixed background */}
      <div className="relative h-[838px] overflow-hidden bg-fixed bg-cover bg-center text-black dark:text-white">

        {/* Light background */}
        <div
          className="absolute inset-0 bg-cover bg-center block dark:hidden"
          style={{
            backgroundImage: `url(${lightBG.src})`,
            backgroundAttachment: 'fixed'
          }}
        ></div>
         {/* Light background */}

        {/* Dark background */}
        <div
          className="absolute inset-0 bg-cover bg-center hidden dark:block"
          style={{
            backgroundImage: `url(${darkBG.src})`,
            backgroundAttachment: 'fixed'
          }}
        ></div>
        {/* Dark background */}

        {/* Content */}

        <div className="relative z-10 container ">
          {/* DESKTOP */}

          <div className=''>

             {/*Excellence */}
             <div className="flex">
               <div className="relative group mb-5 hidden lg:block ">
               <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-400 dark:bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
               <div className="relative flex items-center gap-2 px-5 py-2 rounded-full border border-white/10  backdrop-blur-xl">
                <span className="relative flex h-3 w-3">
                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                 <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
                </span>
                <span className="text-black dark:text-amber-50 text-xs font-bold tracking-widest uppercase"> {yearCount} Years of Excellence</span>
               </div>
               </div>
             </div>
             {/*Excellence */}

             <div className='myname text-black dark:text-white text-[28px] lg:text-[40px]  font-extrabold  font-open-sans ' > HELLO <Hiemoji/> </div>

             <div>
               <h1 className=' text-black dark:text-white mt-3 lg:mt-7 text-4xl lg:text-6xl font-black font-open-sans ' >I’M Shahriar Noyon a</h1>
               <br />
               <h1> <TextAnimation /> </h1>
             </div>

              <p className=' text-slate-700 dark:text-slate-300 font-bold max-w-[490px] text-[15px] lg:text-[20px] mt-1 lg:mt-7 ' > Web Designer & Developer specializing in creating stunning, user-centric digital solutions that drive results.</p>

          </div>

          {/* DESKTOP */}
        </div>

      {/* Content */}

    </div>
     
    </section>
  )
}

export default Homepages
