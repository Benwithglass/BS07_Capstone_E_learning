import React from 'react'
import { useSelector } from 'react-redux'
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space, message } from 'antd';
import { NavLink } from 'react-router-dom';
import { memo } from 'react';


function UserMenu({userInfo, handleLogout}) {
    return (
        <div>
            {userInfo ? userInfo.maLoaiNguoiDung == "HV" ? <Dropdown
                lineWidthFocus="400px"
                menu={{
                    items: [
                        {
                            label: <div className='flex items-center'>
                                <img className='rounded-full w-[40px] h-[40px]' src="/images/avatar.jpg" alt="lỗi" />
                                <h4 className='ml-4 font-bold'>{userInfo.taiKhoan}</h4>
                            </div>,
                            key: "0"
                        },
                        {
                            label: <NavLink className="font-medium" to="/personal-info">Trang cá nhân</NavLink>,
                            key: '1',
                        },
                        {
                            label: <NavLink className="font-medium" onClick={handleLogout} to="/">Đăng xuất</NavLink>,
                            key: '2',
                        },
                    ],
                    style: { width: 200 }
                }}
                trigger={['click']}
            >
                <a onClick={(e) => e.preventDefault()}>
                    <Space>
                        <img className='rounded-full w-[40px] h-[40px]' src='/images/avatar.jpg' alt="lỗi" />
                    </Space>
                </a>
            </Dropdown>: <Dropdown
                lineWidthFocus="400px"
                menu={{
                    items: [
                        {
                            label: <div className='flex items-center'>
                                <img className='rounded-full w-[40px] h-[40px]' src="/images/avatar.jpg" alt="lỗi" />
                                <h4 className='ml-4 font-bold'>{userInfo.taiKhoan}</h4>
                            </div>,
                            key: "0"
                        },
                        {
                            label: <NavLink className="font-medium" to="/admin/quanlynguoidung">Quản trị viên</NavLink>,
                            key: '1',
                        },
                        {
                            label: <NavLink className="font-medium" to="/personal-info">Trang cá nhân</NavLink>,
                            key: '2',
                        },
                        {
                            label: <NavLink className="font-medium" onClick={handleLogout} to="/">Đăng xuất</NavLink>,
                            key: '3',
                        },
                    ],
                    style: { width: 200 }
                }}
                trigger={['click']}
            >
                <a onClick={(e) => e.preventDefault()}>
                    <Space>
                        <img className='rounded-full w-[40px] h-[40px]' src='/images/avatar.jpg' alt="lỗi" />
                    </Space>
                </a>
            </Dropdown>  : <div><NavLink to="/sign-in" className="mr-4 hover:text-[#ff006e] font-bold">Đăng nhập</NavLink> <NavLink to="/sign-up" className="hover:text-[#ff006e] font-bold">Đăng ký</NavLink></div>}
        </div>

    )
}


export default memo(UserMenu)   