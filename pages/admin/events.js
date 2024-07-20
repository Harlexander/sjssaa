import React, { useEffect, useState } from 'react'
import Admin from '../../layout/admin'
import { CalendarDaysIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline'
import DashboardTitle from '../../components/Header/DashboardTitle'
import MyModal from '../../components/Modal/Modal'
import { useUser } from '../../lib/user'
import { useMutation, useQuery } from 'react-query'
import { handleUpload } from '../../lib/uploadImg'
import { api } from '../../lib/axios'
import { handleChange, handleImageChange } from '../../lib/handleInput'
import { PhotoIcon } from '@heroicons/react/24/solid'
import { set } from '../../lib/set'
import { ScaleLoader } from 'react-spinners'
import BadgeSuccess from '../../components/Badge/BadgeSuccess';
import { imgHost } from '../../lib/imgHost'
import moment from 'moment'
import { AdminEventsTable } from '../../components/Tables/EventsTable'

const Index = () => {
    const { token } = useUser();
    const [ isOpen, setIsOpen ] = useState(false);

    const closeModal = () => setIsOpen(!isOpen);
  
    const [formValues, setFormValues] = useState({
      title: '',
    });
  
    const { isLoading, mutate, data, error, isSuccess } = useMutation(async (values) => {
        const img_url = await handleUpload(values.image);
        const { data } = await api.post("/event", { ...values, image : img_url }, { headers : { Authorization : `Bearer ${token}`}})
        return data;
      }, {
        onSuccess : () => {
          setFormValues({});
          events.refetch();
        }
      });
    
    const events = useQuery(["events"], async () => {
        const { data } = await api.get("/event/admin", { headers : { Authorization : `Bearer ${token} ` } });
    
        return data;
    }, {enabled : (token !== null)});

    const handleSubmit = () => {
        mutate(formValues);
    }


      

  return (
    <Admin>
      <MyModal
        isOpen={isOpen}
        title={"Create Event"}
        body={<Form 
            handleChange={(e) =>  handleChange(e, setFormValues)} 
            formValues={formValues}
            handleImageChange={(e) => handleImageChange(e, setFormValues)}
            isSuccess={isSuccess}
        />}
        button={<Button 
            handleSubmit={handleSubmit}
            isLoading={isLoading}
        />}
        closeModal={closeModal}
        />

        <main className='p-5 sm:p-10 space-y-8'>
            <DashboardTitle
            title={"Events"}
            value={"Create Event"}
            onClick={closeModal}
            subtitle={"Manage, Create and collect data for events."}/>


            <AdminEventsTable data={events.data}/>
        </main>
        
    </Admin>
  )
}

export default Index

const Button = ({handleSubmit, isLoading}) => (
    <button
    onClick={handleSubmit}
    type="button"
    disabled={isLoading}
    className="inline-flex text-white font-figtree justify-center rounded-md border border-transparent bg-pry px-4 py-2 text-sm font-medium hover:bg-yellow-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-pry focus-visible:ring-offset-2"
  >
    {
      isLoading ? (<ScaleLoader className='px-8' color='white' height={16}/>) : ("Create Event")
    }
  </button>
  )

  
const Form = ({handleChange, formValues, handleImageChange, isSuccess}) => {
    return(
      <div className='space-y-5 py-5 font-figtree'>
        {
          isSuccess && (
            <BadgeSuccess
            message={"Event created. Members can now register!"}/>
          )
        }

      <p className='text-sm'>Events created will enable members register for this event.</p>

      <div className='font-figtree'>
        <input
          type="text"
          name="title"
          required
          value={formValues.title}
          onChange={handleChange}
          className='border-b-2 font-figtree focus:ring-0 focus:border-b-2 focus:border-pry border-pry border-0 w-full'
          placeholder='Event Name'
        />
      </div>
      <div className='font-figtree'>
        <select
          type="text"
          name="set"
          required
          value={formValues.set}
          onChange={handleChange}
          className='border-b-2 font-figtree focus:ring-0 focus:border-b-2 focus:border-pry border-pry border-0 w-full'
          placeholder='Event Name'
        >
            <option>Select Set</option>
            <option value={'all set'}>All Set</option>
            { set.map(item => (
                <option key={item} value={item}>{item}</option>
            )) }
        </select>
      </div>
      <div className='font-figtree'>
        <select
          type="text"
          name="type"
          required
          value={formValues.type}
          onChange={handleChange}
          className='border-b-2 font-figtree focus:ring-0 focus:border-b-2 focus:border-pry border-pry border-0 w-full'
          placeholder='Event Type'
        >
            <option>Type</option>
            <option value={'free'}>Free</option>
            <option value={'paid'}>Paid</option>
        </select>
      </div>
      {
        formValues.type === "paid" && (
            <div className='font-figtree'>
                <input
                type="text"
                name="reg_fee"
                required
                value={formValues.reg_fee}
                onChange={handleChange}
                className='border-b-2 font-figtree focus:ring-0 focus:border-b-2 focus:border-pry border-pry border-0 w-full'
                placeholder='Amount'
                />
            </div>            
        )
      }

      <div className='font-figtree'>
        <input
          type="date"
          name="date"
          required
          value={formValues.date}
          onChange={handleChange}
          className='border-b-2 font-figtree focus:ring-0 focus:border-b-2 focus:border-pry border-pry border-0 w-full'
          placeholder='Event Name'
        />
      </div>
      <div>
        <textarea
          name="description"
          required
          value={formValues.description}
          onChange={handleChange}
          className='border-b-2 font-figtree focus:ring-0 focus:border-b-2 focus:border-pry border-pry border-0 w-full'
          placeholder='Event descriptionription'
          rows={5}
        ></textarea>
      </div>
  
      <div className='space-y-3 text-center border items-center border-pry rounded-xl flex flex-col justify-center p-5'>
  
        <PhotoIcon className='h-10 text-pry'/>
  
        <div>
          <p>Upload Image</p>
        </div>
  
        {
          formValues.image && (
            <div className='flex flex-wrap gap-1'>
                  <img src={URL.createObjectURL(formValues.image)} alt="img" className='w-full object-cover' />
            </div>                  
          )
        }
  
  
        <div className='relative'>
          <input required type="file" name="image" onChange={handleImageChange} className='h-full w-full opacity-0 absolute' />
          <button className='bg-pry py-2 font-figtree px-6 rounded-xl text-white'>Select Image</button>
        </div>
        </div>
    </div>
    )
  }