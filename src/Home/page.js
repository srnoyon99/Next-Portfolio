import React from 'react'
import Link from 'next/link'
import darkBG from "../../image/darkBG.jpg"  // imported file will be processed by Next.js
import lightBG from "../../image/lightBG.jpg"

const Homepages = () => {
  return (
    <section>

      {/* wrap the hero with fixed background */}
      <div className="relative h-[840px] overflow-hidden bg-fixed bg-cover bg-center text-black dark:text-white">
        {/* Light background (shown in light mode) */}
        <div
          className="absolute inset-0 bg-cover bg-center block dark:hidden"
          style={{
            backgroundImage: `url(${lightBG.src})`,
            backgroundAttachment: 'fixed'
          }}
        ></div>

        {/* Dark background (shown in dark mode) */}
        <div
          className="absolute inset-0 bg-cover bg-center hidden dark:block"
          style={{
            backgroundImage: `url(${darkBG.src})`,
            backgroundAttachment: 'fixed'
          }}
        ></div>

        {/* Content */}
        <div className="relative z-10 container h-full flex flex-col justify-center px-6">

      </div>
    </div>
     
    </section>
  )
}

export default Homepages
