import React from 'react'
import User from '../../layout/users'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import JobsCard from '../../components/Cards/JobsCard';

const Index = () => {
  return (
    <User>
        <main className='md:p-10 p-5 space-y-8'>
          <section className='space-y-1 flex justify-between'>
            <div>
              <p className='text-3xl font-manrope font-semibold'>Job Board</p>
              <p className='font-figtree text-gray-500'>Post job opportunies for members and also search for suitable opportunities.</p>
            </div>
            <div className='flex-shrink-0'>
              <button className='font-manrope bg-yellow-400 px-8 py-3 rounded shadow-xl text-white'>Post Job</button>
            </div>
          </section>

          <section className='bg-white p-2 rounded'>
            <div className='bg-gray-200 w-3/5 flex px-2 gap-2 items-center'>
              <MagnifyingGlassIcon className='h-4'/>
            <input className='font-figtree bg-transparent w-full text-sm rounded px-2 py-1' placeholder='Search'/>
            </div>
          </section>

          <section className='grid sm:grid-cols-3 gap-3'>
            <JobsCard/>
            <JobsCard/>
            <JobsCard/>
            <JobsCard/>
            <JobsCard/>
            <JobsCard/>
            <JobsCard/>
          </section>
        </main>    
    </User>
  )
}

export default Index;


