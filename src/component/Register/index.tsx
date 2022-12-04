import React from 'react'

export default function Register() {
  return (
      <form className='container max-w-xl mx-auto p-4'>
            <h3 className="text-center font-bold text-3xl mb-8">แบบฟอร์มสมัครสมาชิก</h3>
            <div className="grid gap-4 mb-4 grid-cols-1 md:grid-cols-2">
                  <div>
                        <label htmlFor="first_name" className="block mb-2 text-sm font-bold text-gray-900">ชื่อ</label>
                        <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2" required />
                  </div>
                  <div>
                        <label htmlFor="last_name" className="block mb-2 text-sm font-semibold text-gray-900">นามสกุล</label>
                        <input type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2" required />
                  </div>
                  <div>
                        <label htmlFor="phone" className="block mb-2 text-sm font-semibold text-gray-900">เบอร์โทรศัพท์</label>
                        <input type="tel" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                  </div>
                  <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-semibold text-gray-900">อีเมลล์</label>
                        <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2" required />
                  </div>
            </div>
             <div>
                  <label htmlFor="username" className="block mb-2 text-sm font-semibold text-gray-900">ชื่อผู้ใช้งาน</label>
                  <input type="text" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2" required />
            </div> 
            <div className='mt-4'>
                  <label htmlFor="password" className="block mb-2 text-sm font-semibold text-gray-900">รหัสผ่าน</label>
                  <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2" required />
            </div> 
            <div className='mt-4'>
                  <label htmlFor="confirm_password" className="block mb-2 text-sm font-semibold text-gray-900">ยืนยันรหัสผ่าน</label>
                  <input type="password" id="confirm_password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 " required />
            </div> 
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mt-4">ยืนยัน</button>
      </form>
  )
}
