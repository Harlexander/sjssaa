import React, { useEffect, useState } from 'react'
import { MagnifyingGlassIcon, PrinterIcon } from '@heroicons/react/24/outline'
import MembersTable from '../../components/Tables/MembersTable'
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/20/solid'
import DashboardTitle from '../../components/Header/DashboardTitle'
import { set } from '../../lib/set'
import { useUser } from '../../lib/user'
import { useQuery } from 'react-query'
import { api } from '../../lib/axios'
import User from '../../layout/users'
import { searchByName } from '../../lib/searchFunction'

const Index = () => {
    const { token } = useUser();
    const [ current, setCurrent ] = useState(1);
    const [ searchResult, setSearchResult ] = useState([]);

    const { data = {}, isLoading } = useQuery(["members"], async () => {
        const { data } = await api.get("/members", { headers : { Authorization : `Bearer ${token} ` }});
  
        return data;
    }, {enabled : (token !== null)});

    useEffect(() => {
        current > 1 && refetch();
    }, 
    [current]);

    const search = (e) => {
        if(e.target.value.length > 0 ){
            const result = searchByName(e.target.value, data.data);
            setSearchResult(result);
        }else{
            setSearchResult([]);
        }
    }


  return (
    <User>
        <main className='p-5 sm:p-10 space-y-8'>
          
          <DashboardTitle
            title={"Membership"}
            subtitle={"Manage and verify members."}
            value={"Download"}
            icon={<PrinterIcon className='h-5'/>}
            />

            <section className='bg-white p-2 grid grid-cols-4 gap-2 rounded'>
                <div className='bg-gray-200 col-span-2 flex px-2 gap-2 items-center'>
                    <MagnifyingGlassIcon className='h-4'/>
                    <input onChange={search} className='font-figtree bg-transparent w-full text-sm rounded px-2 py-1' placeholder='Search'/>
                </div>
                <div className='bg-gray-200'>
                    <select className='font-figtree bg-transparent border-0 w-full text-sm rounded px-2 py-1'>
                        <option>Set</option>
                        {
                            set.map((set) => (
                                <option value={set} key={set}>{set}</option>
                            ))
                        }
                    </select>
                </div>
          </section>

          <section>
            {
                searchResult.length > 0 && (
                    <div className='mb-5 space-y-1'>
                        <p className='font-figtree font-semibold'>Search Result</p>
                        <MembersTable data={searchResult || []} isLoading={isLoading}/>
                    </div>
                )
            }

          <MembersTable data={data.data || []} isLoading={isLoading}/>

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
    </User>
  )
}

export default Index