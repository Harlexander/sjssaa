import Carousel from 'better-react-carousel'
import React from 'react'
import { OutlineButton, SolidButton } from '../Button/Button'
import { useCountdown } from '../countdown/countdown'
import moment from 'moment'
import { imgHost } from '../../lib/imgHost'

const EventCarousel = ({events = []}) => {
    // const { days, minutes, hours, seconds } = useCountdown(moment(event.date).format("MMM Do, YYYY"))    
    return (
    <div className="w-full md:px-28">
    <Carousel cols={1} rows={1} loop autoplay={true} autoPlay={100}>
        {
            events.map((event, index) => {
                const { days, minutes, hours, seconds } = useCountdown(moment(event.date).format("MMM D, YYYY"));

                console.log(moment(event.date).format("MMM D, YYYY"))
            return(
                <Carousel.Item>
                <div
                className='md:grid grid-cols-5 gap-10 h- px-4'>
                    <div className="col-span-2 md:h-full md:w-full relative">
                            <div className='h-full md:flex items-center'>
                                <img className="shadow-lg"  src={imgHost+event.image}/>  
                            </div>
                        
                    </div>
        
                    <div className='col-span-3 space-y-5 pt-10 md:py-10 md:px-10'>
                        <p className='font-primary text-4xl'>
                            {event.title}
                        </p>
        
                        <p className='font-nunito'>
                        {event.description}
                        </p>
        
                        <div className="flex justify-between">
                            <div>
                                <div className='bg-[#800000] text-white p-3 shadow-sm'>
                                    <p className='font-primary text-2xl md:text-3xl'>{days}</p>
                                </div>
                                <p className='font-primary text-md md:text-xl'>Days</p>
                            </div>
                            <div>
                                <div className='bg-[#800000] text-white p-3 shadow-sm'>
                                    <p className='font-primary text-2xl md:text-3xl'>{hours}</p>
                                </div>
                                <p className='font-primary text-md md:text-xl'>Hours</p>
                            </div>
                            <div>
                                <div className='bg-[#800000] text-white p-3 shadow-sm'>
                                    <p className='font-primary text-2xl md:text-3xl'>{minutes}</p>
                                </div>
                                <p className='font-primary text-md md:text-xl'>Mins</p>
                            </div>
                            <div>
                                <div className='bg-[#800000] text-white p-3 shadow-sm'>
                                    <p className='font-primary text-2xl md:text-3xl'>{seconds}</p>
                                </div>
                                <p className='font-primary text-md md:text-xl'>Secs</p>
                            </div>
                        </div>
        
                        <p className='font-primary text-2xl' >{moment(event.date).format("dd, Do MMM YYYY")}</p>
        
                        <div className='flex gap-3'>
                            <SolidButton
                            title={"Register"}
                            additionalClass={"font-primary w-full py-2 "}
                            />
                            <OutlineButton
                            title={"Join Event"}
                            additionalClass={"font-primary w-full py-2"}
                            />
                        </div>
                    </div>
                </div>
                </Carousel.Item>
            )})
        }
     </Carousel>
</div>
  )
}

export default EventCarousel
