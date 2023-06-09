import React from 'react'
import User from '../../layout/users'
import DashboardCard from '../../components/Cards/DashboardCard';
import NewsTable from '../../components/Tables/NewsTable';
import PaymentCard from '../../components/Cards/PaymentCard';
import DashboardTitle from '../../components/Header/DashboardTitle';
import { useUser } from '../../lib/user';
import {UserGroupIcon, CakeIcon, BriefcaseIcon, BanknotesIcon} from '@heroicons/react/24/outline'
const Index = () => {
  const { user } = useUser();

  return (
    <User>
      <main className='p-5 sm:p-10'>
      
      <DashboardTitle
          title={"Overview"}
          subtitle={"Welcome "+user.firstName + " " + user.lastName + ","}/>

        <section className='grid my-8 grid-cols-2 md:grid-cols-4 gap-2 sm:gap-5'>
          <DashboardCard
          title={"Total Members"}
          icon={<UserGroupIcon className='h-5 sm:h-6 text-white'/>}
          value={20}
          />
          <DashboardCard
            title={"Upcoming Events"}
            icon={<CakeIcon className='h-5 sm:h-6 text-white'/>}
            value={1}
            />
          <DashboardCard
            title={"Jobs Postings"}
            icon={<BriefcaseIcon className='h-5 sm:h-6 text-white'/>}
            value={10}
            />
          <DashboardCard
            title={"Total Payments"}
            icon={<BanknotesIcon className='h-5 sm:h-6 text-white'/>}
            value={4}
            />
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


