import React from 'react'
import Admin from '../../layout/admin'
import { ArrowLeftIcon, ArrowRightIcon, PrinterIcon } from '@heroicons/react/24/outline'
import { AdminPaymentsTable } from '../../components/Tables/PaymentsTable'
import DashboardTitle from '../../components/Header/DashboardTitle'

const Index = () => {
  return (
    <Admin>
        <main className='p-5 sm:p-10 space-y-8'>

            <DashboardTitle
            title={"Payments"}
            subtitle={"Payment records and subscriptions."}
            value={"Create Ticket"}/>

            <section className='bg-white shadow-lg p-2 grid grid-cols-4 gap-2 rounded'>
                <div className='bg-gray-200'>
                    <select className='font-figtree bg-transparent border-0 w-full text-sm rounded px-2 py-1'>
                        <option>Filter By Status</option>
                    </select>
                </div>
                <div className='bg-gray-200'>
                    <select className='font-figtree bg-transparent border-0 w-full text-sm rounded px-2 py-1'>
                        <option>Filter By Amount</option>
                    </select>
                </div>
                <div className='bg-gray-200'>
                    <select className='font-figtree bg-transparent border-0 w-full text-sm rounded px-2 py-1'>
                        <option>Filter By Purpose</option>
                    </select>
                </div>
                <div className='bg-gray-200'>
                    <select className='font-figtree bg-transparent border-0 w-full text-sm rounded px-2 py-1'>
                        <option>Filter By Set</option>
                    </select>
                </div>
          </section>

            <section>
                <AdminPaymentsTable/>

                
            <div className='font-figtree flex justify-between py-5'>
                <p className='bg-white px-4 py-2 rounded-lg shadow-xl'>Page 1 of 20</p>

                <div className='space-x-2'>
                    <button className='px-3 py-2 bg-white shadow-xl rounded-lg'>
                        <ArrowLeftIcon className='h-4'/>
                    </button>
                    <button className='px-3 py-2 bg-white shadow-xl rounded-lg'>
                        <ArrowRightIcon className='h-4'/>
                    </button>
                </div>
            </div>
            </section>
        </main>
    </Admin>
  )
}

export default Index