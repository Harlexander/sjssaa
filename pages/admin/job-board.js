import React, { useState } from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import JobsCard from '../../components/Cards/JobsCard';
import Admin from '../../layout/admin';
import DashboardTitle from '../../components/Header/DashboardTitle';
import { api } from '../../lib/axios';
import { useMutation, useQuery } from 'react-query';
import { useUser } from '../../lib/user';
import Skeleton from 'react-loading-skeleton';
import MyModal from '../../components/Modal/Modal';
import { JobButton, JobForm } from '../dashboard/job-board';

const Index = () => {
  const { token } = useUser();
  const [ isOpen, setIsOpen ] = useState(false);

  const jobs = useQuery(["job-board"], async () => {
      const { data } = await api.get("/job-board", { headers : { Authorization : `Bearer ${token} ` } });

      return data;
  }, {enabled : (token !== null)});



    const { isLoading, mutate, isSuccess } = useMutation(async (values) => {
        const { data } = await api.post("/job-board", values, { headers : { Authorization : `Bearer ${token}`}})
        return data;
      }, {
        onSuccess : () => {
          setFormValues({});
          jobs.refetch();
        }
      });

    const closeModal = () => setIsOpen(!isOpen);

    const [formValues, setFormValues] = useState({
      title: '',
    });

    const handleSubmit = () => {
      mutate(formValues);
    }


  return (
    <Admin>
          <MyModal
            isOpen={isOpen}
            title={"Add Job Opening"}
            body={<JobForm 
                handleChange={(e) =>  handleChange(e, setFormValues)} 
                formValues={formValues}
                isSuccess={isSuccess}
            />}
            button={<JobButton 
                handleSubmit={handleSubmit}
                isLoading={isLoading}
            />}
            closeModal={closeModal}
            />
        <main className='md:p-10 p-5 space-y-8'>

          <DashboardTitle
            title={"Job Board"}
            subtitle={"Post job opportunies for members and also search for suitable opportunities."}
            value={"Post Job"}
            onClick={closeModal}
            />

          <section className='bg-white p-2 rounded'>
            <div className='bg-gray-200 w-3/5 flex px-2 gap-2 items-center'>
              <MagnifyingGlassIcon className='h-4'/>
            <input className='font-figtree bg-transparent w-full text-sm rounded px-2 py-1' placeholder='Search'/>
            </div>
          </section>

          <section className='grid sm:grid-cols-3 gap-3'>
          {        
              jobs.isSuccess && (
                jobs.data.map(({title, org, exp_date, created_at, description, contact, link}, index) => (
                  <JobsCard
                    key={index}
                    title={title}
                    org={org}
                    exp_date={exp_date}
                    created_at={created_at}
                    contact={contact}
                    link={link}
                    admin={true}
                    description={description}/>
                ))
              )
          }

          {
              jobs.isLoading && (
                Array(3).fill("").map((indexes, index) => (
                  <div key={index} className='bg-white shadow-lg p-4 rounded-lg'>
                    <Skeleton className='h-40'/>
                    <Skeleton/>
                    <Skeleton className='h-20'/>
                    <Skeleton className='h-10'/>
                  </div>
                ))
              )
            }
          </section>
        </main>    
    </Admin>
  )
}

export default Index;


