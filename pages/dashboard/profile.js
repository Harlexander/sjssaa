import React from 'react'
import User from '../../layout/users'
import { CameraIcon } from '@heroicons/react/24/outline';
import DashboardTitle from '../../components/Header/DashboardTitle';
import { useUser } from '../../lib/user';

const Index = () => {
  const { user } = useUser();

  return (
    <User>
        <main className='md:p-10 p-5 space-y-8'>

          <DashboardTitle
          title={"My Profile"}
          subtitle={`Hello ${user.lastName},`}
          value={"Edit Profile"}/>

          <section className='sm:grid sm:grid-cols-3 gap-4 space-y-4 sm:space-y-0 py-5'>
            <div className='col-1 bg-hite p-4 rounded h-full'>
              <div className='relative mx-auto'>
                <button className="inline-block shadow-xl rounded-full absolute bottom-0 right-0 bg-yellow-400 text-white p-4">
                  <CameraIcon className='h-8'/>
                </button>
                <img src='https://cdn-icons-png.flaticon.com/512/149/149071.png' className='rounded-full'/>
              </div>
            </div>
            <div className='col-span-2 space-y-5'>
              <div className='bg-white rounded-lg p-4 space-y-5 shadow-xl'>
                <p className='font-manrope'>Personal Information</p>
              
                <div className='font-figtree divide-y text-sm'>
                  <div className='grid grid-cols-2 py-4'>
                    <p>
                      FirstName
                    </p>
                    <p className='text-right'>
                      {user.firstName}
                    </p>
                  </div>
                  <div className='grid grid-cols-2 py-4'>
                    <p>
                      Last Name
                    </p>
                    <p className='text-right'>
                      {user.lastName}
                    </p>
                  </div>
                  <div className='grid grid-cols-2 py-4'>
                    <p>
                      Email
                    </p>
                    <p className='text-right'>
                      {user.email}
                    </p>
                  </div>
                  <div className='grid grid-cols-2 py-4'>
                    <p>
                      Mobile Number
                    </p>
                    <p className='text-right'>
                     {user.mobile}
                    </p>
                  </div>
                  <div className='grid grid-cols-2 py-4'>
                    <p>
                      Set
                    </p>
                    <p className='text-right'>
                      {user.set}
                    </p>
                  </div>
                  <div className='grid grid-cols-2 py-4'>
                    <p>
                      Profession
                    </p>
                    <p className='text-right'>
                      {user.profession}
                    </p>
                  </div>
                </div>
              </div>
              <div className='bg-white rounded-lg p-4 space-y-5 shadow-xl'>
                <p className='font-manrope'>Residential Information</p>
              
                <div className='font-figtree divide-y text-sm'>
                  <div className='grid grid-cols-2 py-4'>
                    <p>
                      City
                    </p>
                    <p className='text-right'>
                      {user.city}
                    </p>
                  </div>
                  <div className='grid grid-cols-2 py-4'>
                    <p>
                      State
                    </p>
                    <p className='text-right'>
                      {user.state}
                    </p>
                  </div>
                  <div className='grid grid-cols-2 py-4'>
                    <p>
                      Country
                    </p>
                    <p className='text-right'>
                      {user.country}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          </main>
    </User>
  )
}

export default Index;


