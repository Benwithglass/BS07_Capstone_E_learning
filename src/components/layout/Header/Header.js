import React, { useEffect, useRef, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import UserMenu from './UserMenu/UserMenu'
import { useSelector } from 'react-redux'
import { localUser } from '../../../utils/localUser'
import { Dropdown, Space, message } from 'antd'
import { courseServ } from '../../../services/courseServ'
import { SUCCESS } from '../../../utils/constant'
import useToggle from '../../../hooks/useToggle'
import './Header.css'

export default function Header() {
    const { userInfo } = useSelector(state => state.userSlice)
    const [courseCatalog, setCourseCatalog] = useState([])
    const [isOpenModal, setIsModal] = useState(false)
    const { toggle, handleToggle } = useToggle()
    const { toggle: toggleEvent, handleToggle: handleToggleEvent } = useToggle()
    const inputSearchRef = useRef("")
    const navigate = useNavigate()

    // xử lý đăng xuất
    // cc
    const handleLogout = () => {
        // xóa thông tin dưới localStorage
        localUser.remove()
        window.location.href = "/"
        // thông báo đăng xuất
        message.success("Đăng xuất thành công")
    }
    // thông báo chức năng đang phát triển
    const notifyDeveloping = () => {
        message.loading("Developing")
    }

    // chức năng tìm kiếm khóa học
    const handleCourseSearch = async (e) => {
        e.preventDefault()
        navigate(`/course-search/${inputSearchRef.current.value}`)
    }

    // function handle open close modal in tablet and mobile
    const handleOpenModal = () => {
        setIsModal(true)
        document.body.style.overflow = "hidden"
    }
    const sidebarRef = useRef(null)
    useEffect(() => {
        const handleCloseModal = (e) => {
            if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
                setIsModal(false)
                document.body.style.overflow = ''
            }
        }
        document.addEventListener("mousedown", handleCloseModal)
        return () => {
            document.removeEventListener('mousedown', handleCloseModal);
        }
    }, [])

    // handle scroll bottom is fixed header
    const headerRef = useRef()
    useEffect(() => {
        window.onscroll = () => {
            const bodyScrollTop = document.documentElement.scrollTop || document.body.scrollTop
            if(headerRef.current == null) {
                return false
            }else {
                if (bodyScrollTop > headerRef.current.offsetHeight) {
                    headerRef.current.classList.add("fixed", "shadow-xl")
                } else {
                    headerRef.current.classList.remove("fixed", "shadow-xl")
                }
            }
        }
    }, [])

    const fetchDanhMucKhoaHoc = async () => {
        try {
            const result = await courseServ.getCourseCatalog()
            if (result.status === SUCCESS) {
                setCourseCatalog(result.data)
            }
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        fetchDanhMucKhoaHoc()
    }, [])

    return (
        <header ref={headerRef} className="z-20 bg-white border-gray-200 px-[20px] md:px-[50px] py-[10px] h-[80px] left-0 top-0 right-0 bottom-0 transition-all duration-1000 dark:bg-gray-800">
            <nav className='leading-[60px] lg:leading-none'>
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <NavLink to="/" className="flex items-center">
                            <img src="/images/logo-main.png" className="mr-3 h-10 md:h-12 lg:h-14" alt="error image" />
                        </NavLink>
                        <form onSubmit={handleCourseSearch} className='relative ml-[20px] hidden md:flex'>
                            <input type="text" placeholder='Tìm kiếm'
                                ref={inputSearchRef}
                                className='w-auto h-12 p-2 shadow-sm rounded-md outline-none border-2 bg-transparent focus:border-green' />
                            <i className="las la-search absolute right-[10px] top-1/2 -translate-y-1/2"></i>
                        </form>
                    </div>
                    <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <Dropdown
                                    menu={{
                                        items: courseCatalog.map(course => {
                                            return {
                                                key: course.maDanhMuc,
                                                label: <NavLink to={`/course-catalog/${course.maDanhMuc}`} className="font-medium text-[14px] leading-8 hover:text-green-light">{course.tenDanhMuc}</NavLink>
                                            }
                                        })
                                    }}
                                >
                                    <a onClick={(e) => e.preventDefault()}>
                                        <NavLink>
                                            <i className="las la-bars"></i>
                                            DANH MỤC
                                        </NavLink>
                                    </a>
                                </Dropdown>
                            </li>
                            <li>
                                <NavLink to="/courses" className="block py-2 pr-4 text-gray-700 font-semibold rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white">KHÓA HỌC</NavLink>
                            </li>
                            <li>
                                <NavLink to="/blog" className="block py-2 pr-4 text-gray-700 font-semibold rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white">BLOG</NavLink>
                            </li>
                            <li>
                                <Dropdown
                                    menu={{
                                        items: [
                                            {
                                                key: "0",
                                                label: <NavLink onClick={notifyDeveloping} className="font-medium text-[14px] leading-8 hover:text-green-light">SỰ KIỆN SALE CUỐI NĂM</NavLink>
                                            },
                                            {
                                                key: "1",
                                                label: <NavLink onClick={notifyDeveloping} className="font-medium text-[14px] leading-8 hover:text-green-light">SỰ KIỆN GIÁNG SINH</NavLink>
                                            },
                                            {
                                                key: "2",
                                                label: <NavLink onClick={notifyDeveloping} className="font-medium text-[14px] leading-8 hover:text-green-light">SỰ KIỆN NOEL</NavLink>
                                            },
                                        ]
                                    }}
                                >
                                    <a onClick={(e) => e.preventDefault()}>
                                        <Space>
                                            <NavLink to="/events" className="block py-2 pr-4 text-gray-700 font-semibold rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white">
                                                SỰ KIỆN
                                            </NavLink>
                                        </Space>
                                    </a>
                                </Dropdown>
                            </li>
                            <li>
                                <NavLink to="/info" className="block py-2 pr-4 text-gray-700 font-semibold rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white">THÔNG TIN</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="hidden lg:flex items-center lg:order-2">
                        <UserMenu userInfo={userInfo} handleLogout={handleLogout} />
                    </div>
                    <div onClick={handleOpenModal} className='lg:hidden'>
                        <i className="las la-bars text-2xl"></i>
                    </div>
                </div>
                {isOpenModal && <div className='fixed left-0 top-0 right-0 bottom-0 bg-black/30 z-50 '>
                    <aside ref={sidebarRef} className="fixed top-0 left-0 h-screen transition-all duration-300 lg:-translate-x-full translate-x-0 shadow-2xl" aria-label="Sidebar">
                        <div className="h-full w-[250px] md:w-[350px] px-4 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center'>
                                    <img className='rounded-full w-[50px] h-[50px]' src="/images/avatar.jpg" alt="lỗi" />
                                    <h4 className='ml-4 text-xl font-bold'>xin chào {userInfo?.taiKhoan}</h4>
                                </div>
                            </div>
                            {userInfo?.maLoaiNguoiDung == "HV" ? "" : <div className="text-lg mt-4 py-4 md:py-6 font-medium border-b border-gray-200">
                                <NavLink to="/admin/quanlynguoidung">Admin</NavLink>
                            </div>}
                            <div className="text-lg py-6 font-medium border-b border-gray-200">
                                <NavLink to="/personal-info">Trang cá nhân</NavLink>
                            </div>
                            <ul className="space-y-2">
                                <form onSubmit={handleCourseSearch} className='relative my-4 md:hidden'>
                                    <input type="text" placeholder='Tìm kiếm'
                                        ref={inputSearchRef}
                                        className='w-full h-12 p-2 shadow-sm rounded-md outline-none border-2 bg-transparent focus:border-green' />
                                    <i onClick={handleCourseSearch} className="las la-search absolute right-[10px] top-1/2 -translate-y-1/2"></i>
                                </form>
                                <li>
                                    <button onClick={handleToggle} type="button" className="flex items-center w-full text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                                        <span className="flex-1 text-left whitespace-nowrap">DANH MỤC</span>
                                        {toggle ? <i className="las la-angle-up"></i> : <i className="las la-angle-down"></i>}
                                    </button>
                                    {toggle && <div className="space-y-2">
                                        {
                                            courseCatalog.map(course => {
                                                return (
                                                    <div key={course.maDanhMuc}>
                                                        <NavLink to={`/course-catalog/${course.maDanhMuc}`} className="pl-5 hover:text-green-light">{course.tenDanhMuc}</NavLink>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>}
                                </li>
                                <li>
                                    <NavLink to="/courses" className="block pr-4 text-gray-700 rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white">KHÓA HỌC</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/blog" className="block pr-4 text-gray-700 rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white">BLOG</NavLink>
                                </li>
                                <li>
                                    <button onClick={handleToggleEvent} type="button" className="flex items-center w-full text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                                        <span className="flex-1 text-left whitespace-nowrap">SỰ KIỆN</span>
                                        {toggleEvent ? <i className="las la-angle-up"></i> : <i className="las la-angle-down"></i>}
                                    </button>
                                    {toggleEvent && <div className="space-y-2">
                                        <NavLink to="/events" className="block pl-5 text-md leading-8 hover:text-green-light">
                                            Sự kiện về công nghệ mới
                                        </NavLink>
                                        <NavLink onClick={notifyDeveloping} className="block pl-5 py-2 leading-8 hover:text-green-light">Sự kiện sale cuối năm</NavLink>
                                        <NavLink onClick={notifyDeveloping} className="block pl-5 py-2 leading-8 hover:text-green-light">Sự kiện giáng sinh</NavLink>
                                        <NavLink onClick={notifyDeveloping} className="block pl-5 py-2 leading-8 hover:text-green-light">Sự kiện noel</NavLink>
                                    </div>}
                                </li>
                                <li>
                                    <NavLink to="/info" className="block text-gray-700 rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white">THÔNG TIN</NavLink>
                                </li>
                            </ul>
                            <div className='font-medium border-t border-gray-200' id="login-signin">
                                {userInfo ? <div className='flex items-center'>
                                    <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd" /></svg>
                                    <NavLink onClick={handleLogout} className="ml-3  font-medium">Đăng xuất</NavLink>
                                </div> :
                                    <ul>
                                        <li className='flex items-center' id="log">
                                            <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd" /></svg>
                                            <NavLink to="/sign-in" className="ml-3  font-medium">Đăng nhập</NavLink>
                                        </li>
                                        <li className='flex items-center' id="log">
                                            <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clipRule="evenodd"></path></svg>
                                            <NavLink to="/sign-up" className="ml-3  font-medium">Đăng ký</NavLink>
                                        </li>
                                    </ul>
                                }
                            </div>
                        </div>
                    </aside>
                </div>}
            </nav>
        </header>

    )
}
