import React from 'react'
import User from '../../layout/users'
import DashboardCard from '../../components/Cards/DashboardCard';
import NewsTable from '../../components/Tables/NewsTable';
import PaymentCard from '../../components/Cards/PaymentCard';

const Index = () => {
  return (
    <User>
      <main className='p-5 sm:p-10'>
        <section className='space-y-1'>
          <p className='text-3xl font-manrope font-semibold'>Overview</p>
          <p className='font-figtree text-gray-500'>Welcome Dunkwu Alexander,</p>
        </section>

        <section className='grid my-8 md:grid-cols-4 gap-2 sm:gap-5'>
          <DashboardCard/>
          <DashboardCard/>
          <DashboardCard/>
          <DashboardCard/>
        </section>

        <section className='md:grid space-y-4 sm:space-y-0 md:grid-cols-3 gap-5'>
          <div className='col-span-2'>
             <NewsTable/>
          </div>
          <div className='col-1'>
            <PaymentCard/>
          </div>
        </section>
      </main>
    </User>
  )
}

export default Index;


