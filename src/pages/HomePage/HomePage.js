import React from 'react'
import Footer from '../../components/layout/Footer/Footer'
import Header from '../../components/layout/Header/Header'
import CourseShowing from './CourseShowing/CourseShowing'
import SlideHome from './SlideHome/SlideHome'
import InfoCourseHome from './InfoCourseHome/InfoCourseHome'
import NumberContainer from './NumberContainer/NumberContainer'
import BackToTop from '../../components/layout/BackTop/BackToTop'
import Instrutor from './Instrutor/Instrutor'
export default function HomePage() {
  return (
    <div>
      <Header/>
      <SlideHome />
      <InfoCourseHome/>
      <CourseShowing />
      <NumberContainer/>
      <Instrutor/>
      <BackToTop/>
      <Footer/>
    </div>
  )
}
