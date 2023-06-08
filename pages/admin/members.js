import React from 'react'
import Admin from '../../layout/admin'
import { MagnifyingGlassIcon, PrinterIcon } from '@heroicons/react/24/outline'
import MembersTable from '../../components/Tables/MembersTable'
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/20/solid'
import DashboardTitle from '../../components/Header/DashboardTitle'

const Index = () => {
  return (
    <Admin>
        <main className='p-5 sm:p-10 space-y-8'>
          
          <DashboardTitle
            title={"Membership"}
            subtitle={"Manage and verify members."}
            value={"Download"}
            icon={<PrinterIcon className='h-5'/>}
            />

            <section className='bg-white p-2 grid grid-cols-4 gap-2 rounded'>
                <div className='bg-gray-200 col-span-2 flex px-2 gap-2 items-center'>
                    <MagnifyingGlassIcon className='h-4'/>
                    <input className='font-figtree bg-transparent w-full text-sm rounded px-2 py-1' placeholder='Search'/>
                </div>
                <div className='bg-gray-200'>
                    <select className='font-figtree bg-transparent border-0 w-full text-sm rounded px-2 py-1'>
                        <option>Filter By Set</option>
                    </select>
                </div>
                <div className='bg-gray-200'>
                    <select className='font-figtree bg-transparent border-0 w-full text-sm rounded px-2 py-1'>
                        <option>Filter By Profession</option>
                    </select>
                </div>
          </section>

          <section>
            <MembersTable/>

            <div className='font-figtree flex justify-between py-5'>
                <p className='bg-white px-4 py-2 rounded-lg'>Page 1 of 20</p>

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