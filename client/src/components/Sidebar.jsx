import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'

const Sidebar = () => {
  // Common style for NavLinks
  const navLinkStyle = ({ isActive }) => 
    `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer transition-all ${
      isActive ? "bg-blue-50 border-r-4 border-blue-600" : "hover:bg-gray-50"
    }`;

  return (
    <div className='min-h-[calc(100vh-64px)] border-r border-gray-200 bg-white'>
      <div className='flex flex-col text-gray-800'>
        
        <NavLink end to='/admin' className={navLinkStyle}>
          <img src={assets.home_icon} alt="dashboard" className='w-5' />
          <p className='hidden md:inline-block'>Dashboard</p>
        </NavLink>

        <NavLink to='/admin/addBlog' className={navLinkStyle}>
          <img src={assets.add_icon} alt="add" className='w-5' />
          <p className='hidden md:inline-block'>Add blogs</p>
        </NavLink>

        <NavLink to='/admin/listBlog' className={navLinkStyle}>
          <img src={assets.list_icon} alt="list" className='w-5' />
          <p className='hidden md:inline-block'>Blog lists</p>
        </NavLink>

        <NavLink to='/admin/comments' className={navLinkStyle}>
          <img src={assets.comment_icon} alt="comments" className='w-5' />
          <p className='hidden md:inline-block'>Comments</p>
        </NavLink>

      </div>
    </div>
  )
}

export default Sidebar