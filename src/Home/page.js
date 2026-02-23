import React from 'react'
import Link from 'next/link'
import darkBG from "../../image/darkBG.jpg"  // imported file will be processed by Next.js
import lightBG from "../../image/lightBG.jpg"
import Hiemoji from '@/OtherComponent/Hiemoji'
import TextAnimation from '@/OtherComponent/TextAnimation'
import darkPIC from '../../image/darkPIC.png'
import lightPIC from '../../image/lightPIC.png'
import Image from 'next/image'
import MyworkButton from '@/OtherComponent/MyworkButton'
import DownloadButton from '@/OtherComponent/DownloadButton'
import Experience from '@/Experience/page'


const Homepages = () => {
  const baseYear = 2025;
  const currentYear = new Date().getFullYear();
  const yearCount = currentYear - baseYear + 1;

  return (
    <section>

      {/* wrap the hero with fixed background */}
      <div className=" relative h-fit md:h-fit lg:h-[837px] overflow-hidden bg-fixed bg-cover bg-center text-black dark:text-white">

{/* .................................................................................................................................................. */}

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

{/* .................................................................................................................................................. */}

        {/* Content */}

        <div className=" relative z-10 container ">

          {/* DESKTOP */}

          <div className=' flex items-center justify-between'>

            {/* Details...... */}
            <div className=' hidden lg:block'>

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

              <div className='myname text-black dark:text-white text-[28px] lg:text-[40px]  font-extrabold  font-open-sans ' > HELLO <Hiemoji /> </div>

              <div>
                <h1 className=' text-black dark:text-white mt-3 lg:mt-7 text-4xl lg:text-6xl font-black font-open-sans ' >I’M Shahriar Noyon a</h1>
                <br />
                <h1> <TextAnimation /> </h1>
              </div>

              <p className=' text-slate-700 dark:text-slate-300 font-bold max-w-[490px] text-[15px] lg:text-[20px] mt-1 lg:mt-7 ' > Web Designer & Developer specializing in creating stunning, user-centric digital solutions that drive results.</p>

              {/* Button...... */}
                    <div className=' flex gap-10 items-center justify-start mt-12 '>
                         <div className=' z-50 cursor-pointer ' >
                              <MyworkButton />
                         </div>
                         <div className=' z-50 cursor-pointer ' >
                              <DownloadButton/>
                         </div>
                    </div>
            {/* Button...... */}

            </div>
            {/* Details...... */}


            {/* Images...... */}
            <div className=' hidden lg:block' >

              {/* Light Mood */}
              <div className=' relative z-10 dark:hidden hidden lg:block ' >
                <div className=' absolute translate-y-[120px] translate-x-[-140px]  ' >
                  <h1 className=' webdesinlight text-nowrap ' >WEB DEVELOPER
                  </h1>
                </div>

                <div className=' relative translate-y-[39px] z-10 ' >
                  <Image src={lightPIC} alt='img' />
                </div>
                <div className=' absolute translate-y-[-127px] translate-x-[-140px] z-50 ' >
                  <h1 className=' webdsinlight text-nowrap ' >WEB DEVELOPER
                  </h1>
                </div>
              </div>
              {/* Light Mood */}

              {/* Dark Mood */}
              <div className='relative z-10 hidden dark:block ' >
                <div className=' hidden lg:block absolute translate-y-[120px] translate-x-[-140px]  ' >
                  <h1 className=' webdesin text-nowrap ' >WEB DEVELOPER
                  </h1>
                </div>

                <div className=' hidden lg:block relative translate-y-[38px] z-10 ' >
                  <Image src={darkPIC} alt='img' />
                </div>
                <div className=' hidden lg:block absolute translate-y-[-127px] translate-x-[-140px] z-50 ' >
                  <h1 className=' webdsin text-nowrap '>WEB DEVELOPER
                  </h1>
                </div>
              </div>
              {/* Dark Mood */}

            </div>
            {/* Images...... */}

          </div>

          {/* DESKTOP */}

          {/* Mobile */}
          <div className=' lg:hidden'>

          <div className=' flex-col items-center justify-between'>

            {/* Images...... */}
            <div className=' mt-[-85px] dark:mt-[-70px] lg:hidden' >

              {/* Light Mood */}
              <div className='  dark:hidden'>
                <div className='relative grid justify-center items-center z-10 ' >
                  <div className=' relative translate-y-[150px] ' >
                    <h1 className=' webdesinlight text-nowrap ' >WEB DEVELOPER
                    </h1>
                  </div>

                  <div className='  relative ' >
                    <Image className='  overflow-hidden h-[450px] w-[300px] md:h-[550px] md:w-[360px] translate-x-25 md:translate-x-40 z-40 ' src={lightPIC} alt="pic" />
                  </div>
                  <div className=' relative translate-y-[-100px] z-50 ' >
                    <h1 className=' webdsinlight text-nowrap '>WEB DEVELOPER
                    </h1>
                  </div>
                </div>
              </div>
              {/* Light Mood */}

              {/* Dark Mood */}
              <div className=' hidden dark:block'>
                <div className='relative grid justify-center items-center z-10 ' >
                  <div className=' relative translate-y-[110px] ' >
                    <h1 className=' Smwebdsin text-nowrap ' >WEB DEVELOPER
                    </h1>
                  </div>

                  <div className='  relative ' >
                    <Image className='  overflow-hidden h-[450px] w-[300px] md:h-[550px] md:w-[360px] translate-x-20 z-40 ' src={darkPIC} alt="pic" />
                  </div>
                  <div className=' relative translate-y-[-100px] z-50 ' >
                    <h1 className=' SMwebdsin text-nowrap '>WEB DEVELOPER
                    </h1>
                  </div>
                </div>
              </div>
              {/* Dark Mood */}

            </div>
            {/* Images...... */}

            {/* Details...... */}
            <div className=' mt-[-90px] dark:mt-[-90px] lg:hidden'>

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

              <div className='myname text-black dark:text-white text-[28px] lg:text-[40px]  font-extrabold  font-open-sans ' > HELLO <Hiemoji /> </div>

              <div>
                <h1 className=' text-black dark:text-white mt-3 lg:mt-7 text-4xl lg:text-6xl font-black font-open-sans ' >I’M Shahriar Noyon a</h1>
                <br />
                <h1> <TextAnimation /> </h1>
              </div>

              <p className=' text-slate-700 dark:text-slate-300 font-bold max-w-[490px] text-[15px] lg:text-[20px] mt-1 lg:mt-7 ' > Web Designer & Developer specializing in creating stunning, user-centric digital solutions that drive results.</p>

            </div>
            {/* Details...... */}

            {/* Button...... */}
                    <div className=' flex gap-10 items-center justify-start mt-7 mb-5 '>
                         <button className=' z-50 cursor-pointer ' >
                              <MyworkButton />
                         </button>
                         <button className=' z-50 cursor-pointer ' >
                              <DownloadButton/>
                         </button>
                    </div>
            {/* Button...... */}

          </div>

          </div>
          {/* Mobile */}

        </div>

        {/* Content */}

      </div>

      <div>
        <Experience/>
      </div>

    </section>
  )
}

export default Homepages
