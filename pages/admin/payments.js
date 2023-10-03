import React, { useEffect, useState } from 'react'
import Admin from '../../layout/admin'
import { ArrowLeftIcon, ArrowRightIcon, PrinterIcon } from '@heroicons/react/24/outline'
import { AdminPaymentsTable } from '../../components/Tables/PaymentsTable'
import DashboardTitle from '../../components/Header/DashboardTitle'
import { set } from '../../lib/set'
import { useMutation, useQuery } from 'react-query'
import { useUser } from '../../lib/user'
import { api } from '../../lib/axios'
import { filterByStatus, searchByName } from '../../lib/searchFunction'
import MyModal from '../../components/Modal/Modal'
import BadgeSuccess from '../../components/Badge/BadgeSuccess'
import {ScaleLoader} from 'react-spinners'
import ActivePaymentCard from '../../components/Cards/ActivePaymentCard'

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

    const [ isOpen, setIsOpen ] = useState(false);

    const closeModal = () => setIsOpen(!isOpen);

    const [formValues, setFormValues] = useState({
      amount: '',
      title: '',
      description : '',
      set : 'all set'
    });
  
    const handleTextChange = (e) => {
      const { name, value } = e.target;
      setFormValues((prevValues) => ({
        ...prevValues,
        [name]: value,
      }));
    };

    const activePayments = useQuery(['active-payments'], async () => {
        const { data } = await api.get("/active-payment" , { headers : { Authorization : `Bearer ${token}`}, params : { admin : true }})
      
        return data;
      }, { enabled : (token !== null) });

      const createTicket = useMutation(async (values) => {
        const { data } = await api.post("/create-ticket", values, { headers : { Authorization : `Bearer ${token}`}})
        return data;
      }, {
        onSuccess : () => {
          activePayments.refetch();
        }
      });

    const handleSubmit = (e) => {
       createTicket.mutate(formValues); // You can perform any action with the form values here, such as sending a request to an API or updating the state of a parent component.
    };

      console.log(activePayments.error)

  return (
    <Admin>
        <MyModal
              isOpen={isOpen}
              title={"Create Payment Ticket"}
              body={<TicketForm 
                handleChange={handleTextChange} 
                formValues={formValues}
                isSuccess={createTicket.isSuccess}
              />}
              button={<TicketButton 
                handleSubmit={handleSubmit}
                isLoading={createTicket.isLoading}
              />}
              closeModal={closeModal}
      />
        <main className='p-5 sm:p-10 space-y-8'>

            <DashboardTitle
            title={"Payments"}
            subtitle={"Payment records and subscriptions."}
            value={"Create Ticket"}
            onClick={closeModal}/>


            <ActivePaymentCard admin={true} data={activePayments.data || []} loading={activePayments.isLoading}/>

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

export const TicketButton = ({handleSubmit, isLoading}) => (
    <button
    onClick={handleSubmit}
    type="button"
    className="inline-flex text-white font-figtree justify-center rounded-md border border-transparent bg-pry px-4 py-2 text-sm font-medium hover:bg-yellow-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-pry focus-visible:ring-offset-2"
  >
    {
      isLoading ? (<ScaleLoader className='px-8' color='white' height={16}/>) : ("Create Ticket")
    }
  </button>
  )
  
  
  export const TicketForm = ({handleChange, formValues, handleImageChange, isSuccess}) => {
    return(
      <div className='space-y-5 py-5'>
        {
          isSuccess && (
            <BadgeSuccess
            message={"Payment Ticket Created Successful. Thank You!"}/>
          )
        }
  
      <div className='font-figtree'>
        <input
          type="text"
          name="title"
          required
          value={formValues.title}
          onChange={handleChange}
          className='border-b-2 font-figtree focus:ring-0 focus:border-b-2 focus:border-pry border-pry border-0 w-full'
          placeholder='Title'
        />
      </div>
      <div className='font-figtree'>
        <input
          type="text"
          name="amount"
          required
          value={formValues.amount}
          onChange={handleChange}
          className='border-b-2 font-figtree focus:ring-0 focus:border-b-2 focus:border-pry border-pry border-0 w-full'
          placeholder='Amount'
        />
      </div>
      <div className='font-figtree'>
        <input
          type="date"
          name="close_date"
          required
          value={formValues.close_date}
          onChange={handleChange}
          className='border-b-2 font-figtree focus:ring-0 focus:border-b-2 focus:border-pry border-pry border-0 w-full'
          placeholder='Close Date'
        />
      </div>
      <div className='font-figtree'>
        <select
          name="set"
          required
          value={formValues.set}
          onChange={handleChange}
          className='border-b-2 font-figtree focus:ring-0 focus:border-b-2 focus:border-pry border-pry border-0 w-full'
          placeholder='Set'
        >
            <option value={"all set"}>All Set</option>
        {
            set.map((item) => (
                <option key={item} value={item}>{item}</option>
            ))
        }
        </select>
      </div>
      <div>
        <textarea
          id="content"
          name="description"
          required
          value={formValues.description}
          onChange={handleChange}
          className='border-b-2 font-figtree focus:ring-0 focus:border-b-2 focus:border-pry border-pry border-0 w-full'
          placeholder='Content'
          rows={5}
        ></textarea>
      </div>
    </div>
    )
  }
  
export default Index