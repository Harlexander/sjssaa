import React from 'react'
import { SolidButton } from '../Button/Button'
import { Slide } from 'react-awesome-reveal'
import Link from 'next/link'

const AboutSection = () => {
  return (
    <div className="space-y-9 md:px-60 pt-20 px-5 pb-24 bg-yellow-100">
      <Slide bottom>
        <p className="text-4xl text-center font-primary">About  Us</p>
        <p className="md:text-xl font-montserrat leading-relaxed text-center">
        <b>St. Joseph Secondary School Alumni Association (SJSSAA) of Surulere</b> is a non-profit alumni association aiming to promote and facilitate social interaction and well-being of its members, facilitate and maintain interest in the well-being of St. Joseph Secondary School of Surulere, Lagos (referred to here as School), and advance goodwill in the community. SJSSAA values respect, integrity, and commitment to professionalism among its members, as well as dedication to continuous success and transparency in the affairs of the Association.  
        <br/><br/>
        Membership of the Association is open to ladies and gentlemen who were former students of the School, completed at least three years attending classes at the School, are interested in the affairs of the Association, support the objectives of the Association, and pay the annual Association dues. Honorary membership is open to any person who has shown necessary interest in the objectives of the Association and the School and is deemed to be of impeccable moral character. Such membership will be based on the recommendation of the National Executive Committee (NEC) and confirmed by a simple majority vote of the Alumni General Meeting. 
        <br/><br/>
        We currently have fifteen registered Sets, which are an integral part of the Association. Each Set comprises SJSSAA financial members who have either entered and/or left the School in a specific year. For more information about each Set of the Association, <Link href="sets">click here.</Link> 
        </p>

        <div className='flex justify-center gap-1 md:gap-5'>
        <Link download="SJSSAA Constitution" href={"./constitution.pdf" }>
          <SolidButton title={"Constitution"}  additionalClass={` font-primary md:text-2xl px-8 py-1`}/>
        </Link>
        <Link download="strategic-plan" href={"./strategic-plan.pdf" }>
            <SolidButton title={"Strategic Plan"}  additionalClass={` font-primary md:text-2xl px-8 py-1`}/>
        </Link>
        </div>        
      </Slide>

    </div>
  )
}

export default AboutSection
