import { Navbar, Button, Dropdown } from 'flowbite-react'
import Link from 'next/link'
import React from 'react'
import {OutlineButton} from '../Button/Button'

const IndexNavbar = () => {
    const routes = [
        {
            title : "HOME",
            link  : "/"
        },
        {
            title : "ABOUT US",
            sublinks : [{ 
                title : "About SJSSAA",
                link : "/about"
            },
            { 
                title : "Our Mission and Vision",
                link : "/mission-vision"
            },
            {
                title : "Strategic Plan",
                link : "./strategic-plan.pdf"
            }]
        },
        {
            title : "GALLERY",
            link  : "/gallery"
        },
        {
            title : "EVENTS",
            link : "/#events"
            // sublinks : [{ 
            //     title : "2022 Annual General Conference",
            //     link : "/"
            // },
            // {
            //     title : "Upcoming Set Events",
            //     link : "/"
            // }]
        },
        {
            title : "EXCOS",
            sublinks : [
            { 
                title : "National Executives",
                link : "/excos/national-executives"
            },
            {
                title : "Board of Trustees",
                link : "/excos/board-of-trustees"
            },
            {
                title : "Set Representatives",
                link : "/excos/set-representative"
            },
            {
                title : "Director of Membership",
                link : "/excos/web-master"
            },
        ]
        },
        {
            title : "MEMBERS",
            link  : "/members"
        },
        {
            title : "CONTACT",
            link  : "/contact"
        },
        {
            title : "EMAIL",
            link  : "https://premium262.web-hosting.com:2096/"
        },
    ]
  return (
    <Navbar
    fluid={true}
    
    style={{ zIndex : "1", width : "100%", background : "white"}}
    rounded={true}
    >
        <Navbar.Brand href="/">
            <img
            src="/logo.jfif"
            className="mr-3 h-16 sm:h-13"
            alt="Flowbite Logo"
            />
            <img
            src="/logo-1.jfif"
            className="mr-3 h-16 sm:h-13"
            alt="Flowbite Logo"
            />
    </Navbar.Brand>
    <div className="flex md:order-2 my-3">
        <OutlineButton 
        href='/login'
        title={"Sign In"}/>
        <Navbar.Toggle />
    </div>
    <Navbar.Collapse>
        {
            routes.map((item, index) => {
            if(item.title === "EXCOS" || item.title === "ABOUT US"){
                    return(
                        <NavDropdown 
                        key={index}
                            label={
                            <Navbar.Link href={item.link}  style={{ fontFamily : "Montserrat"}}>
                                {item.title}
                            </Navbar.Link>} 
                            sublinks={item.sublinks}/>
                    )
                }else{
                    return(
                        <Navbar.Link href={item.link} key={index} style={{ fontFamily : "Montserrat"}}>
                              {item.title}
                        </Navbar.Link>
                    )
                }
            })
        }
    </Navbar.Collapse>
    </Navbar>
  )
}

const NavDropdown = ({label, sublinks}) => {
    return (
        <Dropdown
      arrowIcon={false}
      inline={true}
      label={label}
      style={{ borderRadius : 0, fontFamily : "Montserrat"}}
    >
        {
            sublinks.map(({title, link}, index )=> (
                    <Dropdown.Item
                    key={link}
                    style={{ fontFamily : "Montserrat"}}>
                        <Link href={link} key={index}>
                            {title}
                        </Link> 
                    </Dropdown.Item>               
            ))
        }
    </Dropdown>
    )
}

export default IndexNavbar
