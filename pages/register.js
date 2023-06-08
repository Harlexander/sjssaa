import React from 'react'
import Register from '../components/Authentication/register'
import IndexNavbar from '../components/Navbar/Navbar'

const Index = () => {
  return (
    <div className='bg-yellow-200 min-h-screen'>
      <IndexNavbar/>
      <Register/>
    </div>
  )
}

export default Index