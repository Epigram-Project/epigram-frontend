import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Login() {
  return (
    <main className='container max-w-sm mx-auto h-screen'>
      <div className="flex flex-col justify-center h-full p-4">
        <h3 className=' text-4xl font-bold text-center'>ยินดีต้อนรับ</h3>

        <div className='flex flex-col mt-6'>
          <label htmlFor="username" className='font-medium text-gray-700 text-sm'>ชื่อผู้ใช้งาน</label>
          <input type="text" id="usernmae"
            className="border-0 border-b-2 border-gray-400 text-gray-400 text-md focus:ring-0 focus:border-gray-400"
          />
        </div>

        <div className='flex flex-col mt-4'>
          <label htmlFor="username" className='font-medium text-gray-700 text-sm'>รหัสผ่าน</label>
          <input type="password" id="password"
            className="border-0 border-b-2 border-gray-400 text-gray-400 text-md focus:ring-0 focus:border-gray-400"
          />
        </div>

        <div className='flex justify-center text-sm text-gray-400 mt-2'>
          <NavLink to="/register"><span className='mr-2 hover:text-gray-800'>สมัครสมาชิก</span></NavLink>
          |<NavLink to="/register"><span className='hover:text-gray-800'>&nbsp;&nbsp; ลืมรหัสผ่าน</span></NavLink>
        </div>

        <div className='mt-8'>
          <button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-0 focus:outline-none font-medium rounded-3xl w-full text-sm px-5 py-2.5 text-center mr-2 mb-2">เข้าสู่ระบบ</button>
        </div>
      </div>
    </main>
  )
}
