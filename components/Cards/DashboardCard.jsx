import { UserIcon } from '@heroicons/react/24/outline'
import React from 'react'

const DashboardCard = () => {
  return (
    <div className='bg-white rounded-lg w-full p-4 space-y-4'>
        <div className='flex justify-between'>
            <p className='font-manrope'>Title</p>
            <div className='rounded-full p-2 bg-blue-500'>
                <UserIcon className='h-6 text-white'/>
            </div>
        </div>
        <div>
            <a href="" className='font-figtree text-sm '>View Profile</a>
        </div>
    </div>
  )
}

export default DashboardCard