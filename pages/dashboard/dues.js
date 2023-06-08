import React from 'react'
import User from '../../layout/users'
import PaymentsTable from '../../components/Tables/PaymentsTable';
import ActivePaymentCard from '../../components/Cards/ActivePaymentCard';

const Index = () => {
  return (
    <User>
        <main className='md:p-10 p-5 space-y-8'>
          <section className='space-y-1'>
            <p className='text-3xl font-manrope font-semibold'>Subcriptions</p>
            <p className='font-figtree text-gray-500'>Manage your subscription,dues and payments. Initiate payments conveniently.</p>
          </section>

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


