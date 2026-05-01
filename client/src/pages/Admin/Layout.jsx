import React from 'react'
import { assets } from "../../assets/assets"
import { Outlet, useNavigate } from 'react-router-dom'
import Sidebar from '../../components/Sidebar'

const Layout = () => {
  const navigate = useNavigate()

  const logout = () => {
    // Logout logic yahan add kar sakte hain
    navigate('/')
  }

  return (
    <div className='min-h-screen'>
      {/* Navbar Section */}
      <div className='flex items-center justify-between py-2 h-16 px-4 sm:px-12 border-b border-gray-200 bg-white sticky top-0 z-20'>
        <img 
          src={assets.logo} 
          alt="logo" 
          className='w-32 sm:w-40 cursor-pointer' 
          onClick={() => navigate('/')} 
        />
        
        <button 
          onClick={logout} 
          className='text-sm px-8 py-2 bg-blue-600 text-white rounded-full cursor-pointer hover:bg-blue-700 transition-all'>
          Logout
        </button>
      </div>

      {/* Main Admin Body */}
      <div className='flex'>
        {/* Sidebar Container */}
        <div className='fixed md:static z-10'>
          <Sidebar />
        </div>

        {/* Content Container (Outlet) */}
        <div className='flex-1 p-5 md:p-10 bg-gray-50 min-h-[calc(100vh-64px)]'>
          <Outlet />
        </div>
      </div> 
    </div>
  )
}

export default Layout