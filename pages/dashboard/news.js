import React from 'react'
import User from '../../layout/users'
import NewsCard from '../../components/Cards/NewsCard';
import DashboardTitle from '../../components/Header/DashboardTitle';

const Index = () => {
  return (
    <User>
        <main className='md:p-10 p-5 space-y-8'>

          <DashboardTitle
          title={"News and Updates"}
          subtitle={"Activities and News relating to the association."}
          value={"Post News"}/>

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


