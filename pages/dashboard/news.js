import React, { useState } from 'react'
import User from '../../layout/users'
import NewsCard from '../../components/Cards/NewsCard';
import DashboardTitle from '../../components/Header/DashboardTitle';
import MyModal from '../../components/Modal/Modal';
import { useMutation, useQuery } from 'react-query';
import { api } from '../../lib/axios';
import { useUser } from '../../lib/user';
import { PhotoIcon } from '@heroicons/react/24/solid'
import { handleUpload } from '../../lib/uploadImg';
import { ScaleLoader } from 'react-spinners';
import BadgeSuccess from '../../components/Badge/BadgeSuccess';
import Skeleton from 'react-loading-skeleton';


const Index = () => {
  const { token } = useUser();
  const [ isOpen, setIsOpen ] = useState(false);

  const closeModal = () => setIsOpen(!isOpen);

  const [formValues, setFormValues] = useState({
    title: '',
    content: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  function handleImageChange(event)  {
      setFormValues((prevValues) => ({
        ...prevValues,
        'image' : event.target.files[0],
      }));

      console.log(event.target.files[0])
  }

  const handleSubmit = (e) => {
    mutate(formValues); // You can perform any action with the form values here, such as sending a request to an API or updating the state of a parent component.
  };

  const news = useQuery(["news"], async () => {
    const { data } = await api.get("/news", { headers : { Authorization : `Bearer ${token} ` } });

    return data;
  }, {enabled : (token !== null)});

  console.log(news.data)


  const { isLoading, mutate, data, error, isSuccess } = useMutation(async (values) => {
    const img_url = await handleUpload(values.image);
    const { data } = await api.post("/news", { ...values, image : img_url }, { headers : { Authorization : `Bearer ${token}`}})
    return data;
  }, {
    onSuccess : () => {
      setFormValues({});
      news.refetch();
    }
  });

  
  return (
    <User>
      <MyModal
      isOpen={isOpen}
      title={"Post News"}
      body={<NewsForm 
        handleChange={handleChange} 
        formValues={formValues}
        handleImageChange={handleImageChange}
        isSuccess={isSuccess}
      />}
      button={<NewsButton 
        handleSubmit={handleSubmit}
        isLoading={isLoading}
      />}
      closeModal={closeModal}
      />

        <main className='md:p-10 p-5 space-y-8'>

          <DashboardTitle
          title={"News and Updates"}
          subtitle={"Activities and News relating to the association."}
          value={"Post News"}
          onClick={closeModal}
          />

          <section className='grid sm:grid-cols-3 gap-4'>
            {
              news.isSuccess && (
                news.data.map(({title, content, created_at, image, member : {firstName, lastName}, index } ) => (
                  <NewsCard
                  key={index}
                  title={title}
                  content={content}
                  image={image}
                  name={firstName+ ' ' +lastName}
                  created_at={created_at}/>
                ))
              )
            }
            {
              news.isSuccess && 
                news.data.length < 1 && (
                  <div className='bg-white h-[80vh] w-full col-span-3 flex items-center justify-center rounded-xl'>
                    <div className='space-y-2'>
                      <p className='font-figtree text-center text-2xl font-bold'>No News Update</p>
                      <p className='font-figtree mx-auto text-center text-sm sm:w-2/3'>Post news update for members on ongoing situations of the association, school, country and other related topics to the association</p>
                    
                      <button onClick={closeModal} className='flex mx-auto items-center whitespace-nowrap text-sm sm:text-md gap-1.5 sm:gap-3 font-manrope bg-yellow-400 px-4 sm:px-12 py-2 sm:py-2 rounded shadow-xl text-white'>Post News</button>
                    </div>
                  </div>
                )
            }
            {
              news.isLoading && (
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

export const NewsButton = ({handleSubmit, isLoading}) => (
  <button
  onClick={handleSubmit}
  type="button"
  className="inline-flex text-white font-figtree justify-center rounded-md border border-transparent bg-pry px-4 py-2 text-sm font-medium hover:bg-yellow-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-pry focus-visible:ring-offset-2"
>
  {
    isLoading ? (<ScaleLoader className='px-8' color='white' height={16}/>) : ("Upload News")
  }
</button>
)


export const NewsForm = ({handleChange, formValues, handleImageChange, isSuccess}) => {
  return(
    <div className='space-y-5 py-5'>
      {
        isSuccess && (
          <BadgeSuccess
          message={"News Uploaded Successful. Thank You!"}/>
        )
      }

    <div className='font-figtree'>
      <input
        type="text"
        id="title"
        name="title"
        required
        value={formValues.title}
        onChange={handleChange}
        className='border-b-2 font-figtree focus:ring-0 focus:border-b-2 focus:border-pry border-pry border-0 w-full'
        placeholder='Title'
      />
    </div>
    <div>
      <textarea
        id="content"
        name="content"
        required
        value={formValues.content}
        onChange={handleChange}
        className='border-b-2 font-figtree focus:ring-0 focus:border-b-2 focus:border-pry border-pry border-0 w-full'
        placeholder='Content'
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

export default Index;


