import React, { useState } from 'react'
import Admin from '../../layout/admin'
import { PrinterIcon } from '@heroicons/react/24/outline'
import NewsCard from '../../components/Cards/NewsCard'
import DashboardTitle from '../../components/Header/DashboardTitle'
import { useUser } from '../../lib/user'
import { useMutation, useQuery } from 'react-query'
import { api } from '../../lib/axios'
import { handleUpload } from '../../lib/uploadImg'
import MyModal from '../../components/Modal/Modal'
import { NewsButton, NewsForm } from '../dashboard/news'

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

  const deleteNews = async (id) => {
    const confirm = window.confirm("Are you sure you want to delete this article?");

    if(confirm){
      const { data } = await api.delete(`/news`, {data : { id : id }, headers : { Authorization : `Bearer ${token} `} } );
      news.refetch();
    }
  }

  console.log(news.data);

  return (
    <Admin>
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
        <main className='p-5 sm:p-10 space-y-8'>
            
            <DashboardTitle
            title={"News and Updates"}
            subtitle={"Activities and News relating to the association."}
            value={"Upload News"}
            onClick={closeModal}/>

            <section className='grid sm:grid-cols-3 gap-6 py-4'>
              {
                news.isSuccess && (
                  news.data.map(({id, title, content, created_at, image, member : {firstName, lastName} }, index) => (
                    <NewsCard
                    key={index}
                    title={title}
                    content={content}
                    image={image}
                    name={firstName+ ' ' +lastName}
                    admin={true}
                    created_at={created_at}
                    deleteNews={() => deleteNews(id)}/>
                  ))
                )
              }
          </section>
        </main>
    </Admin>
  )
}

export default Index