import { CalendarDaysIcon, UserIcon } from '@heroicons/react/24/outline'
import React from 'react'

const NewsCard = ({admin}) => {
  return (
    <div className='bg-white rounded-lg'>
        <img src="/87set (1).jpeg" alt="" className='rounded-t-lg w-full' />

        <div className='p-4 rounded z-20 space-y-3'>
            <p className='font-manrope font-semibold text-lg'>Title of the News</p>
           
           <div className="flex items-center gap-4">
                <div className='font-figtree text-xs flex items-center gap-2'>
                    <CalendarDaysIcon className='h-4 text-yellow-400'/>
                    24th May, 2023
                </div>
                <div className='font-figtree text-xs flex items-center gap-2'>
                    <UserIcon className='h-4 text-yellow-400'/>
                    Administrator
                </div>
           </div>
           
            <p className='font-figtree text-sm'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            </p>

            <div className='flex items-center gap-4 text-white'>
                <button className='font-figtree text-xs bg-yellow-500 px-2 py-1.5 rounded'>View All</button>

                {
                    admin && (<button className='font-figtree text-xs bg-red-500 px-2 py-1.5 rounded'>Delete</button>)
                }                
            </div>
        </div>
    </div>
  )
}

export default NewsCard