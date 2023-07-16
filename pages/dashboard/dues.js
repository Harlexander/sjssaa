import React from 'react'
import User from '../../layout/users'
import PaymentsTable from '../../components/Tables/PaymentsTable';
import ActivePaymentCard from '../../components/Cards/ActivePaymentCard';
import DashboardTitle from '../../components/Header/DashboardTitle';
import { useUser } from '../../lib/user';
import { useQuery } from 'react-query';
import { api } from '../../lib/axios';
import { useRouter } from 'next/router';

const Index = () => {
  const { token } = useUser();
  const router = useRouter();
  const fullURL = router.asPath;

  const transactions = useQuery(['transactions'], async () => {
    const { data } = await api.get("/transactions" , { headers : { Authorization : `Bearer ${token}`}})
  
    return data;
  }, { enabled : (token !== null) });

  const activePayments = useQuery(['active-payments'], async () => {
    const { data } = await api.get("/active-payment" , { headers : { Authorization : `Bearer ${token}`}})
  
    return data;
  }, { enabled : (token !== null) });

  
  return (
    <User>
        <main className='md:p-10 p-5 space-y-8'>

          <DashboardTitle
            title={"Subscriptions"}
            subtitle={"Manage your subscription,dues and payments. Initiate payments conveniently."}/>

          <section>
            <ActivePaymentCard data={{...activePayments.data, callback_url : fullURL} || [] } loading={activePayments.isLoading}/>
          </section>

          <section>
            <PaymentsTable data={transactions.data || []} loading={transactions.isLoading}/>
          </section>
        </main>
    </User>
  )
}

export default Index;


