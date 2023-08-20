import React from 'react'
import Button from '../../components/Button/Button'

export default function EventPage() {
    return (
        <div>
            <div className='w-screen h-[400px] md:h-[600px] bg-no-repeat bg-cover text-white relative z-20' style={{ backgroundImage: `url("./images/bg-event.jpg")` }}>
                <div className='px-[20px] md:px-[50px] h-full flex flex-col justify-center'>
                    <div className='flex items-center justify-between md:justify-start'>
                        <div className='flex flex-col items-center md:mr-10'>
                            <span className='block text-[#ffbe0b] font-semibold text-3xl md:text-4xl lg:text-7xl'>10</span>
                            <span className='text-lg md:text-xl lg:text-2xl'>NGÀY</span>
                        </div>
                        <div className='flex flex-col items-center md:mr-10'>
                            <span className='block text-[#fb5607] font-semibold text-3xl md:text-4xl lg:text-7xl'>15</span>
                            <span className='text-2xl'>GIỜ</span>
                        </div>
                        <div className='flex flex-col items-center md:mr-10'>
                            <span className='block text-[#ff006e] font-semibold text-3xl md:text-4xl lg:text-7xl'>20</span>
                            <span className='text-2xl'>PHÚT</span>
                        </div>
                        <div className='flex flex-col items-center md:mr-10'>
                            <span className='block text-[#8338ec] font-semibold text-3xl md:text-4xl lg:text-7xl'>25</span>
                            <span className='text-2xl'>GIÂY</span>
                        </div>
                    </div>
                    <h2 className='my-4 font-bold text-2xl md:text-4xl lg:text-4xl'>SỰ KIỆN CÔNG NGHỆ LỚN NHẤT 2023</h2>
                    <p className='font-medium text-lg md:text-xl'>1 - 45 THÁNG 9, 2023, VIỆT NAM</p>
                </div>
                <div className='absolute left-0 top-0 right-0 bottom-0 bg-contain bg-no-repeat bg-right -z-10 opacity-90' style={{backgroundImage: `url("./images/avatar-event.png")`}}></div>
            </div>
            <div className='px-[20px] md:px-[50px] grid md:grid-cols-2 my-10 lg:my-20'>
                <div>
                    <img className='mx-auto h-[270px] animate-wiggle' src="/images/img-event.png" alt="" />
                </div>
                <div className='mt-12 md:mt-0'>
                    <h3 className='text-[#9f1f56] text-xl md:text-2xl lg:text-3xl font-bold'>SỰ KIỆN CÔNG NGHỆ DÀNH CHO STARTUP</h3>
                    <span className='block my-3 font-medium'>Nơi gặp gỡ của những tư tưởng lớn</span>
                    <p className='text-[#8c8c8c] text-base lg:text-lg'>Innovatube Frontier Summit (IFS) là sự kiện đầu tiên tại Việt Nam tập trung vào cả bốn mảng tiêu biểu của công nghệ tiên phong, bao gồm Artificial Intelligence (trí tuệ nhân tạo), Internet of Things (Internet vạn vật), Blockchain (Chuỗi khối) và Augmented reality/Virtual Reality (Thực tế tăng cường/Thực tế ảo)</p>
                    <div className='my-5 flex items-center justify-between md:flex-none md:items-start md:justify-start'>
                    <Button className="bg-green-light text-white font-semibold mr-10 transition-all duration-300 hover:scale-95">Tham gia</Button>
                    <Button className="bg-yellow text-white font-semibold transition-all duration-300 hover:scale-95">Tìm hiểu thêm</Button>
                    </div>
                </div>
            </div>
            <div className='px-[50px] py-14 bg-no-repeat bg-cover bg-center h-auto relative text-white'  style={{backgroundImage: `url("/images/bg-event-author.jpg")`}}>
                <h2 className='text-yellow font-semibold text-2xl text-center'>CÁC NHÀ ĐỒNG SÁNG TẠO</h2>
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8'>
                    <div>
                        <img className='w-full object-cover' src="/images/instrutor.jpg" alt="" />
                        <h3 className='font-medium leading-10 text-lg'>Nguyễn nhật</h3>
                        <p>CEO TECHVIET PRODUCTION</p>
                    </div>
                    <div>
                        <img className='w-full object-cover' src="/images/instrutor1.jpg" alt="" />
                        <h3 className='font-medium leading-10 text-lg'>NGUYỄN NHẬT NAM</h3>
                        <p>CEO TECHVIET PRODUCTION</p>
                    </div>
                    <div>
                        <img className='w-full object-cover' src="/images/instrutor2.jpg" alt="" />
                        <h3 className='font-medium leading-10 text-lg'>NGUYỄN NAM</h3>
                        <p>CEO TECHVIET PRODUCTION</p>
                    </div>
                    <div>
                        <img className='w-full object-cover' src="/images/instrutor3.jpg" alt="" />
                        <h3 className='font-medium leading-10 text-lg'>JHONNY ĐẶNG</h3>
                        <p>CEO TECHVIET PRODUCTION</p>
                    </div>
                    <div>
                        <img className='w-full object-cover' src="/images/instrutor4.jpg" alt="" />
                        <h3 className='font-medium leading-10 text-lg'>NGÔ HENRY</h3>
                        <p>CEO TECHVIET PRODUCTION</p>
                    </div>
                    <div>
                        <img className='w-full object-cover' src="/images/instrutor5.jpg" alt="" />
                        <h3 className='font-medium leading-10 text-lg'>VƯƠNG PHẠM VN</h3>
                        <p>CEO TECHVIET PRODUCTION</p>
                    </div>
                    <div>
                        <img className='w-full object-cover' src="/images/instrutor6.jpg" alt="" />
                        <h3 className='font-medium leading-10 text-lg'>ROBER IMACU</h3>
                        <p>CEO TECHVIET PRODUCTION</p>
                    </div>
                    <div>
                        <img className='w-full object-cover' src="/images/instrutor5.jpg" alt="" />
                        <h3 className='font-medium leading-10 text-lg'>KHOA PUG</h3>
                        <p>CEO TECHVIET PRODUCTION</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
