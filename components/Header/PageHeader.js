import React from 'react'
import Link from 'next/link'

const PageHeader = ({title}) => {
  return (
    <div className='bg-yellow-400 py-16 md:py-20 flex justify-center items-center'>
        <div>
            <p className='font-primary capitalize text-center text-3xl md:text-5xl'>{title}</p>
        </div>
    </div>
  )
}

export default PageHeader