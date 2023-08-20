import { Modal, Rate, message } from 'antd'
import moment from 'moment/moment'
import React, { useState } from 'react'
import Button from '../../../components/Button/Button'
import { courseServ } from '../../../services/courseServ'
import { SUCCESS } from '../../../utils/constant'
import { localUser } from '../../../utils/localUser'
const { confirm } = Modal;

export default function PurchasedCourse({ peronalInfo, fetchAccoutInfo }) {
  const handleDeleteCourse = (courseInfo) => {
    confirm({
      title: <div className='text-base font-medium'>Bạn có muốn xóa khóa học <span className='text-green-light text-lg'>{courseInfo.tenKhoaHoc}</span></div>,
      content: 'Chú ý: sau khi xóa khóa học sẽ bị mất vĩnh viễn',
      okText: 'Yes',
      cancelText: 'No',
      async onOk() {
        let deleteCourse = {
          maKhoaHoc: courseInfo.maKhoaHoc,
          taiKhoan: localUser.get()?.taiKhoan
        }
        try {
          const result = await courseServ.deleteCourse(deleteCourse)
          if (result.status === SUCCESS) {
            fetchAccoutInfo()
            message.success("Xóa khóa học thành công")
          }
        } catch (err) {
          message.error(err.response?.data)
        }
      },
      onCancel() {
      }
    })
  }
  return (
    <div className='grid grid-cols-1 gap-y-5'>
      {peronalInfo?.chiTietKhoaHocGhiDanh?.map(course => {
        return <div key={course.maKhoaHoc} className='md:flex'>
          <img src={course?.hinhAnh} className='w-screen md:max-w-[240px] lg:min-w-[300px] h-[200px] object-cover rounded-md' alt="" />
          <div className='ml-0 md:ml-4 text-base w-full mt-4 md:mt-0'>
            <h3><span className='font-semibold'>Khóa học: </span> {course.tenKhoaHoc}</h3>
            <p className='leading-7'><span className='font-semibold'>Mô tả:</span> {course.moTa.split("").length > 100 ? course.moTa.slice(0, 100) + "..." : course.moTa}</p>
            <p className='leading-7'><span className='font-semibold'>Ngày tạo: </span> {moment(course.ngayTao).format("DD-MM-YYYY")}</p>
            <div><span className='font-semibold'>Lượt xem: </span> {course.luotXem}</div>
            <Rate disabled defaultValue={course.danhGia} />
            <div className='my-2 flex items-center'>
              <img className='w-12 h-12 rounded-full object-cover' src="/images/instrutor5.jpg" alt="" />
              <h3 className='font-medium ml-2'>Tuấn Trần</h3>
            </div>
            <div className='flex justify-end'><Button onClick={() => handleDeleteCourse(course)} className="bg-[#f6ba35] font-semibold px-3 py-1.5 text-white hover:scale-95 transition-all">Hủy khóa học</Button></div>
          </div>
        </div>
      })}
    </div>
  )
}
