import { Carousel } from 'flowbite-react'
import Link from 'next/link'
import React from 'react'
import { Fade } from 'react-awesome-reveal'
import { OutlineButton, SolidButton } from '../Button/Button'

const HeroCarousel = () => {
  return (
    <div className="h-[40em] md:h-screen">
    <div style={{background : "url(/home.jpg)"}} className="flex flex-col h-full space-y-10 px-5 md:text-left text-center justify-center md:px-24 bg-gray-400 dark:bg-gray-700 dark:text-white">
        <Fade>
        <p className='font-primary md:text-6xl text-3xl text-pry'>St. Joseph Secondary School Alumni Association (SJSSAA) of Surulere Lagos.</p>
            <p className='md:text-2xl font-nunito text-white lg:w-3/5'>
            This website is for the Alumni of St. Joseph Secondary School, Surulere, Lagos, Nigeria. We will share updates and build a network for members on this platform.
            </p>
        </Fade>

            <Fade>
            <div className='flex flex-col md:flex-row gap-5 z-20s'>
               
                <SolidButton
                    href='/register'
                    title={"New Member Registration"}
                    additionalClass="md:py-3 md:text-lg font-nunito py-3 mx-5 md:mx-0"/>             

                <OutlineButton
                    href='/members'
                    title={"Search Member"}
                    additionalClass="md:py-3 md:text-lg font-nunito py-3 mx-5 md:mx-0"/>
                
            </div> 
            </Fade>
        </div> 
     </div>
  )
}

export default HeroCarousel
