import React from 'react'
import Admin from '../../layout/admin'
import DashboardCard from '../../components/Cards/DashboardCard';
import NewsTable from '../../components/Tables/NewsTable';
import PaymentCard from '../../components/Cards/PaymentCard';
import LatestMembers from '../../components/Tables/LatestMembers';
import DashboardTitle from '../../components/Header/DashboardTitle';
import {UserGroupIcon} from '@heroicons/react/24/outline'
const Index = () => {
  return (
    <Admin>
      <main className='p-5 sm:p-10'>

        <DashboardTitle
        title={"Overview"}
        subtitle={"Welcome Administrator,"}
        />

        <section className='grid my-8 grid-cols-2 md:grid-cols-4 gap-2 sm:gap-5'>
          <DashboardCard
            title={"Total Members"}
            icon={<UserGroupIcon className='h-5 sm:h-6 text-white'/>}
            value={10}/>
          <DashboardCard
            title={"Total Payments"}
            icon={<UserGroupIcon className='h-5 sm:h-6 text-white'/>}
            value={10}/>
          <DashboardCard
            title={"Total Events"}
            icon={<UserGroupIcon className='h-5 sm:h-6 text-white'/>}
            value={10}/>
          <DashboardCard
            title={"Total News"}
            icon={<UserGroupIcon className='h-5 sm:h-6 text-white'/>}
            value={10}/>
        </section>

        <section className='md:grid space-y-4 sm:space-y-0 md:grid-cols-3 gap-5'>
          <div className='col-span-2'>
             <LatestMembers/>
          </div>
          <div className='col-1'>
            <PaymentCard/>
          </div>
        </section>
      </main>
    </Admin>
  )
}

export default Index;