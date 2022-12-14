import React from 'react'
import { useRef } from 'react'
import { NavLink } from 'react-router-dom'

import Swal from 'sweetalert2'

import { LoginApi } from '../../api/login-api'
import { LoginBody } from '../../interface/login-interface'

export default function Login() {
  const username = useRef<HTMLInputElement>(null)
  const password = useRef<HTMLInputElement>(null)

  async function clickSubmit(){
    const body:LoginBody = {
      "username":username.current!.value,
      "password":password.current!.value
    }
    
    const result = await LoginApi(body)
    
    
    if (result.message === "don't exist username in the database"){
      Swal.fire({
        icon: 'warning',
        title: 'ไม่มีชื่อผู้ใช้งานในระบบ',
        confirmButtonColor:'#d7a928'
      })
      return 
    }
    
    if (result.message === "wrong password"){
      Swal.fire({
        icon: 'warning',
        title: 'รหัสผ่านไม่ถูกต้อง',
        confirmButtonColor:'#d7a928'
      })
      return
    }
    
    if (result.message === "wrong password"){
      Swal.fire({
        icon: 'error',
        title: 'เกิดข้อผิดพลาดทางฝั่งเซิฟเวอร์',
        confirmButtonColor:'#cf1e1e'
      })
      return
    }

    Swal.fire({
      icon: 'success',
      title: 'เข้าสู่ระบบสำเร็จ',
      confirmButtonColor:'#068e0f'
    }).then(() => {
      
    })
  }

  return (
    <main className='container max-w-sm mx-auto h-screen'>
      <div className="flex flex-col justify-center h-full p-4">
        <h3 className=' text-4xl font-bold text-center'>ยินดีต้อนรับ</h3>

        <div className='flex flex-col mt-6'>
          <label htmlFor="username" className='font-medium text-gray-700 text-sm'>ชื่อผู้ใช้งาน</label>
          <input type="text" id="usernmae" ref={username}
            className="border-0 border-b-2 border-gray-400 text-gray-400 text-md focus:ring-0 focus:border-gray-400"
          />
        </div>

        <div className='flex flex-col mt-4'>
          <label htmlFor="username" className='font-medium text-gray-700 text-sm'>รหัสผ่าน</label>
          <input type="password" id="password" ref={password}
            className="border-0 border-b-2 border-gray-400 text-gray-400 text-md focus:ring-0 focus:border-gray-400"
          />
        </div>

        <div className='flex justify-center text-sm text-gray-400 mt-2'>
          <NavLink to="/register"><span className='mr-2 hover:text-gray-800'>สมัครสมาชิก</span></NavLink>
          |<NavLink to="/register"><span className='hover:text-gray-800'>&nbsp;&nbsp; ลืมรหัสผ่าน</span></NavLink>
        </div>

        <div className='mt-8'>
          <button type="button" onClick={clickSubmit} className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-0 focus:outline-none font-medium rounded-3xl w-full text-sm px-5 py-2.5 text-center mr-2 mb-2">เข้าสู่ระบบ</button>
        </div>
      </div>
    </main>
  )
}
