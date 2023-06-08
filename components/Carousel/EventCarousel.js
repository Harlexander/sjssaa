import Carousel from 'better-react-carousel'
import React from 'react'
import { OutlineButton, SolidButton } from '../Button/Button'
import { useCountdown } from '../countdown/countdown'

const EventCarousel = () => {
    const { days, minutes, hours, seconds } = useCountdown("Dec 18, 2022")
  return (
    <div className="w-full md:px-28">
    <Carousel cols={1} rows={1} loop autoplay={true} autoPlay={100}>
        <Carousel.Item>
        <div
        className='md:grid grid-cols-5 gap-10 h- px-4'>
            <div className="col-span-2 md:h-full md:w-full relative">
                    <div className='h-full md:flex items-center'>
                        <img className="shadow-lg"  src="event1.png"/>  
                    </div>
                
            </div>

            <div className='col-span-3 space-y-5 pt-10 md:py-10 md:px-10'>
                <p className='font-primary text-4xl'>
                    Annual General Conference
                </p>

                <p className='font-nunito'>
                This year&apos;s AGM is very important because it is the very first time that members of our newly registered association, drawn from about 15 active Sets, would be coming together physically to fraternize and rub minds on ways of moving our great alumni forward. 
                <br/><br/>
                Aside from the formal meeting, the December event promises to create a conducive atmosphere for all members to dine and unwind while cementing the camaraderie bond among members. In addition, at the AGM, we shall examine as a body the various projects the National body intends to execute next year, 2023, and to get the buy-in of all.
                </p>

                <div className="flex justify-between">
                    <div>
                        <div className='bg-yellow-300 p-3 shadow-sm'>
                            <p className='font-primary text-2xl md:text-3xl'>{days}</p>
                        </div>
                        <p className='font-primary text-md md:text-xl'>Days</p>
                    </div>
                    <div>
                        <div className='bg-yellow-300 p-3 shadow-sm'>
                            <p className='font-primary text-2xl md:text-3xl'>{hours}</p>
                        </div>
                        <p className='font-primary text-md md:text-xl'>Hours</p>
                    </div>
                    <div>
                        <div className='bg-yellow-300 p-3 shadow-sm'>
                            <p className='font-primary text-2xl md:text-3xl'>{minutes}</p>
                        </div>
                        <p className='font-primary text-md md:text-xl'>Mins</p>
                    </div>
                    <div>
                        <div className='bg-yellow-300 p-3 shadow-sm'>
                            <p className='font-primary text-2xl md:text-3xl'>{seconds}</p>
                        </div>
                        <p className='font-primary text-md md:text-xl'>Secs</p>
                    </div>
                </div>

                <p className='font-primary text-2xl' >18th December, 2022</p>

                <div className='flex gap-3'>
                    <SolidButton
                    title={"Register"}
                    additionalClass={"font-primary w-full py-2"}
                    />
                    <OutlineButton
                    title={"Join Event"}
                    additionalClass={"font-primary w-full py-2"}
                    />
                </div>
            </div>
        </div>
        </Carousel.Item>
        <Carousel.Item>
        <div
        className='md:grid grid-cols-5 gap-10 h- px-4'>
            <div className="col-span-2 md:h-full md:w-full relative">
                    <div className='h-full md:flex items-center'>
                        <img className="shadow-lg"  src="event1.png"/>  
                    </div>
                
            </div>

            <div className='col-span-3 space-y-5 pt-10 md:py-10 md:px-10'>
                <p className='font-primary text-4xl'>
                    Annual General Conference
                </p>

                <p className='font-nunito'>
                This year&apos;s AGM is very important because it is the very first time that members of our newly registered association, drawn from about 15 active Sets, would be coming together physically to fraternize and rub minds on ways of moving our great alumni forward. 
                <br/><br/>
                Aside from the formal meeting, the December event promises to create a conducive atmosphere for all members to dine and unwind while cementing the camaraderie bond among members. In addition, at the AGM, we shall examine as a body the various projects the National body intends to execute next year, 2023, and to get the buy-in of all.
                
                </p>

                <div className="flex justify-between">
                    <div>
                        <div className='bg-yellow-300 p-3 shadow-sm'>
                            <p className='font-primary text-2xl md:text-3xl'>{days}</p>
                        </div>
                        <p className='font-primary text-md md:text-xl'>Days</p>
                    </div>
                    <div>
                        <div className='bg-yellow-300 p-3 shadow-sm'>
                            <p className='font-primary text-2xl md:text-3xl'>{hours}</p>
                        </div>
                        <p className='font-primary text-md md:text-xl'>Hours</p>
                    </div>
                    <div>
                        <div className='bg-yellow-300 p-3 shadow-sm'>
                            <p className='font-primary text-2xl md:text-3xl'>{minutes}</p>
                        </div>
                        <p className='font-primary text-md md:text-xl'>Mins</p>
                    </div>
                    <div>
                        <div className='bg-yellow-300 p-3 shadow-sm'>
                            <p className='font-primary text-2xl md:text-3xl'>{seconds}</p>
                        </div>
                        <p className='font-primary text-md md:text-xl'>Secs</p>
                    </div>
                </div>

                <p className='font-primary text-2xl' >18th December, 2022</p>

                <div className='flex gap-3'>
                    <SolidButton
                    title={"Register"}
                    additionalClass={"font-primary w-full py-2"}
                    />
                    <OutlineButton
                    title={"Join Event"}
                    additionalClass={"font-primary w-full py-2"}
                    />
                </div>
            </div>
        </div>
        </Carousel.Item>
     </Carousel>
</div>
  )
}

export default EventCarousel
