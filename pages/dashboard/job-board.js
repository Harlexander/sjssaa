import React, { useEffect, useState } from 'react'
import User from '../../layout/users'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import JobsCard from '../../components/Cards/JobsCard';
import DashboardTitle from '../../components/Header/DashboardTitle';
import { useMutation, useQuery } from 'react-query';
import { api } from '../../lib/axios';
import { useUser } from '../../lib/user';
import { ScaleLoader } from 'react-spinners'
import MyModal from '../../components/Modal/Modal';
import { handleChange } from '../../lib/handleInput';
import BadgeSuccess from '../../components/Badge/BadgeSuccess';
import { searchByTitle } from '../../lib/searchFunction';
import Skeleton from 'react-loading-skeleton';

const Index = () => {
  const { token } = useUser();
  const [ isOpen, setIsOpen ] = useState(false);
  const [ searchQuery, setSearchQuery ] = useState("");
  const [ searchResult, setSearchResult ] = useState([]);

  const closeModal = () => setIsOpen(!isOpen);

  const [formValues, setFormValues] = useState({
    title: '',
  });

  const { isLoading, mutate, isSuccess } = useMutation(async (values) => {
      const { data } = await api.post("/job-board", values, { headers : { Authorization : `Bearer ${token}`}})
      return data;
    }, {
      onSuccess : () => {
        jobs.refetch();
      }
    });

    const handleSubmit = () => {
      mutate(formValues);
    }

    console.log(formValues);

  useEffect(() => {
    if(searchQuery.length > 0 ){
      const result =  searchByTitle(searchQuery, jobs.data);
      setSearchResult(result);
    }else{
      setSearchResult([]);
    }
  }, [searchQuery]);


  return (
    <User>
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
          onClick={closeModal}
          value={"Post Job"}/>

          <section className='bg-white p-2 rounded'>
            <div className='bg-gray-200 w-3/5 flex px-2 gap-2 items-center'>
              <MagnifyingGlassIcon className='h-4'/>
            <input onChange={(e) => setSearchQuery(e.target.value)} className='font-figtree bg-transparent w-full text-sm rounded px-2 py-1' placeholder='Search'/>
            </div>
          </section>

          {
            searchResult.length > 0 && (
              <section className='space-y-5'>
              <div className='space-y-1'>
                <p className='font-figtree font-semibold'>Search Results</p>
  
                <section className='grid sm:grid-cols-3 gap-3'>
                  {
                      searchResult.map(({title, org, exp_date, created_at, description, contact, link}, index) => (
                        <JobsCard
                          key={index}
                          title={title}
                          org={org}
                          exp_date={exp_date}
                          created_at={created_at}
                          contact={contact}
                          link={link}
                          description={description}/>
                      ))
                  }
                </section>                
              </div>
   
  
              <hr/>   
            </section>
            )
          }

          <section className='grid sm:grid-cols-3 gap-5'>
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
                    description={description}/>
                ))
              )
            }
            {
              jobs.isSuccess && 
                jobs.data.length < 1 && (
                  <div className='bg-white h-[80vh] w-full col-span-3 flex items-center justify-center rounded-xl'>
                    <div className='space-y-2'>
                      <p className='font-figtree text-center text-2xl font-bold'>No Open Jobs</p>
                      <p className='font-figtree mx-auto text-center text-sm sm:w-2/3'>Post job offers and opportunities for members of the association on any field or profession.</p>
                    
                      <button onClick={closeModal} className='flex mx-auto items-center whitespace-nowrap text-sm sm:text-md gap-1.5 sm:gap-3 font-manrope bg-yellow-400 px-4 sm:px-12 py-2 sm:py-2 rounded shadow-xl text-white'>Post Job</button>
                    </div>
                  </div>
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
    </User>
  )
}


export const JobButton = ({handleSubmit, isLoading}) => (
  <button
  onClick={handleSubmit}
  type="button"
  className="inline-flex text-white font-figtree justify-center rounded-md border border-transparent bg-pry px-4 py-2 text-sm font-medium hover:bg-yellow-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-pry focus-visible:ring-offset-2"
>
  {
    isLoading ? (<ScaleLoader className='px-8' color='white' height={16}/>) : ("Upload Job")
  }
</button>
)


export const JobForm = ({handleChange, formValues, handleImageChange, isSuccess}) => {
  return(
    <div className='space-y-5 py-5 font-figtree'>
      {
        isSuccess && (
          <BadgeSuccess
          message={"Job created. Members will be notified!"}/>
        )
      }

    <p className='text-sm'>Upload job opening for members to apply and kindly add a registration or application link.</p>

    <div className='font-figtree'>
      <input
        type="text"
        name="title"
        required
        value={formValues.title}
        onChange={handleChange}
        className='border-b-2 font-figtree focus:ring-0 focus:border-b-2 focus:border-pry border-pry border-0 w-full'
        placeholder='Job Title'
      />
    </div>
    <div className='font-figtree'>
      <input
        type="text"
        name="org"
        required
        value={formValues.org}
        onChange={handleChange}
        className='border-b-2 font-figtree focus:ring-0 focus:border-b-2 focus:border-pry border-pry border-0 w-full'
        placeholder='Organisation'
      />
    </div>

    <div className='font-figtree'>
      <input
        type="date"
        name="exp_date"
        required
        value={formValues.date}
        onChange={handleChange}
        className='border-b-2 font-figtree focus:ring-0 focus:border-b-2 focus:border-pry border-pry border-0 w-full'
        placeholder='Expiration Date'
      />
      <small className='px-3'>When would this offer be closed, if no expiration leave it blank</small>
    </div>
    <div className='font-figtree'>
      <input
        type='url'
        name="link"
        required
        value={formValues.link}
        onChange={handleChange}
        className='border-b-2 font-figtree focus:ring-0 focus:border-b-2 focus:border-pry border-pry border-0 w-full'
        placeholder='Application Link'
      />
      <small className='px-3'>Email address or application link is required</small>
    </div>
    <div className='font-figtree'>
      <input
        type='text'
        name="contact"
        required
        value={formValues.contact}
        onChange={handleChange}
        className='border-b-2 font-figtree focus:ring-0 focus:border-b-2 focus:border-pry border-pry border-0 w-full'
        placeholder='Email Address'
      />
      <small className='px-3'>Email address or application link is required</small>
    </div>
    <div>
      <textarea
        name="description"
        required
        value={formValues.description}
        onChange={handleChange}
        className='border-b-2 font-figtree focus:ring-0 focus:border-b-2 focus:border-pry border-pry border-0 w-full'
        placeholder='Job description'
        rows={5}
      ></textarea>
    </div>

  </div>
  )
}

export default Index;


