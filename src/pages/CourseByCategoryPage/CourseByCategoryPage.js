import React, { useEffect } from 'react'
import BlockTitle from '../../components/layout/BlockTitle/BlockTitle'
import CategoryBtn from '../../components/layout/CategoryBtn/CategoryBtn'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCourseByCategory } from '../../toolkit/courseSlice'
import CourseItem from '../../components/layout/CourseItem/CourseItem'
import { useParams } from 'react-router-dom'

export default function CourseByCategoryPage() {
  const {id} = useParams()
  const { courseByCategory } = useSelector(state => state.courseSlice)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchCourseByCategory(id))
  }, [id])
  return (
    <div>
      <BlockTitle title="KHÓA HỌC THEO DANH MỤC" desc="HÃY CHỌN KHÓA HỌC MONG MUỐN !!!" />
      <CategoryBtn title={courseByCategory[0]?.danhMucKhoaHoc?.tenDanhMucKhoaHoc} />
      <div className='px-[20px] p-[50px]'>
      <div className='flex gap-6 md:gap-8 lg:gap-10 overflow-x-scroll lg:grid lg:grid-cols-4 lg:px-8'>
            {courseByCategory.map(course => {
              return <CourseItem key={course.maKhoaHoc} course={course} />
            })}
      </div>
        {/* <div className='px-[20px] grid grid-cols-4 gap-10'>
          {courseByCategory.map(course => {
            return <CourseItem key={course.maKhoaHoc} course={course}/>
          })}
        </div> */}
      </div>
    </div>
  )
}
