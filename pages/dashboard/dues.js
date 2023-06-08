import React from 'react'
import User from '../../layout/users'
import PaymentsTable from '../../components/Tables/PaymentsTable';
import ActivePaymentCard from '../../components/Cards/ActivePaymentCard';
import DashboardTitle from '../../components/Header/DashboardTitle';

const Index = () => {
  return (
    <User>
        <main className='md:p-10 p-5 space-y-8'>

          <DashboardTitle
            title={"Subscriptions"}
            subtitle={"Manage your subscription,dues and payments. Initiate payments conveniently."}/>

          <section>
            <ActivePaymentCard/>
          </section>

          <section>
            <PaymentsTable/>
          </section>
        </main>
    </User>
  )
}

export default Index;


