import React from 'react'
import User from '../../layout/users'
import { CalendarDaysIcon } from '@heroicons/react/24/outline';
import { CalendarIcon } from '@heroicons/react/20/solid';
import EventsTable from '../../components/Tables/EventsTable';
import DashboardTitle from '../../components/Header/DashboardTitle';

const Index = () => {
  return (
    <User>
        <main className='md:p-10 p-5 space-y-4'>

          <DashboardTitle
          title={"Events"}
          subtitle={"Register for upcoming events and view past events."}/>

          <section className='gap-3 flex overflow-x-auto py-6'>
            <UpcomingEvents/>
            <UpcomingEvents/>
            <UpcomingEvents/>
            <UpcomingEvents/>
          </section>

          <section>
            <EventsTable/>
          </section>
        </main>
    </User>
  )
}

export default Index;


const UpcomingEvents = () => (
  <div className='bg-white flex-shrink-0 shadow-lg p-4 w-64 rounded-lg space-y-3 '>
      <p className='font-manrope'>Title of the Event</p>
      <p className='font-figtree text-xs'>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum </p>
  
      <div className='flex items-center gap-1 text-xs font-figtree'>
        <CalendarIcon className='h-4'/>
        <span>27th May, 2023</span>
      </div>

      <button className='bg-yellow-500 rounded px-4 py-2 text-xs text-white font-figtree'>Register</button>
  </div>
)