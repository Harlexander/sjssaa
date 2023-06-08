import React from 'react'
import User from '../../layout/users'
import NewsCard from '../../components/Cards/NewsCard';

const Index = () => {
  return (
    <User>
        <main className='md:p-10 p-5 space-y-8'>
          <section className='space-y-1 flex justify-between'>
            <div>
              <p className='text-3xl font-manrope font-semibold'>News and Updates</p>
              <p className='font-figtree text-gray-500'>Activities and News relating to the association.</p>
            </div>
            <div className='flex-shrink-0'>
              <button className='font-manrope bg-yellow-400 px-6 sm:px-8 py-3 rounded shadow-xl text-white'>Post News</button>
            </div>
          </section>

          <section className='grid sm:grid-cols-3 gap-4'>
            <NewsCard/>
            <NewsCard/>
            <NewsCard/>
            <NewsCard/>
          </section>
        </main>
    </User>
  )
}

export default Index;


