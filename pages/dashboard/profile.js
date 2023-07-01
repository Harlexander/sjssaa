import React, { useState } from 'react'
import User from '../../layout/users'
import { CameraIcon } from '@heroicons/react/24/outline';
import DashboardTitle from '../../components/Header/DashboardTitle';
import { useUser } from '../../lib/user';
import { handleUpload } from '../../lib/uploadImg';
import { api } from '../../lib/axios';
import { QueryClient, useMutation } from 'react-query';
import { imgHost } from '../../lib/imgHost';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const Index = () => {
  const { user, token } = useUser();
  const [ppUload, setPpUload] = useState(false);

  async function handleImageChange(event)  {
    const file = event.target.files[0];

    mutate(file);
   }
   console.log(user);

   const updateProfilePicture = async (file)  => {
    const file_path = await handleUpload(file);

    const data = await api.put("/user/update", { img : file_path }, {
      headers : {
        Authorization : `Bearer ${token}`
      }
    });

    return data;
   }

   const { isLoading, data, error, mutate } = useMutation(async (file) => {
    const { data } = await updateProfilePicture(file);

    return data;
   });

   console.log(isLoading, error)

  return (
    <User>
        <main className='md:p-10 p-5 space-y-8'>

          <DashboardTitle
          title={"My Profile"}
          subtitle={`Hello ${user.lastName},`}
          value={"Edit Profile"}/>

          <section className='sm:grid sm:grid-cols-3 gap-4 space-y-4 sm:space-y-0 py-5'>
            <div className='col-1 p-4 rounded w-full'>
              <div className='relative mx-auto w-full'>

                {
                  isLoading && (<FontAwesomeIcon icon={faSpinner} spin className='text-5xl absolute w-full top-[40%] text-pry'/>)
                }
              
              <form className='bg-pry shadow rounded-full w-14 h-14 absolute flex items-center justify-center bottom-0 right-0'>
                <input type="file" accept='.jpg,.png,.jpeg,.svg' onChange={handleImageChange} className='opacity-0 absolute h-full w-full' />
                <CameraIcon className='h-7 text-white'/>
              </form>                

                <img src={user.img ? (imgHost+user.img) : "https://cdn-icons-png.flaticon.com/512/149/149071.png"} className='rounded-full border-4 shadow-xl border-pry object-cover mx-auto h-72 w-72'/>
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
                    <p className='text-right font-semibold'>
                      {user.firstName}
                    </p>
                  </div>
                  <div className='grid grid-cols-2 py-4'>
                    <p>
                      Last Name
                    </p>
                    <p className='text-right font-semibold'>
                      {user.lastName}
                    </p>
                  </div>
                  <div className='grid grid-cols-2 py-4'>
                    <p>
                      Email
                    </p>
                    <p className='text-right font-semibold'>
                      {user.email}
                    </p>
                  </div>
                  <div className='grid grid-cols-2 py-4'>
                    <p>
                      Mobile Number
                    </p>
                    <p className='text-right font-semibold'>
                     {user.mobile}
                    </p>
                  </div>
                  <div className='grid grid-cols-2 py-4'>
                    <p>
                      Set
                    </p>
                    <p className='text-right font-semibold'>
                      {user.set}
                    </p>
                  </div>
                  <div className='grid grid-cols-2 py-4'>
                    <p>
                      Profession
                    </p>
                    <p className='text-right font-semibold'>
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
                    <p className='text-right font-semibold'>
                      {user.city}
                    </p>
                  </div>
                  <div className='grid grid-cols-2 py-4'>
                    <p>
                      State
                    </p>
                    <p className='text-right font-semibold'>
                      {user.state}
                    </p>
                  </div>
                  <div className='grid grid-cols-2 py-4'>
                    <p>
                      Country
                    </p>
                    <p className='text-right font-semibold'>
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


