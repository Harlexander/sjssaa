import React from 'react'
import Admin from '../../layout/admin'
import { PrinterIcon } from '@heroicons/react/24/outline'
import NewsCard from '../../components/Cards/NewsCard'

const Index = () => {
  return (
    <Admin>
        <main className='p-5 sm:p-10 space-y-8'>
            <section className='space-y-1 flex justify-between'>
                <div>
                    <p className='text-3xl font-manrope font-semibold'>News and Updates</p>
                    <p className='font-figtree text-gray-500'>Activities and News relating to the association.</p>
                </div>
                <div>
                    <button className='font-manrope bg-yellow-400 px-8 py-3 rounded shadow-xl flex items-center gap-4 text-white'>Upload News</button>
                </div>
            </section>

            <section className='grid sm:grid-cols-3 gap-6 py-4'>
            <NewsCard 
            admin={true}/>
            <NewsCard 
            admin={true}/>
            <NewsCard 
            admin={true}/>
            <NewsCard 
            admin={true}/>
          </section>
        </main>
    </Admin>
  )
}

export default Index