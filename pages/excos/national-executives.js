import React from 'react'
import ExecutiveContainer from '../../components/Excos/ExecutiveContainer'
import PageHeader from '../../components/Header/PageHeader'
import UnderConstruction from '../../components/Header/UnderConstruction'
import IndexNavbar from '../../components/Navbar/Navbar'

const Index = () => {
  return (
    <div className='bg-yellow-200 min-h-screen'>
        <IndexNavbar/>
        <PageHeader
          title={"National Executives"}/>
         
         
         <div className='w-full md:px-32 px-5 space-y-12 py-20'>
            <ExecutiveContainer
            name={'Adeshina Adegboyega'}
            img="../president.png"
            bio={"I am interested in rendering service for our great school first or with the first; I believe my experience coupled with my interpersonal abilities would make me a strong fit for this position."}
            mail={"President@sjssaa.com"}
            position="President"/>
            
            <div className='h-[0.1px] md:h-[0.5px] bg-yellow-900 bg-opacity-20'/>

            <ExecutiveContainer
            name={'Lanre Are'}
            img="../vp-nigeria.png"
            bio={"A team work aim to design, build and develop the association for the progress, fairness, justice and benefits of all SJSSA members."}
            mail={"vicepresident.nigeria@sjssaa.com"}
            position="Vice President Nigeria"/>
            
            <div className='h-[0.1px] md:h-[0.5px] bg-yellow-900 bg-opacity-20'/>

            <ExecutiveContainer
            name={'Jacob Babatunde Ajayi'}
            img="../vp.png"
            bio={"I am an outstanding team player and possess good communication skills. I am hardworking, very well organized, and self-confident."}
            mail={"vicepresident.europe@sjssaa.com"}
            position="Vice President Europe and Asia"/>
            <div className='h-[0.1px] md:h-[0.5px] bg-yellow-900 bg-opacity-20'/>

            <ExecutiveContainer
            name={'Engr. Opeoluwa Orekoya'}
            img="../vice president america.png"
            bio={"Having played a progressively more involved roll in my local chapter from inception till date, I am confident in taking the next step to expand my leadership skills and involvement with our great Association."}
            mail={"vicepresident.america@sjssaa.com"}
            position="Vice President America"/>
            
            <div className='h-[0.1px] md:h-[0.5px] bg-yellow-900 bg-opacity-20'/>

            <ExecutiveContainer
            name={'Israel Olusegun Alika'}
            img="../general secretary.png"
            bio={"My passion is driven by the love for service, present experience as the sitting vice president of 87 sets, and my perennial experience and commitment towards the formation of the old boys association thus far."}
            mail={"generalsecretary@sjssaa.com"}
            position="General Secretary"/>
            
            <div className='h-[0.1px] md:h-[0.5px] bg-yellow-900 bg-opacity-20'/>

            <ExecutiveContainer
            name={'Dr. Emmanuel Ehiwe'}
            img="../asst.sec.europe & asia.png"
            bio={"Passion to serve SJSSAA"}
            mail={"asst.sec.europe.asia@sjssaa.com"}
            position="Asst. Sect Europe and asia"/>
            <div className='h-[0.1px] md:h-[0.5px] bg-yellow-900 bg-opacity-20'/>


            <ExecutiveContainer
            name={'Akeem Ajayi'}
            img="../financial secretary.png"
            bio={"I am an Accountant by training and I have also worked in the banking sector for 19 years. I am honest, hardworking and trustworthy and can be relied upon to do what is expected of me every-time"}
            mail={"financialsecretary@sjssaa.com"}
            position="Financial Secretary"/>
            <div className='h-[0.1px] md:h-[0.5px] bg-yellow-900 bg-opacity-20'/>

            <ExecutiveContainer
            name={'Edward Dunkwu'}
            img="../treasurer.png"
            bio={"Passion to serve SJSSAA"}
            mail={"treasurer@sjssaa.com"}
            position="Treasurer"/>
            <div className='h-[0.1px] md:h-[0.5px] bg-yellow-900 bg-opacity-20'/>

            <ExecutiveContainer
            name={'Nwanze Victor'}
            img="../social secretary.png"
            bio={"Passion to serve SJSSAA"}
            mail={"socialsecretary@sjssaa.com"}
            position="Social Secretary"/>
            <div className='h-[0.1px] md:h-[0.5px] bg-yellow-900 bg-opacity-20'/>

            <ExecutiveContainer
            name={'Henry Nkatta'}
            img="../public relations officer.png"
            bio={"Passion to serve SJSSAA"}
            mail={"pro@sjssaa.com"}
            position="Public Relations Officer"/>
            
            <div className='h-[0.1px] md:h-[0.5px] bg-yellow-900 bg-opacity-20'/>

            <ExecutiveContainer
            name={'Adebowale S. Onibanjo'}
            img="../asst.financial secretary.png"
            bio={"Passion to serve SJSSAA"}
            mail={"asst.fin.sec@sjssaa.com"}
            position="Asst. Fin. Secretary"/>
            
            <div className='h-[0.1px] md:h-[0.5px] bg-yellow-900 bg-opacity-20'/>

            <ExecutiveContainer
            name={'Fatiu Bello Olaitan'}
            img="../assistant pro.png"
            bio={"With dedication and commitment, I will forever continue to be a viable and ready-to-serve member of the association…"}
            mail={"asst.pro@sjssaa.com"}
            position="Assistant PRO"/>
            
            <div className='h-[0.1px] md:h-[0.5px] bg-yellow-900 bg-opacity-20'/>

            <ExecutiveContainer
            name={'Elizabeth Inyang'}
            img="../asst.social secretary.png"
            bio={"Passion to serve SJSSAA"}
            mail={"asst.social.secretary@sjssaa.com"}
            position="Asst. Social Secretary"/>
            
            <div className='h-[0.1px] md:h-[0.5px] bg-yellow-900 bg-opacity-20'/>

            <ExecutiveContainer
            name={'Aboyewa Okonedo'}
            img="../assist.general secretary.png"
            bio={"Passion to serve SJSSAA"}
            mail={"asst.gen.secretary@sjssaa.com"}
            position="Asst. General Secretary"/>
            
        </div>

    </div>
  )
}

export default Index