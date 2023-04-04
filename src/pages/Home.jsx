import React from 'react'
import Navbar from '../components/Navbar'
import { Hero } from '../components/Hero'
import { Cards } from '../components/Cards'
import { Footerv2 } from '../components/Footerv2'
// import { Hero } from '../components/Hero'
// import { Footerv2 } from '../components/Footerv2'
// import { Cards } from '../components/Cards'

const Home = () => {
  return (
    <div className='bg-white'>
        <Navbar />
        <Hero />
        <Cards />
        <Footerv2 />
        {/* <Hero />
        <Cards />
        <Footerv2 /> */}
    </div>
  )
}

export default Home