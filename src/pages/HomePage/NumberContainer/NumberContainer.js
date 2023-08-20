import React from 'react'


export default function NumberContainer() {
  return (
    <div className='hidden lg:block bg-[#f0f8ff] p-[50px] my-10'>
        <div className='grid grid-cols-4 text-center'>
            <div>
                <img className='w-20 h-20 object-cover mx-auto' src="./images/number-container1.png" alt="Lỗi" />
                <h4 className='text-green-light font-bold text-6xl my-2'>9000</h4>
                <h3 className='font-medium text-lg'>học viên</h3>
            </div>
            <div>
            <img className='w-20 h-20 object-cover mx-auto' src="./images/number-container2.png" alt="Lỗi" />
                <h4 className='text-green-light font-bold text-6xl my-2'>1000</h4>
                <h3 className='font-medium text-lg'>Khóa học</h3>
            </div>
            <div>
            <img className='w-20 h-20 object-cover mx-auto' src="./images/number-container3.png" alt="Lỗi" />
                <h4 className='text-green-light font-bold text-6xl my-2'>33200</h4>
                <h3 className='font-medium text-lg'>Giờ học</h3>
            </div>
            <div>
            <img className='w-20 h-20 object-cover mx-auto' src="./images/number-container4.png" alt="Lỗi" />
                <h4 className='text-green-light font-bold text-6xl my-2'>400</h4>
                <h3 className='font-medium text-lg'>Giảng viên</h3>
            </div>
        </div>
    </div>
  )
}
