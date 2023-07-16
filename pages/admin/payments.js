import React, { useEffect, useState } from 'react'
import Admin from '../../layout/admin'
import { ArrowLeftIcon, ArrowRightIcon, PrinterIcon } from '@heroicons/react/24/outline'
import { AdminPaymentsTable } from '../../components/Tables/PaymentsTable'
import DashboardTitle from '../../components/Header/DashboardTitle'
import { set } from '../../lib/set'
import { useQuery } from 'react-query'
import { useUser } from '../../lib/user'
import { api } from '../../lib/axios'
import { filterByStatus, searchByName } from '../../lib/searchFunction'

const Index = () => {
    const { token } = useUser();

    const [ current, setCurrent ] = useState(1);

    const [ filter, setFilter ] = useState({
        status : null,
        search : []
    });

    const { data = {} , isLoading, error, refetch, isSuccess} = useQuery(['transactions'], async () => {
        const { data } = await api.get(`/transactions/admin` , { headers : { Authorization : `Bearer ${token}`}, params : { page : current, status : filter.status }})
      
        return data;
    }, { enabled : (token !== null) });

    useEffect(() => {
      (token !== null ) && refetch();
    }, 
    [current, filter]);

    const handleChange = async (e) => {
        setCurrent(1);
        setFilter(prev => ({ ...prev, [e.target.name] : e.target.value}));
    }

    const handleSearch = (e) => {
     const result = searchByName(e.target.value, data.data.map((item) => ({...item, firstName : item.member.firstName, lastName : item.member.lastName})));

     setFilter(prev => ({ ...prev, search : result}));
    }


    console.log(filter);
  return (
    <Admin>
        <main className='p-5 sm:p-10 space-y-8'>

            <DashboardTitle
            title={"Payments"}
            subtitle={"Payment records and subscriptions."}
            value={"Create Ticket"}/>

            <section className='bg-white shadow-lg p-2 grid grid-cols-3 gap-2 rounded'>
                <div className='bg-gray-200 col-span-2'>
                    <input onChange={handleSearch} placeholder='Search By Name' name='search' className='font-figtree bg-transparent border-0 w-full text-sm rounded px-2 py-1'/>
                </div>
                <div className='bg-gray-200'>
                    <select name='status' onChange={handleChange} className='font-figtree bg-transparent border-0 w-full text-sm rounded px-2 py-1'>
                        <option value={""}>Status</option>
                        <option value={"success"}>Success</option>
                        <option value={"pending"}>Pending</option>
                        <option value={"failed"}>Failed</option>
                    </select>
                </div>
          </section>

            {
                filter.search.length > 0 && (
                    <section className='space-y-1'>
                        <p className='font-figtree'>Search Result</p>
                        <AdminPaymentsTable data={filter.search || []} loading={isLoading}/>
                    </section>                
                )
            }


            <section>
                <AdminPaymentsTable data={data.data || []} loading={isLoading}/>

                <div className='font-figtree flex justify-between py-5'>
                    <p className='bg-white px-4 py-2 rounded-lg'>Page {data.current_page} of {data.last_page}</p>

                    <div className='space-x-2'>
                        <button  onClick={() => current > 1 && setCurrent(current-1)} className='px-3 py-2 bg-white shadow-xl rounded-lg'>
                            <ArrowLeftIcon className='h-4'/>
                        </button>
                        <button onClick={() => current < data.last_page && setCurrent(current+1)} className='px-3 py-2 bg-white shadow-xl rounded-lg'>
                            <ArrowRightIcon className='h-4'/>
                        </button>
                    </div>
                </div>
            </section>
        </main>
    </Admin>
  )
}

export default Index