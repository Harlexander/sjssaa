import { BuildingOfficeIcon, CalendarDaysIcon, UserIcon } from '@heroicons/react/24/outline'
import React from 'react'

const JobsCard = ({admin}) => {
  return (
    <div className='bg-white rounded p-4 space-y-4'>
        <p className='font-manrope font-semibold'>Senior Frontend Developer</p>

        <div className='font-figtree'>
            <p className='text-xs flex items-center gap-2'><BuildingOfficeIcon className='h-4 text-yellow-500'/> Chartered Institute of Professionals</p>
        </div>

        {
          admin && (
            <div className='font-figtree'>
                <p className='text-xs flex items-center gap-2'><UserIcon className='h-4 text-yellow-500'/> Dunkwu Alexander</p>
            </div>            
          )
        }

        <div className='font-figtree '>
            <p className='text-sm'>Job Description: </p>
            <p className='text-xs text-gray-800'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
        </div>

        <div className='font-figtree'>
            <p className='text-xs flex items-center gap-2'><CalendarDaysIcon className='h-4 text-yellow-500'/> 27th May, 2023</p>
        </div>
        
        <div className='flex gap-4'>
          <button className='font-figtree text-sm bg-yellow-400 text-white px-4 py-2'>Apply Here</button>

          {
            admin && (
              <button className='font-figtree text-sm bg-red-500 text-white px-4 py-2'>Delete</button>
            )
          }
        </div>      
      </div>
  )
}

export default JobsCard