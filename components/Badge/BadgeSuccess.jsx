import React from 'react'
import {ExclamationTriangleIcon} from '@heroicons/react/24/outline'

const BadgeSuccess = ({message}) => {
  return (
    <div className='px-4 py-3 font-figtree text-sm text-white flex gap-3 items-center rounded-lg bg-success-600'>
        <div className='p-2 bg-success-800 rounded-lg'>
            <ExclamationTriangleIcon className='h-5'/>
        </div>
        <span>
            {message}
        </span>
    </div>
  )
}

export default BadgeSuccess