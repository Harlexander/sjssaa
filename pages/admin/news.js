import React from 'react'
import Admin from '../../layout/admin'
import { PrinterIcon } from '@heroicons/react/24/outline'
import NewsCard from '../../components/Cards/NewsCard'
import DashboardTitle from '../../components/Header/DashboardTitle'

const Index = () => {
  return (
    <Admin>
        <main className='p-5 sm:p-10 space-y-8'>
            
            <DashboardTitle
            title={"News and Updates"}
            subtitle={"Activities and News relating to the association."}
            value={"Upload News"}/>

            <section className='grid sm:grid-cols-3 gap-6 py-4'>
            <NewsCard 
            admin={true}/>
            <NewsCard 
            admin={true}/>
            <NewsCard 
            admin={true}/>
            <NewsCard 
            admin={true}/>
          </section>
        </main>
    </Admin>
  )
}

export default Index