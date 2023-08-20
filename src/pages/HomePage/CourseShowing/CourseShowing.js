import React, { useEffect, useState } from 'react'
import { courseServ } from '../../../services/courseServ'
import CourseItem from '../../../components/layout/CourseItem/CourseItem'



export default function CourseShowing() {
    const [courses, setCourses] = useState([])
    const fetchCourseList = async () => {
        try {
            const result = await courseServ.getCourseList()
            setCourses(result.data)
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        fetchCourseList()
    }, [])

    return (
        <div className='px-[20px] md:px-[50px]'>
            <h2 className='text-lg md:text-xl lg:text-2xl font-bold my-10 text-green-light'>Khóa học phổ biến</h2>
            <div className='flex gap-6 md:gap-8 lg:gap-10 overflow-x-scroll lg:grid lg:grid-cols-4 lg:px-8'>
                {courses.slice(0, 4).map(course => {
                    return <CourseItem key={course.maKhoaHoc} course={course}/>
                })}
            </div>
            <h2 className='text-lg md:text-xl lg:text-2xl font-bold my-10 text-green-light'>Khóa học tham khảo</h2>
            <div className='flex gap-10 overflow-x-scroll lg:grid lg:grid-cols-4 lg:px-8'>
                {courses.slice(28, 32).map(course => {
                    return <CourseItem key={course.maKhoaHoc} course={course}/>
                })}
            </div>
            <h2 className='text-lg md:text-xl lg:text-2xl font-bold my-10 text-green-light'>Khóa học Front End ReactJs</h2>
            <div className='flex gap-10 overflow-x-scroll lg:grid lg:grid-cols-4 lg:px-8'>
                {courses.slice(8, 12).map(course => {
                    return <CourseItem key={course.maKhoaHoc} course={course}/>
                })}
            </div>
        </div>
    )
}
