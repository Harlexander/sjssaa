import React from 'react'
import Admin from '../../layout/admin'
import DashboardCard from '../../components/Cards/DashboardCard';
import PaymentCard from '../../components/Cards/PaymentCard';
import LatestMembers from '../../components/Tables/LatestMembers';
import DashboardTitle from '../../components/Header/DashboardTitle';
import { UserGroupIcon } from '@heroicons/react/24/outline'
import { useUser } from '../../lib/user';
import { useQuery } from 'react-query';
import { api } from '../../lib/axios';

const Index = () => {
  const { token } = useUser();

  const { isLoading, data = {}, isSuccess } = useQuery(["statistics"], async () => {
    const { data } = await api.get("/admin/stats", { headers : { Authorization : `Bearer ${token} ` } });

    return data;
  }, {enabled : (token !== null)});

  console.log(data);

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
            value={data.memberCount}/>
          <DashboardCard
            title={"Total Payments"}
            icon={<UserGroupIcon className='h-5 sm:h-6 text-white'/>}
            value={data.totalTrans}/>
          <DashboardCard
            title={"Total Events"}
            icon={<UserGroupIcon className='h-5 sm:h-6 text-white'/>}
            value={data.events}/>
          <DashboardCard
            title={"Total News"}
            icon={<UserGroupIcon className='h-5 sm:h-6 text-white'/>}
            value={data.newsCount}/>
        </section>

        <section className='md:grid space-y-4 md:space-y-0 md:grid-cols-3 gap-5'>
          <div className='col-span-2'>
             <LatestMembers data={data.members || []}/>
          </div>
          <div className='col-1'>
            <PaymentCard data={data.trans || []}/>
          </div>
        </section>
      </main>
    </Admin>
  )
}

export default Index;