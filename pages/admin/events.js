import React from 'react'
import Admin from '../../layout/admin'
import { CalendarDaysIcon, PrinterIcon } from '@heroicons/react/24/outline'

const Index = () => {
  return (
    <Admin>
        <main className='p-5 sm:p-10 space-y-8'>
            <section className='space-y-1 flex justify-between'>
                <div>
                    <p className='text-3xl font-manrope font-semibold'>Events</p>
                    <p className='font-figtree text-gray-500'>Manage, Create and collect data for events.</p>
                </div>
                <div>
                    <button className='font-manrope bg-yellow-400 px-8 py-3 rounded shadow-xl flex items-center gap-4 text-white'>Create Event</button>
                </div>
            </section>

            <section className='grid sm:grid-cols-3 gap-6 py-4'>
                <EventCard/>
                <EventCard/>
                <EventCard/>
                <EventCard/>
                <EventCard/>
            </section>
        </main>
    </Admin>
  )
}

export default Index


const EventCard = () => (
    <div className='bg-white rounded-lg p-4 space-y-4'>
        <img src='/awards.png' className='w-full'/>

        <div className='font-figtree text-xs space-y-2'>
            <p className='font-manrope font-semibold text-lg'>Name of Event</p>

            <div className='flex items-center gap-2'>
                <CalendarDaysIcon className='h-4 text-yellow-500'/>
                <span>26th May 2023</span>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>

        <div className='flex justify-between'>
            <button className='px-4 py-2 rounded-lg text-white font-figtree text-xs bg-blue-500'>
                Registration List
            </button>
            <button className='px-4 py-2 rounded-lg text-white font-figtree text-xs bg-red-500'>
                Remove
            </button>
        </div>
    </div>
);