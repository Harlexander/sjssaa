import React from 'react'
import Link from "next/link";

const FooterSection = () => {
  return (

    <>
    <div className='bg-yellow-500 px-5 md:px-32 py-24'>
        <div className="md:grid grid-cols-12">
            <div className='col-span-6'>
                <div className='flex gap-4'>
                    <img src='logo.png' className='h-24'/>
                    <img src='logo-1.png' className='h-24'/>
                </div>
                <p className='uppercase font-italic text-md text-white font-primary'>Motto : First or with the First</p>
                <div className='md:w-3/4 py-4 text-gray-900'>
                    <p className='font-primary text-2xl text-black mb-4'>St. Joseph Secondary School Alumni Association</p>
                    <p className='font-montserrat'>The Alumni of  St. Joseph Secondary School  Surulere Lagos official website. We will be sharing updates and build network for members on this platform</p>
                </div>
            </div>
            <div className='col-span-6 flex  md:flex-row flex-col gap-4 md:gap-0 justify-between mt-10 md:mt-24 py-4'>
                <div className='col-1'>
                    <p className='font-montserrat font-bold text-black pb-5 text-xl'>Contact Us</p>
                    <ul className='text-gray-900 font-montserrat text-sm space-y-2'>
                        <li><a href='tel:+2348142676712' className='hover:text-yellow-900 hover:font-bold'>+2348142676712 (P.R.O)</a></li>
                        <li><a href='mailto:pro@sjssaa.com' className='hover:text-yellow-900 hover:font-bold'>pro@sjssaa.com</a></li>
                        <li><a href='mailto:dom@sjssaa.com' className='hover:text-yellow-900 hover:font-bold'>dom@sjsss.com</a></li>
                        <li><a href='mailto:secretary@sjssaa.com' className='hover:text-yellow-900 hover:font-bold'>secretary@sjsss.com</a></li>
                        <li><a href='mailto:president@sjssaa.com' className='hover:text-yellow-900 hover:font-bold'>president@sjsss.com</a></li>
                    </ul>
                </div>
                <div className='col-1'>
                    <p className='font-montserrat font-bold text-black pb-5 text-xl'>Quick Links</p>
                    <ul className='text-gray-800 font-montserrat text-sm space-y-2'>
                        <li><Link href='/'><a className='hover:text-yellow-900 hover:font-bold'>Home</a></Link></li>
                        <li><Link href='/about'><a className='hover:text-yellow-900 hover:font-bold'>About Sjsss</a></Link></li>
                        <li><Link href='/gallery'><a className='hover:text-yellow-900 hover:font-bold'>Gallery</a></Link></li>
                        <li><Link href='/excos/national-executives'><a className='hover:text-yellow-900 hover:font-bold'>Executives</a></Link></li>
                        <li><Link href='/members'><a className='hover:text-yellow-900 hover:font-bold'>Search Member</a></Link></li>
                    </ul>
                </div>
                <div className='col-1'>
                    <p className='font-montserrat font-bold text-black pb-5 text-xl'>Follow Us</p>
                    <ul className='text-gray-800 font-montserrat text-sm space-y-2'>
                        <li><a href='#' className='hover:text-yellow-900 hover:font-bold'>Facebook</a></li>
                        <li><a href='#' className='hover:text-yellow-900 hover:font-bold'>Instagram</a></li>
                        <li><a href='#' className='hover:text-yellow-900 hover:font-bold'>Linkedin</a></li>
                        <li><a href='#' className='hover:text-yellow-900 hover:font-bold'>Youtube</a></li>
                    </ul>
                    <div className='flex gap-2 py-6'>
                        <div className='bg-white p-2'>
                           <img src='mobile.svg' className='h-6'/>
                        </div>
                        <div className='p-2 flex items-center bg-white'>
                            <img src='whatsapp.svg' className='h-6'/>
                        </div>
                        <div className='p-2 flex items-center bg-white'>
                             <img src='instagram.svg' className='h-6'/>
                        </div>
                        <div className='p-2 flex items-center bg-white'>
                             <img src='facebook.svg' className='h-6'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className='text-center py-5 font-montserrat bg-yellow-500 bg-opacity-70'>
        <a href='https://www.peachy.com.ng'>Designed by Peachy &copy;</a>
    </div>
    </>
  )
}

export default FooterSection