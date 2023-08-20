import React from 'react'
import BlockTitle from '../../components/layout/BlockTitle/BlockTitle'
import Button from '../../components/Button/Button'

export default function BlogPage() {
    return (
        <div>
            <BlockTitle title="BLOG" desc="THÔNG TIN CÔNG NGHỆ SỐ!!!" />
            <div className='px-[20px] md:px-[50px] mt-10 flex items-center'>
                <i className="las la-bullhorn text-3xl mr-3 text-pink-500"></i>
                PHÙ HỢP VỚI BẠN
            </div>
            <div className='px-[20px] md:px-[50px] my-8 grid grid-cols-1 lg:grid-cols-3 lg:gap-x-10'>
                <div className='col-span-2'>
                    <div className='grid md:grid-cols-2 gap-6'>
                        <div className='rounded-lg'>
                            <img className='w-full h-[300px] object-cover rounded-t-lg' src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80" alt="" />
                            <h3 className='text-lg md:text-xl font-semibold mt-2'>Thời gian và động lực</h3>
                            <div className='my-2 flex items-center justify-between'>
                                <div className='flex items-center'>
                                    <div className='flex items-center mr-2'>
                                        <i className="lar la-thumbs-up text-lg md:text-2xl text-green-light mr-1"></i>
                                        300
                                    </div>
                                    <div className='flex items-center mr-2'>
                                        <i className="las la-comment-alt text-lg md:text-2xl text-green-light mr-1"></i>
                                        500
                                    </div>
                                    <div className='flex items-center mr-2'>
                                        <i className="lar la-eye text-lg md:text-2xl text-green-light mr-1"></i>
                                        200
                                    </div>
                                </div>
                                <div className='text-right'>
                                    Đăng bởi
                                    <span className='text-pink-500'> Jhoyny Đặng</span>
                                </div>
                            </div>
                            <p className='text-gray-500 text-sm md:text-base'>Có lẽ cũng rất lâu rồi mà tôi chưa đụng đến thứ được gọi là "timetable". Hay dân dã hơn thì người ta hay gọi là "Lịch thường nhật",...</p>
                            <Button type='text' className='block mt-4 px-3 py-1.5 bg-yellow text-white font-semibold hover:scale-95 transition-all duration-300'>Xem thêm</Button>
                        </div>
                        <div className='rounded-lg'>
                            <img className='w-full h-[300px] object-contain rounded-t-lg' src="https://nentang.vn/wp-content/uploads/2018/07/html-css-js-course-intro.jpeg" alt="" />
                            <h3 className='text-lg md:text-xl font-semibold mt-2'>Cấu trúc cơ bản trong HTML</h3>
                            <div className='my-2 flex items-center justify-between'>
                                <div className='flex items-center'>
                                    <div className='flex items-center mr-2'>
                                        <i className="lar la-thumbs-up text-lg md:text-2xl text-green-light mr-1"></i>
                                        300
                                    </div>
                                    <div className='flex items-center mr-2'>
                                        <i className="las la-comment-alt text-lg md:text-2xl text-green-light mr-1"></i>
                                        500
                                    </div>
                                    <div className='flex items-center mr-2'>
                                        <i className="lar la-eye text-lg md:text-2xl text-green-light mr-1"></i>
                                        200
                                    </div>
                                </div>
                                <div className='text-right'>
                                    Đăng bởi
                                    <span className='text-pink-500'> Jhoyny Đặng</span>
                                </div>
                            </div>
                            <p className='text-gray-500 text-sm md:text-base'>Custom theme Material UI với TypeScript đơn giản, hiệu quả...</p>
                            <Button type='text' className='block mt-4 px-3 py-1.5 bg-yellow text-white font-semibold hover:scale-95 transition-all duration-300'>Xem thêm</Button>
                        </div>
                        <div className='rounded-lg'>
                            <img className='w-full h-[300px] object-cover rounded-t-lg' src="data:image/jpeg;base64,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" alt="" />
                            <h3 className='text-lg md:text-xl font-semibold mt-2'>Material UI custom theme với TypeScript</h3>
                            <div className='my-2 flex items-center justify-between'>
                                <div className='flex items-center'>
                                    <div className='flex items-center mr-2'>
                                        <i className="lar la-thumbs-up text-lg md:text-2xl text-green-light mr-1"></i>
                                        300
                                    </div>
                                    <div className='flex items-center mr-2'>
                                        <i className="las la-comment-alt text-lg md:text-2xl text-green-light mr-1"></i>
                                        500
                                    </div>
                                    <div className='flex items-center mr-2'>
                                        <i className="lar la-eye text-lg md:text-2xl text-green-light mr-1"></i>
                                        200
                                    </div>
                                </div>
                                <div className='text-right'>
                                    Đăng bởi
                                    <span className='text-pink-500'> Jhoyny Đặng</span>
                                </div>
                            </div>
                            <p className='text-gray-500 text-sm md:text-base'>Trắc hẳn ai cũng biết một trang web thì không thể nào thiếu đi HTML và HTML làm nên cấu trúc của một trang web...</p>
                            <Button type='text' className='block mt-4 px-3 py-1.5 bg-yellow text-white font-semibold hover:scale-95 transition-all duration-300'>Xem thêm</Button>
                        </div>
                        <div className='rounded-lg'>
                            <img className='w-full h-[300px] object-cover rounded-t-lg' src="https://makerkit.dev/assets/images/posts/migrating-nextjs-server-components.webp" alt="" />
                            <h3 className='text-lg md:text-xl font-semibold mt-2'>Cách tạo một component nhanh chóng chỉ bằng 3 ký tự</h3>
                            <div className='my-2 flex items-center justify-between'>
                                <div className='flex items-center'>
                                    <div className='flex items-center mr-2'>
                                        <i className="lar la-thumbs-up text-lg md:text-2xl text-green-light mr-1"></i>
                                        300
                                    </div>
                                    <div className='flex items-center mr-2'>
                                        <i className="las la-comment-alt text-lg md:text-2xl text-green-light mr-1"></i>
                                        500
                                    </div>
                                    <div className='flex items-center mr-2'>
                                        <i className="lar la-eye text-lg md:text-2xl text-green-light mr-1"></i>
                                        200
                                    </div>
                                </div>
                                <div className='text-right'>
                                    Đăng bởi
                                    <span className='text-pink-500'> Jhoyny Đặng</span>
                                </div>
                            </div>
                            <p className='text-gray-500 text-sm md:text-base'>Tạo một component nhiều lúc cũng khá mất nhiều thời gian nên mình xin giới thiệu extention này cho mọi người nhé...</p>
                            <Button type='text' className='block mt-4 px-3 py-1.5 bg-yellow text-white font-semibold hover:scale-95 transition-all duration-300'>Xem thêm</Button>
                        </div>
                        <div className='rounded-lg'>
                            <img className='w-full h-[300px] object-cover rounded-t-lg' src="data:image/png;base64,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" alt="" />
                            <h3 className='text-lg md:text-xl font-semibold mt-2'>Xử lý bất đồng bộ trong Javascript (phần 2)</h3>
                            <div className='my-2 flex items-center justify-between'>
                                <div className='flex items-center'>
                                    <div className='flex items-center mr-2'>
                                        <i className="lar la-thumbs-up text-lg md:text-2xl text-green-light mr-1"></i>
                                        300
                                    </div>
                                    <div className='flex items-center mr-2'>
                                        <i className="las la-comment-alt text-lg md:text-2xl text-green-light mr-1"></i>
                                        500
                                    </div>
                                    <div className='flex items-center mr-2'>
                                        <i className="lar la-eye text-lg md:text-2xl text-green-light mr-1"></i>
                                        200
                                    </div>
                                </div>
                                <div className='text-right'>
                                    Đăng bởi
                                    <span className='text-pink-500'> Jhoyny Đặng</span>
                                </div>
                            </div>
                            <p className='text-gray-500 text-sm md:text-base'>Async/await là cơ chế giúp bạn thực thi các thao tác bất đồng bộ một cách tuần tự hơn , giúp đoạn code nhìn qua tưởng như đồng...</p>
                            <Button type='text' className='block mt-4 px-3 py-1.5 bg-yellow text-white font-semibold hover:scale-95 transition-all duration-300'>Xem thêm</Button>
                        </div>
                        <div className='rounded-lg'>
                            <img className='w-full h-[300px] object-cover rounded-t-lg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL0DJIsbYBGQa1hTL9S76A7gJfkzterJRdGA&usqp=CAU" alt="" />
                            <h3 className='text-lg md:text-xl font-semibold mt-2'>TyperScrip là gì, Vì sao nên dùng TyperScript</h3>
                            <div className='my-2 flex items-center justify-between'>
                                <div className='flex items-center'>
                                    <div className='flex items-center mr-2'>
                                        <i className="lar la-thumbs-up text-lg md:text-2xl text-green-light mr-1"></i>
                                        300
                                    </div>
                                    <div className='flex items-center mr-2'>
                                        <i className="las la-comment-alt text-lg md:text-2xl text-green-light mr-1"></i>
                                        500
                                    </div>
                                    <div className='flex items-center mr-2'>
                                        <i className="lar la-eye text-lg md:text-2xl text-green-light mr-1"></i>
                                        200
                                    </div>
                                </div>
                                <div className='text-right'>
                                    Đăng bởi
                                    <span className='text-pink-500'> Jhoyny Đặng</span>
                                </div>
                            </div>
                            <p className='text-gray-500 text-sm md:text-base'>Link khóa học cho anh em nào tò mò Đừng lo vì tất cả đều miễn......</p>
                            <Button type='text' className='block mt-4 px-3 py-1.5 bg-yellow text-white font-semibold hover:scale-95 transition-all duration-300'>Xem thêm</Button>
                        </div>
                    </div>
                </div>
                <div className='col-span-1 mt-10 lg:mt-0'>
                    <div className='border border-gray-500'>
                        <h4 className='font-medium text-lg text-center p-2 border-b border-b-gray-500 border-t-[3px] border-t-green-light'>Các chủ đề được đề xuất</h4>
                        <div className='px-4'>
                            <ul className='text-gray-400'>
                                <li className='cursor-pointer leading-10 transition-all duration-300 hover:-translate-y-1 hover:text-green-light'>
                                    Front-end / Mobile apps
                                </li>
                                <li className='cursor-pointer leading-10 transition-all duration-300 hover:-translate-y-1 hover:text-green-light'>
                                    UI / UX / Design
                                </li>
                                <li className='cursor-pointer leading-10 transition-all duration-300 hover:-translate-y-1 hover:text-green-light'>
                                    BACK-END
                                </li>
                                <li className='cursor-pointer leading-10 transition-all duration-300 hover:-translate-y-1 hover:text-green-light'>
                                    Thư viện
                                </li>
                                <li className='cursor-pointer leading-10 transition-all duration-300 hover:-translate-y-1 hover:text-green-light'>
                                    Chia sẻ người trong nghề
                                </li>
                                <li className='cursor-pointer leading-10 transition-all duration-300 hover:-translate-y-1 hover:text-green-light'>
                                    Châm ngôn IT
                                </li>
                                <li className='cursor-pointer leading-10 transition-all duration-300 hover:-translate-y-1 hover:text-green-light'>
                                    Chủ đề khác
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='mt-10 border border-gray-500'>
                        <h4 className='font-medium text-lg text-center p-2 border-b border-b-gray-500 border-t-[3px] border-t-green-light'>Bài đăng được đề xuất</h4>
                        <div className='px-4 py-10'>
                            <ul>
                                <li>
                                    <h4 className='font-medium'>Routing trong reactjs</h4>
                                    <p className='text-gray-500 my-2'>Chúng ta sẽ cùng nhau tìm hiểu cách routing trong reactjs...</p>
                                    <div className='flex items-center'>
                                        <img src="./images/instrutor.jpg" className='w-12 h-12 object-cover rounded-full' alt="error image" />
                                        <span className='ml-3 font-medium'>Nguyên Văn</span>
                                    </div>
                                </li>
                                <li className='mt-14'>
                                    <h4 className='font-medium'>Lập trình hướng đối tượng oop</h4>
                                    <p className='text-gray-500 my-2'>Chúng ta sẽ cùng nhau tìm hiểu cách oop trong reactjs...</p>
                                    <div className='flex items-center'>
                                        <img src="./images/instrutor1.jpg" className='w-12 h-12 object-cover rounded-full' alt="error image" />
                                        <span className='ml-3 font-medium'>Nguyên Văn Vũ</span>
                                    </div>
                                </li>
                                <li className='mt-14'>
                                    <h4 className='font-medium'>Xử Lý Bất Đồng Bộ Trong Javascript</h4>
                                    <p className='text-gray-500 my-2'>Chắc chắn khi lập trình, bạn sẽ có các công việc cần thời gian delay (gọi API, lấy dữ liệu từ Database, đọc/ghi file,...). Và đây...</p>
                                    <div className='flex items-center'>
                                        <img src="./images/instrutor2.jpg" className='w-12 h-12 object-cover rounded-full' alt="error image" />
                                        <span className='ml-3 font-medium'>Nguyên Minh</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
