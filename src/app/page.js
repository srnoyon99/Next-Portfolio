import React from 'react'
import Homepages from '@/Home/page'
import Experience from '@/Experience/page'
import About from '@/About/page'
import Project from '@/Projects/page'
import Contact from '@/Contact/page'

const Home = () => {
  return (
    <div>
      <Homepages/>
      <About/>
      <Experience/>
      <Project/>
      <Contact/>
    </div>
  )
}

export default Home
