import React from 'react'

export default function CoursesContainer() {
    return (
        <div className='px-[20px] py-[40px] md:p-[50px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 text-center text-white'>
            <div className='bg-[#264653] p-8'>
                <h3 className='font-semibold'>CHƯƠNG TRÌNH HỌC</h3>
                <i className="las la-laptop text-5xl"></i>
                <span className='block text-xl font-medium'>300</span>
            </div>
            <div className='bg-[#2a9d8f] p-8'>
                <h3 className='font-semibold'>NHÀ SÁNG TẠO</h3>
                <i className="las la-camera text-5xl"></i>
                <span className='block text-xl font-medium'>10000</span>
            </div>
            <div className='bg-[#e9c46a] p-8'>
                <h3 className='font-semibold'>NHÀ THIẾT KẾ</h3>
                <i className="las la-suitcase text-5xl"></i>
                <span className='block text-xl font-medium'>400</span>
            </div>
            <div className='bg-[#f4a261] p-8'>
                <h3 className='font-semibold'>BÀI GIẢNG</h3>
                <i className="las la-book text-5xl"></i>
                <span className='block text-xl font-medium'>3000</span>
            </div>
            <div className='bg-[#ee8959] p-8'>
                <h3 className='font-semibold'>VIDEO</h3>
                <i className="lar la-play-circle text-5xl"></i>
                <span className='block text-xl font-medium'>400000</span>
            </div>
            <div className='bg-[#e76f51] p-8'>
                <h3 className='font-semibold'>LĨNH VỰC</h3>
                <i className="las la-dice-d20 text-5xl"></i>
                <span className='block text-xl font-medium'>200</span>
            </div>
        </div>
    )
}
