import React from 'react'
import { useRef } from 'react'
import Swal from 'sweetalert2'

import { RegisterApi } from '../../api/register-api'
import { RegisterProps } from '../../interface/register-interface'

export default function Register() {
      const firstname = useRef<HTMLInputElement>(null)
      const lastname = useRef<HTMLInputElement>(null)
      const tel = useRef<HTMLInputElement>(null)
      const email = useRef<HTMLInputElement>(null)
      const username = useRef<HTMLInputElement>(null)
      const password = useRef<HTMLInputElement>(null)
      const confirm_password = useRef<HTMLInputElement>(null)

      const submitBtn = async (ev:React.SyntheticEvent<HTMLFormElement>) => {
            ev.preventDefault()
            if (password.current!.value !== confirm_password.current!.value){
                  Swal.fire({
                        icon: 'warning',
                        title: 'โปรดใส่รหัสผ่านให้ตรงกัน',
                        confirmButtonColor:'#d7a928'
                  })
                  return
            }else{
                  const body:RegisterProps = {
                        "firstname":firstname.current!.value,
                        "lastname":lastname.current!.value,
                        "tel":tel.current!.value,
                        "email":email.current!.value,
                        "username":username.current!.value,
                        "password":password.current!.value
                  }
                  
                  const result = await RegisterApi(body)
                  if (result.message === "success register"){
                        Swal.fire({
                              icon: 'success',
                              title: 'สมัครสมาชิกสำเร็จ',
                              confirmButtonColor:'#068e0f'
                        })
                  }else if (result.message === "repeat email"){
                        Swal.fire({
                              icon: 'error',
                              title: 'อีเมลล์ซ้ำ โปรดกรอกอีเมลล์ใหม่',
                              confirmButtonColor:'#cf1e1e'
                        })
                  }else{
                        Swal.fire({
                              icon: 'error',
                              title: 'สมัครสมาชิกไม่สำเร็จ',
                              confirmButtonColor:'#cf1e1e'
                        })
                  }
            }
      }
      
      return (
            <form className='container max-w-xl mx-auto p-4' onSubmit={(ev) => submitBtn(ev)}>
                  <h3 className="text-center font-bold text-3xl mb-8">แบบฟอร์มสมัครสมาชิก</h3>
                  <div className="grid gap-4 mb-4 grid-cols-1 md:grid-cols-2">
                        <div>
                              <label htmlFor="firstname" className="block mb-2 text-sm font-bold text-gray-900">ชื่อ</label>
                              <input type="text" id="firstname" name='firstname' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2" required ref={firstname} />
                        </div>
                        <div>
                              <label htmlFor="lastname" className="block mb-2 text-sm font-semibold text-gray-900">นามสกุล</label>
                              <input type="text" id="lastname" name='lastname' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2" required ref={lastname} />
                        </div>
                        <div>
                              <label htmlFor="tel" className="block mb-2 text-sm font-semibold text-gray-900">เบอร์โทรศัพท์</label>
                              <input type="tel" id="tel" name="tel" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2" pattern="[0-9]{10}" required ref={tel} />
                        </div>
                        <div>
                              <label htmlFor="email" className="block mb-2 text-sm font-semibold text-gray-900">อีเมลล์</label>
                              <input type="email" id="email" name='email' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2" required ref={email} />
                        </div>
                  </div>
                        <div>
                        <label htmlFor="username" className="block mb-2 text-sm font-semibold text-gray-900">ชื่อผู้ใช้งาน</label>
                        <input type="text" id="username" name='username' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2" required  ref={username} />
                  </div> 
                  <div className='mt-4'>
                        <label htmlFor="password" className="block mb-2 text-sm font-semibold text-gray-900">รหัสผ่าน</label>
                        <input type="password" id="password" name='password' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2" required ref={password} />
                  </div> 
                  <div className='mt-4'>
                        <label htmlFor="confirm_password" className="block mb-2 text-sm font-semibold text-gray-900">ยืนยันรหัสผ่าน</label>
                        <input type="password" id="confirm_password" name='confirm_password' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2" required ref={confirm_password} />
                  </div> 
                  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mt-4">ยืนยัน</button>
            </form>
      )
}
