import React from 'react'
import { Progress } from 'antd'
import Button from '../../../components/Button/Button'
import "./InfoPage.css"

export default function InfoPage({ peronalInfo }) {
  return (
    <div>
      <div className='grid md:grid-cols-6'>
        <ul className='col-span-3'>
          <li className='text-sm md:text-base leading-10'><span className='font-medium'>Email: </span><span>{peronalInfo?.email}</span></li>
          <li className='text-sm md:text-base leading-10'><span className='font-medium'>Họ và tên:  </span> <span>{peronalInfo?.hoTen}</span></li>
          <li className='text-sm md:text-base leading-10'><span className='font-medium'>Số điện thoại:  </span> <span>{peronalInfo?.soDT}</span></li>
        </ul>
        <ul className='col-span-3'>
          <li className='text-sm md:text-base leading-10'><span className='font-medium'>Tài khoản:  </span> <span>{peronalInfo?.taiKhoan}</span></li>
          <li className='text-sm md:text-base leading-10'><span className='font-medium'>Nhóm:  </span> <span>{peronalInfo?.maNhom}</span></li>
          <li className='text-sm md:text-base leading-10'>
            <span className='font-medium'>Đối tượng: </span>
            <span>{peronalInfo?.maLoaiNguoiDung === "HV" ? <span>Học viên</span> : "Giáo vụ"}</span>
          </li>
          <li>
            <Button className="bg-[#f6ba35] text-white font-semibold px-3 py-1">Cập nhật</Button>
          </li>
        </ul>
      </div>
      <h3 className='font-semibold text-2xl my-4 md:my-0'>Kĩ năng của tôi</h3>
      <div className='grid lg:grid-cols-3 items-center'>
        <div className='col-span-2'>
          <div className='flex items-center mt-4'>
            <Button className="bg-[#f9ca9a] w-[60px] p-1.5 text-white font-medium">HTML</Button>
            <Progress className='ml-4' strokeColor="#f9ca9a" trailColor='#e9ecef' strokeLinecap="butt" percent={100} />
          </div>
          <div className='flex items-center mt-4'>
            <Button className="bg-[#f8bebb] w-[60px] p-1.5 text-white font-medium">CSS</Button>
            <Progress className='ml-4' strokeColor="#f8bebb" trailColor='#e9ecef' strokeLinecap="butt" percent={70} />
          </div>
          <div className='flex items-center mt-4'>
            <Button className="bg-[#f0cc6b] w-[60px] p-1.5 text-white font-medium">JS</Button>
            <Progress className='ml-4' strokeColor="#f0cc6b" trailColor='#e9ecef' strokeLinecap="butt" percent={50} />
          </div>
          <div className='flex items-center mt-4'>
            <Button className="bg-[#113d3c] text-white w-[60px] p-1.5 font-medium">REACT</Button>
            <Progress className='ml-4' strokeColor="#113d3c" trailColor='#e9ecef' strokeLinecap="butt" percent={80} />
          </div>
        </div>
        <div className='col-span-1 lg:ml-5 mt-8 lg:mt-0'>
          <div className='grid grid-cols-2 gap-8'>
            <Button className="bg-green-light text-white font-semibold text-base rounded-xl px-0 py-4 flex items-center justify-center">
            <i className="las la-user-clock text-xl"></i>
            <div className='ml-2 flex flex-col text-left'>Giờ học <span>80</span></div>
            </Button>
            <Button className="bg-green-light text-white font-semibold text-base rounded-xl px-0 py-4 flex items-center justify-center">
            <i className="las la-layer-group text-xl"></i>
            <div className='ml-2 flex flex-col text-left'>Điểm tổng <span>80</span></div>
            </Button>
            <Button className="bg-green-light text-white font-semibold text-base rounded-xl px-0 py-4 flex items-center justify-center">
            <i className="las la-swatchbook text-xl"></i>
            <div className='ml-2 flex flex-col text-left'>Buổi học <span>40</span></div>
            </Button>
            <Button className="bg-green-light text-white font-semibold text-base rounded-xl px-0 py-4 flex items-center justify-center">
            <i className="las la-signal text-xl"></i>
            <div className='ml-2 flex flex-col text-left'>Cấp độ <span>Trung cấp</span></div>
            </Button>
            <Button className="bg-green-light text-white font-semibold text-base rounded-xl px-0 py-4 flex items-center justify-center">
            <i className="las la-graduation-cap text-xl"></i>
            <div className='ml-2 flex flex-col text-left'>Học lực <span>Khá</span></div>
            </Button>
            <Button className="bg-green-light text-white font-semibold text-base rounded-xl px-0 py-4 flex items-center justify-center">
            <i className="las la-book-open text-xl"></i>
            <div className='ml-2 flex flex-col text-left'>Bài tập <span>100</span></div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
