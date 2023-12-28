import { faUserTie } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { SolidButton } from '../Button/Button'
import ExecutiveContainer from './ExecutiveContainer'

const executiveData = [
  {
    name: 'Kolawole Banire',
    img: '',
    bio: 'I am interested in rendering service for our great school first or with the first; I believe my experience coupled with my interpersonal abilities would make me a strong fit for this position.',
    mail: 'kolawole.banire@sjssaa.com',
    position: 'President',
  },
  {
    name: 'Israel Olusegun Alika',
    img: '../general secretary.png',
    bio: 'A team work aim to design, build and develop the association for the progress, fairness, justice and benefits of all SJSSA members.',
    mail: 'lanreare@sjssaa.com',
    position: 'Vice President Nigeria',
  },
  {
    name: 'Jacob Babatunde Ajayi',
    img: '../vp.png',
    bio: 'I am an outstanding team player and possess good communication skills. I am hardworking, very well organized, and self-confident.',
    mail: 'jb.ajayi@sjssaa.com',
    position: 'Vice President Europe and Asia',
  },
];

const Executive = () => {
  return (
    <div className="relative bg-yellow-50 px-5 py-20">
            <div className="md:text-left text-center py-20 font-primary">
                <p className="flex-1 h-full text-center text-3xl leading-10 text-3xl md:text-5xl">National Executives</p>
            </div>

        <div className='w-full md:px-32 space-y-12'>
            {
              executiveData.map((executive, index) => (
                <>
                <ExecutiveContainer 
                    {...executive}
                    img={executive.img ? executive.img : '/user.webp'}
                   />

                  <div className='h-[0.1px] md:h-[0.5px] bg-yellow-900 bg-opacity-20'/>
                </>
              ))
            }            
        </div>

        <div className='flex justify-center py-10'>
            <SolidButton
            href='/excos/national-executives'
            title={"Meet All Excos"}
            additionalClass="px-6 md:text-2xl shadow-xl text-black font-primary"/>
        </div>
    </div>
  )
}

export default Executive
