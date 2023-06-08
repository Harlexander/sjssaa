import React from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import JobsCard from '../../components/Cards/JobsCard';
import Admin from '../../layout/admin';
import DashboardTitle from '../../components/Header/DashboardTitle';

const Index = () => {
  return (
    <Admin>
        <main className='md:p-10 p-5 space-y-8'>

          <DashboardTitle
            title={"Job Board"}
            subtitle={"Post job opportunies for members and also search for suitable opportunities."}
            value={"Post Job"}
            />

          <section className='bg-white p-2 rounded'>
            <div className='bg-gray-200 w-3/5 flex px-2 gap-2 items-center'>
              <MagnifyingGlassIcon className='h-4'/>
            <input className='font-figtree bg-transparent w-full text-sm rounded px-2 py-1' placeholder='Search'/>
            </div>
          </section>

          <section className='grid sm:grid-cols-3 gap-3'>
            <JobsCard admin={true}/>
            <JobsCard admin={true}/>
            <JobsCard admin={true}/>
            <JobsCard admin={true}/>
            <JobsCard admin={true}/>
            <JobsCard admin={true}/>
            <JobsCard admin={true}/>
          </section>
        </main>    
    </Admin>
  )
}

export default Index;


