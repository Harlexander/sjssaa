import React from 'react'
import User from '../../layout/users'
import DashboardCard from '../../components/Cards/DashboardCard';
import JobsTable from '../../components/Tables/JobsTable';
import PaymentCard from '../../components/Cards/PaymentCard';
import DashboardTitle from '../../components/Header/DashboardTitle';
import { useUser } from '../../lib/user';
import {UserGroupIcon, CakeIcon, BriefcaseIcon, BanknotesIcon} from '@heroicons/react/24/outline'
import { useQuery } from 'react-query';
import { api } from '../../lib/axios';
const Index = () => {
  const { user, token } = useUser();

  const { isLoading, data = {}, isSuccess } = useQuery(["statistics"], async () => {
    const { data } = await api.get("/stats", { headers : { Authorization : `Bearer ${token} ` } });

    return data;
  }, {enabled : (token !== null)});



  return (
    <User>
      <main className='p-5 sm:p-10'>
      
      <DashboardTitle
          title={"Overview"}
          subtitle={isSuccess && "Welcome "+user.firstName + " " + user.lastName + ","}/>

        <section className='grid my-8 grid-cols-2 md:grid-cols-4 gap-2 sm:gap-5'>
          <DashboardCard
          title={"Total Members"}
          icon={<UserGroupIcon className='h-5 sm:h-6 text-white'/>}
          value={data.memberCount || 0}
          />
          <DashboardCard
            title={"Upcoming Events"}
            icon={<CakeIcon className='h-5 sm:h-6 text-white'/>}
            value={data.upcomingEventCount || 0}
            />
          <DashboardCard
            title={"Jobs Postings"}
            icon={<BriefcaseIcon className='h-5 sm:h-6 text-white'/>}
            value={data.jobCount || 0}
            />
          <DashboardCard
            title={"Total Payments"}
            icon={<BanknotesIcon className='h-5 sm:h-6 text-white'/>}
            value={4}
            />
        </section>

        <section className='md:grid space-y-4 sm:space-y-0 md:grid-cols-3 gap-5'>
          <div className='col-span-2'>
             <JobsTable data={data.jobs} isLoading={isLoading}/>
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


