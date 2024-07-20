import React from 'react'
import EventCarousel from '../Carousel/EventCarousel'
import { Fade } from 'react-awesome-reveal'
import { useQuery } from 'react-query';
import { api } from '../../lib/axios';

const EventSection = () => {
  const { data = [], isLoading } = useQuery(["events"], async () => {
    const { data } = await api.get("/event");

    return data;
});

console.log({data})
  return (
    <div id='events' className="flex flex-col space-y-28 items-center py-16 justify-center  md:py-28 bg-white">
        <Fade>
          <p className="text-3xl md:text-5xl font-primary text-center px-10">National Upcoming Events</p>
        </Fade>
        <EventCarousel events={data}/>
    </div>
  )
}

export default EventSection
