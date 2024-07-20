import React, { useState } from 'react'
import Admin from '../../layout/admin'
import DashboardTitle from '../../components/Header/DashboardTitle'
import { SolidButton } from '../../components/Button/Button';

const Settings = () => {
    const [formData, setFormData] = useState({});

    const handleChange = (e) => {
        const { value, name } = e.target;
        
        setFormData((prev) => ({...prev, [name] : value}));
    }

    const update = (e) => {
        e.preventDefault();
        console.log(formData);
    }

  return (
    <Admin>
        <main className='p-5 sm:p-10 space-y-10'>
            <DashboardTitle
                title={"Settings"}
                subtitle={"Welcome Administrator,"}
            />


            <form onSubmit={update} className=' space-y-5'>
                <Input
                    name={"tagline"}
                    label={"Tagline"}
                    handleChange={handleChange}
                    />
                <Input
                    name={"subtext"}
                    label={"Sub Text"}
                    handleChange={handleChange}
                    />
                <Input
                    name={"about"}
                    label={"About SJSSAA"}
                    handleChange={handleChange}
                    select
                    />

                <SolidButton title={"Update"}/>
            </form>
        </main>
    </Admin>
  )
}

export default Settings;


const Input = ({handleChange, name, value, label, select}) => {
    return(
    <div className='font-figtree space-y-2'>
        <label htmlFor="title" className='font-semibold'>{label}</label>
        {
            select ? (
                <textarea
                type="text"
                id="title"
                name={name}
                required
                value={value}
                onChange={handleChange}
                className='border-b-2 font-figtree focus:ring-0 focus:border-b-2 focus:border-pry border-pry border-0 w-full'
                placeholder='Title'
            ></textarea>
            ) : (
                <input
                type="text"
                id="title"
                name={name}
                required
                value={value}
                onChange={handleChange}
                className='border-b-2 font-figtree focus:ring-0 focus:border-b-2 focus:border-pry border-pry border-0 w-full'
                placeholder='Title'
            />
            )
        }
    </div>
    )
}