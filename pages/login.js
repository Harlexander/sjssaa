import React from 'react'
import Login from '../components/Authentication/login'
import IndexNavbar from '../components/Navbar/Navbar'

const Index = () => {
  return (
    <div className='bg-yellow-200 min-h-screen'>
      <IndexNavbar/>
      <Login/>
    </div>
  )
}

export default Index