import React from 'react'
import Navbar from './Navbar'
import { motion } from "motion/react"

const Header = () => {
  return (
    <div 
        className='min-h-screen mb-4 bg-gray-900 bg-cover bg-center flex items-center w-full overflow-hidden'
        // style={{backgroundImage:"url('/header_img.png')"}}
        id='Header'>
      <Navbar/>
      <div className='container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white'>
        <motion.div 
          initial={{opacity:0, y:-100}}
          transition={{duration:1.5}}
          whileInView={{opacity:1, y:0}}
          viewport={{once: true}}
          className='text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20'>
            I'm Khairul Azry
        </motion.div>
        <motion.div 
          initial={{opacity:0, y:-100}}
          transition={{duration:1.5}}
          whileInView={{opacity:1, y:0}}
          viewport={{once: true}}
          className='text-center text-gray-200 mb-12 max-w-lg mx-auto pt-8 '>
            An UI/UX Designer based in  Kuala Lumpur, Malaysia working with brands, agencies, & entrepreneurs from all over the world.
        </motion.div>
        <motion.div 
          initial={{opacity:0, y:100}}
          transition={{duration:1.5}}
          whileInView={{opacity:1, y:0}}
          viewport={{once: true}}
          className='flex flex-col sm:flex-row gap-2 sm:gap-6 mt-16 justify-center'>
            {/* <a href="#Projects" className='border border-white px-8 py-3 rounded'>My Projects</a> */}
            <a href="https://www.behance.net/khairulazry" className='border border-white px-8 py-3 rounded' target='_blank'>My Projects</a>
            <a href="#Contact" className='bg-blue-500 px-8 py-3 rounded'>Let's Talk</a>
        </motion.div>
      </div>
    </div>
  )
}

export default Header
