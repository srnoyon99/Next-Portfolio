import React from 'react'
import Homepages from '@/Home/page'
import Experience from '@/Experience/page'
import About from '@/About/page'
import Project from '@/Projects/page'
import Contact from '@/Contact/page'
import Message from '@/OtherComponent/Message'

const Home = () => {
  return (
    <div>
      <Homepages/>
      <About/>
      <Experience/>
      <Project/>
      <Contact/>
      <Message/>
    </div>
  )
}

export default Home
