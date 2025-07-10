import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'motion/react'

const About = () => {
  return (
    <motion.div 
    initial={{opacity:0, x:200}}
    transition={{duration:1}}
    whileInView={{opacity:1, x:0}}
    viewport={{once: true}}
    className='flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden' id='About'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2'>About <span className='underline underline-offset-4 decoration-1 under font-light'>Me</span></h1>
      <p className='text-gray-500 max-w-80 text-center mb-8'>Passionate about product design, dedicated to best user experience.</p>
      <div className='flex flex-col md:flex-row items-center md:items-center md:gap-20'>
        <img src={assets.potrait_khairul} alt="" className='w-full sm:w-1/3 max-w-lg'/>
        <div className='flex flex-col w-full items-center md:items-start mt-10 text-gray-600'>
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-10 w-full 2xl:pr-28'>
                <div>
                    <p className='text-4xl font-medium text-gray-800'>7+</p>
                    <p>Years of Experience</p>
                </div>
                <div>
                    <p className='text-4xl font-medium text-gray-800'>20+</p>
                    <p>Projects Completed</p>
                </div>
                {/* <div>
                    <p className='text-4xl font-medium text-gray-800'>5+</p>
                    <p>Ongoing Projects</p>
                </div> */}
            </div>
            <p className='my-10'>I’m an UI/UX Designer with a focus on Human Centered Design. I design and craft products and visual experiences based on deep understanding of human behaviour and needs.</p>
            {/* <button className='bg-blue-600 text-white px-8 py-2 rounded'>Learn More</button> */}
        </div>
      </div>
    </motion.div>
  )
}

export default About
