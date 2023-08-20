import { Button } from 'antd'
import Input from 'antd/es/input/Input'
import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-[#f0f8ff]">
      <div className="px-[20px] md:px-[50px] py-10 mx-auto md:flex">
        <div className="basis-full md:basis-4/12 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <div className='hover:scale-105 transition-all duration-500 cursor-pointer' style={{ textShadow: "5px -2px 3px #54d2c0" }}>
            <span className='font-bold text-5xl text-green-light'>V</span>
            <span className='font-bold text-2xl'>learning</span>
          </div>
          <ul>
            <li className='flex items-center justify-center md:justify-start my-3 hover:-translate-y-[2px] transition-all duration-300'>
              <span className='mx-3 rounded-full w-10 h-10 bg-green-light text-white flex items-center justify-center'>
                <i className="las la-phone"></i>
              </span>
              <span className='font-medium'>1800-123-4567</span>
            </li>
            <li className='flex items-center justify-center md:justify-start my-3 hover:-translate-y-[2px] transition-all duration-300'>
              <span className='mx-3 rounded-full w-10 h-10 bg-green-light text-white flex items-center justify-center'>
                <i className="las la-envelope-open-text"></i>
              </span>
              <span className='font-medium'>CyberSoft@gmail.com</span>
            </li>
            <li className='flex items-center justify-center md:justify-start my-3 hover:-translate-y-[2px] transition-all duration-300'>
              <span className='mx-3 rounded-full w-10 h-10 bg-green-light text-white flex items-center justify-center'>
                <i className="las la-map-marker-alt"></i>
              </span>
              <span className='font-medium'>TP Hồ Chí Minh</span>
            </li>
          </ul>
        </div>
        <div className='flex justify-around my-6 md:my-0 md:justify-start md:basis-5/12 lg:basis-4/12'>
        <div className='md:basis-1/2'>
          <h3 className='font-bold text-2xl'>Liên kết</h3>
          <ul className='-ml-1'>
            <li className='m-0 font-medium leading-8 hover:-translate-y-[2px] hover:text-green-light transition-all'>
              <i className="las la-angle-right"></i>
              Trang chủ
            </li>
            <li className='font-medium leading-8 hover:-translate-y-[2px] hover:text-green-light transition-all'>
              <i className="las la-angle-right"></i>
              Dịch vụ
            </li>
            <li className='font-medium leading-8 hover:-translate-y-[2px] hover:text-green-light transition-all'>
              <i className="las la-angle-right"></i>
              Nhóm
            </li>
            <li className='font-medium leading-8 hover:-translate-y-[2px] hover:text-green-light transition-all'>
              <i className="las la-angle-right"></i>
              Blog
            </li>
          </ul>
        </div>
        <div className='md:basis-1/2'>
          <h3 className='font-bold text-2xl'>Khóa học</h3>
          <ul className='-ml-1'>
            <li className='m-0 font-medium leading-8 hover:text-green-light transition-all'>
              <i className="las la-angle-right"></i>
              Front End
            </li>
            <li className='font-medium leading-8 hover:-translate-y-[2px] hover:text-green-light transition-all'>
              <i className="las la-angle-right"></i>
              Back End
            </li>
            <li className='font-medium leading-8 hover:-translate-y-[2px] hover:text-green-light transition-all'>
              <i className="las la-angle-right"></i>
              Full stack
            </li>
            <li className='font-medium leading-8 hover:-translate-y-[2px] hover:text-green-light transition-all'>
              <i className="las la-angle-right"></i>
              Node Js
            </li>
          </ul>
        </div>
        </div>
        <div className='md:basis-3/12 lg:4/12 transition-all duration-300'>
          <h3 className='font-bold text-2xl text-center md:text-left'>Đăng ký tư vấn</h3>
          <Input className='w-full lg:w-[300px] mt-2 p-1.5 border-green-light focus:border-green focus:-translate-x-1' placeholder='Họ và tên' />
          <Input className='w-full lg:w-[300px] mt-2 p-1.5 border-green-light focus:border-green focus:-translate-x-1' placeholder='Email' />
          <Input className='w-full lg:w-[300px] mt-2 p-1.5 border-green-light focus:border-green focus:-translate-x-1' placeholder='Số điện thoại' />
          <Button type='text' className='block mt-4 bg-yellow text-white font-semibold hover:scale-105 mx-auto md:mx-0'>Đăng ký</Button>
        </div>
      </div>
      <div className="px-[50px] border border-t-gray-400">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-black text-sm text-center sm:text-left">Copyright © 2023 Nhóm 1 by: Trần Quang Nhựt, Phạm Tiến Đạt, Nguyễn Ngọc Minh QUÝ
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a className="text-gray-500">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={0} className="w-5 h-5" viewBox="0 0 24 24">
                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                <circle cx={4} cy={4} r={2} stroke="none" />
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>

  )
}
