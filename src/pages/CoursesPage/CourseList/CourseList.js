import React, { useEffect, useRef, useState } from 'react'
import { courseServ } from '../../../services/courseServ'
import CourseItem from '../../../components/layout/CourseItem/CourseItem'
import { Pagination } from 'antd'

export default function CourseList() {
    const [courseList, setCourseList] = useState()
    const [changePage, setChangePage] = useState(1)
    const fetchCourseListByPage = async () => {
        const result = await courseServ.getCourseListbyPage(changePage)
        setCourseList(result.data)
    }

    const renderCourseList = () => {
        return courseList?.items?.map(course => {
            return <CourseItem key={course.maKhoaHoc} course={course} />
        })
    }
    const ref = useRef()

    useEffect(() => {
        fetchCourseListByPage()
        ref.current.scrollLeft = 0
    }, [changePage])
    return (
        <div className='px-[20px] md:p-[50px]'>
            <h2 className='flex items-center font-semibold text-xl mb-8'><i className="las la-bookmark text-4xl"></i> Danh sách khóa học</h2>
            <div ref={ref} className='flex gap-6 md:gap-8 lg:gap-10 overflow-x-scroll scroll-smooth lg:grid lg:grid-cols-4 lg:px-8'>
                {renderCourseList()}
            </div>
            <Pagination className='text-right my-8' defaultCurrent={1} total={courseList?.totalCount} onChange={page => setChangePage(page)}/>
        </div>
    )
}
