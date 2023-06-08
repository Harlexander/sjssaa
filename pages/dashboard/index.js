import React from 'react'
import User from '../../layout/users'
import DashboardCard from '../../components/Cards/DashboardCard';
import NewsTable from '../../components/Tables/NewsTable';
import PaymentCard from '../../components/Cards/PaymentCard';
import DashboardTitle from '../../components/Header/DashboardTitle';

const Index = () => {
  return (
    <User>
      <main className='p-5 sm:p-10'>
      
      <DashboardTitle
          title={"Overview"}
          subtitle={"Welcome Dunkwu Alex,"}/>

        <section className='grid my-8 grid-cols-2 md:grid-cols-4 gap-2 sm:gap-5'>
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


