import React from 'react'
import { Card } from 'antd'
import { NavLink } from 'react-router-dom'
export default function CourseItem({ course }) {
    return <NavLink to={`/detail/${course.maKhoaHoc}`}>
        <Card
        className='w-[250px] h-full md:w-[400px] shadow-2xl lg:w-full overflow-hidden hover:-translate-y-2 transition-all duration-300'
        hoverable
        cover={<div className='relative transition-all'>
            <img alt="error image" src={`${course.hinhAnh}`} className='w-full aspect-[10/8] object-cover'/>
            <h4 className='text-sm w-full font-medium absolute bottom-0 p-1.5 text-white bg-green-light'>
                {course.tenKhoaHoc.length > 30 ? course.tenKhoaHoc.slice(0, 30) + "..." : course.tenKhoaHoc}
            </h4>
        </div>}
    >
        <div>
            <p className='text-sm font-semibold h-12'>{course.moTa.length > 60 ? course.moTa.slice(0, 50) + "..." : course.moTa}</p>
            <div className='flex items-center justify-between'>
                <div className='flex items-center mt-2'>
                    <img className='w-8 h-8 md:w-10 md:h-10 object-cover rounded-full' src="/images/avatar.jpg" alt="" />
                    <h3 className='ml-3 text-[12px] md:text-sm font-semibold'>{course.nguoiTao.hoTen}</h3>
                </div>
                <div>
                    <span className='text-[12px] md:text-sm relative'>
                        800.000
                        <sup>đ</sup>
                        <span className='absolute w-full border border-gray-400 left-0 top-1/2'></span>
                    </span>
                    <h4 className='text-green-light font-semibold text-[14px] md:text-lg'>400.000<sup>đ</sup></h4>
                </div>
            </div>
        </div>
    </Card>
    </NavLink>
}
