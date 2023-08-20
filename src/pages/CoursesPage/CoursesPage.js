import React from 'react'
import BlockTitle from '../../components/layout/BlockTitle/BlockTitle'
import CoursesContainer from './CoursesContainer/CoursesContainer'
import CourseList from './CourseList/CourseList'

export default function CoursesPage() {
    return (
        <div>
            <BlockTitle title="KHÓA HỌC" desc="BẮT ĐẦU HÀNH TRÌNH NÀO!!!" />
            <CoursesContainer/>
            <CourseList/>
        </div>
    )
}
