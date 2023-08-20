import React, { useEffect, useState } from 'react'
import { NavLink, Navigate, useNavigate, useParams } from 'react-router-dom'
import { courseServ } from '../../services/courseServ'
import { SUCCESS } from '../../utils/constant'
import BlockTitle from '../../components/layout/BlockTitle/BlockTitle'
import { Button, Rate, message } from 'antd'

export default function CourseSearchPage() {
    const { value } = useParams()
    const [courseList, setCourseList] = useState([])
    const navigate = useNavigate()

    const fetchCourseSearchList = async () => {
        try {
            const result = await courseServ.courseSearch(value)
            if (result.status === SUCCESS) {
                setCourseList(result.data)
            }
        } catch (err) {
            navigate("/notfound-course-search")
        }
    }
    useEffect(() => {
        fetchCourseSearchList()
    }, [value])

    return (
        <div>
            <BlockTitle title="TÌM KIẾM" desc="KẾT QUẢ TÌM KIẾM KHÓA HỌC!!!" />
            <div className='p-[20px] md:p-[50px] grid lg:grid-cols-6'>
                <div className='hidden lg:block col-span-1'>
                    <h4 className='text-2xl font-bold'>Lọc</h4>
                    <div>
                        <h3 className='text-xl my-3 font-medium'>Khóa học</h3>
                        <ul className='pl-4'>
                            <li className='my-2 flex items-center'>
                                <input className="w-[20px] h-[20px] rounded-2xl mr-3" type="checkbox" />
                                <span className='font-medium'>Tất cả</span>
                            </li>
                            <li className='my-2 flex items-center'>
                                <input className="w-[20px] h-[20px] rounded-2xl mr-3" type="checkbox" />
                                <span className='font-medium'>Front End</span>
                            </li>
                            <li className='my-2 flex items-center'>
                                <input className="w-[20px] h-[20px] rounded-2xl mr-3" type="checkbox" />
                                <span className='font-medium'>Back End</span>
                            </li>
                            <li className='my-2 flex items-center'>
                                <input className="w-[20px] h-[20px] rounded-2xl mr-3" type="checkbox" />
                                <span className='font-medium'>HTML / CSS</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='text-xl my-3 font-medium'>Cấp độ</h3>
                        <ul className='pl-4'>
                            <li className='my-2 flex items-center'>
                                <input className="w-[20px] h-[20px] rounded-2xl mr-3" type="checkbox" />
                                <span className='font-medium'>Tất cả</span>
                            </li>
                            <li className='my-2 flex items-center'>
                                <input className="w-[20px] h-[20px] rounded-2xl mr-3" type="checkbox" />
                                <span className='font-medium'>Mới bắt đầu</span>
                            </li>
                            <li className='my-2 flex items-center'>
                                <input className="w-[20px] h-[20px] rounded-2xl mr-3" type="checkbox" />
                                <span className='font-medium'>Trung cấp</span>
                            </li>
                            <li className='my-2 flex items-center'>
                                <input className="w-[20px] h-[20px] rounded-2xl mr-3" type="checkbox" />
                                <span className='font-medium'>Cao cấp</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='text-xl my-3 font-medium'>Đánh giá</h3>
                        <ul className='pl-4'>
                            <li className='my-2 flex items-center'>
                                <input className="w-[20px] h-[20px] rounded-2xl mr-3" type="checkbox" />
                                <Rate defaultValue={1} disabled count={1} />
                            </li>
                            <li className='my-2 flex items-center'>
                                <input className="w-[20px] h-[20px] rounded-2xl mr-3" type="checkbox" />
                                <Rate defaultValue={2} disabled count={2} />
                            </li>
                            <li className='my-2 flex items-center'>
                                <input className="w-[20px] h-[20px] rounded-2xl mr-3" type="checkbox" />
                                <Rate defaultValue={3} disabled count={3} />
                            </li>
                            <li className='my-2 flex items-center'>
                                <input className="w-[20px] h-[20px] rounded-2xl mr-3" type="checkbox" />
                                <Rate defaultValue={4} disabled count={4} />
                            </li>
                            <li className='my-2 flex items-center'>
                                <input className="w-[20px] h-[20px] rounded-2xl mr-3" type="checkbox" />
                                <Rate defaultValue={5} disabled count={5} />
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='col-span-5 gap-10'>
                    <h4 className='font-semibold text-lg'>Hiển thị {courseList.length} kết quả</h4>
                    {courseList.map(course => {
                        return <div className='grid grid-cols-8 md:gap-6 lg:gap-10 mt-[40px]'>
                            <div className='col-span-full md:col-span-3 lg:col-span-2'>
                                <img className='w-full h-[200px] object-cover rounded-lg' src={course.hinhAnh} alt="" />
                            </div>
                            <div className='col-span-full mt-5 md:mt-0 md:col-span-5 lg:col-span-6'>
                                <div className='w-full md:max-w-[80%]'>
                                    <h4 className='font-medium text-xl'>{course.tenKhoaHoc}</h4>
                                    <p className='text-[#8c8c8c] leading-8'>{course.moTa.length > 60 ? course.moTa.slice(0, 60) + "..." : course.moTa}</p>
                                    <div className='flex items-center'>
                                        <div className='flex items-center mr-4'>
                                            <i className="lar la-clock text-2xl mr-1 text-yellow"></i>
                                            8 giờ
                                        </div>
                                        <div className='flex items-center mr-4'>
                                            <i className="lar la-calendar-minus text-2xl mr-1 text-red-500"></i>
                                            23 giờ
                                        </div>
                                        <div className='flex items-center mr-4'>
                                            <i class="las la-signal text-2xl mr-1 text-blue-400"></i>
                                            All level
                                        </div>
                                    </div>
                                    <div className='my-2'>
                                        <Rate disabled defaultValue={5} />
                                    </div>
                                    <div className='flex items-center'>
                                        <img className='w-10 h-10 object-cover rounded-full' src="/images/instrutor1.jpg" alt="Error image" />
                                        <h4 className='font-medium ml-4'>{course.nguoiTao.hoTen}</h4>
                                    </div>
                                </div>
                                <NavLink to={`/detail/${course.maKhoaHoc}`}><Button type='text' className='block bg-yellow text-white hover:scale-95 transition-all ml-auto'>Xem chi tiết</Button></NavLink>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}
