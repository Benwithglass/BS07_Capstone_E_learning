import React from 'react'

export default function InfoCourseHome() {
    return (
        <div className='px-[20px] md:px-[50px] grid grid-cols-1 lg:grid-cols-3 gap-[20px] text-white'>
            <div className='p-4 bg-green-light rounded-lg'>
                <h3 className='font-semibold text-xl'>KHÓA HỌC</h3>
                <p className='font-medium'>Học qua dự án thực tế,
                    <span className='font-light'> học đi đôi với hành, không lý thuyết lan man, phân tích cội nguồn của vấn đề, xây dựng từ các ví dụ nhỏ đến thực thi một dự án lớn ngoài thực tế để học viên học xong làm được ngay</span>
                </p>
                <ul className='mt-2'>
                    <li className='leading-8 font-medium'>
                        <i className="las la-check text-xl font-bold mr-2"></i>
                        Hơn 1000 bài tập và dự án thực tế
                    </li>
                    <li className='leading-8 font-medium'>
                        <i className="las la-check text-xl font-bold mr-2"></i>
                        Công nghệ cập nhật mới nhất
                    </li>
                    <li className='leading-8 font-medium'>
                        <i className="las la-check text-xl font-bold mr-2"></i>
                        Hình ảnh, ví dụ, bài giảng sinh động trực quan
                    </li>
                    <li className='leading-8 font-medium'>
                        <i className="las la-check text-xl font-bold mr-2"></i>
                        Tư duy phân tích, giải quyết vấn đề trong dự án
                    </li>
                    <li className='leading-8 font-medium'>
                        <i className="las la-check text-xl font-bold mr-2"></i>
                        Học tập kinh nghiệm, qui trình làm dự án, các qui chuẩn trong dự án
                    </li>
                    <li className='leading-8 font-medium'>
                        <i className="las la-check text-xl font-bold mr-2"></i>
                        Cơ hội thực tập tại các công ty lớn như FPT, Microsoft
                    </li>
                </ul>
            </div>
            <div className='grid gap-[20px]'>
                <div className='bg-yellow rounded-lg p-4'>
                    <h2 className='font-bold text-xl'>LỘ TRÌNH PHÙ HỢP</h2>
                    <ul className='mt-2'>
                        <li className='leading-8 font-medium'>
                            <i className="las la-check text-xl font-bold mr-2"></i>
                            Lộ trình bài bản từ zero tới chuyên nghiệp, nâng cao
                        </li>
                        <li className='leading-8 font-medium'>
                            <i className="las la-check text-xl font-bold mr-2"></i>
                            Học, luyện tập code, kỹ thuật phân tích, soft skill
                        </li>
                        <li className='leading-8 font-medium'>
                            <i className="las la-check text-xl font-bold mr-2"></i>
                            Huấn luyện để phát triển năng lực và niềm đam mê lập trình
                        </li>
                    </ul>
                </div>
                <div className='bg-yellow rounded-lg p-4'>
                    <h2 className='font-bold text-xl'>GIẢNG VIÊN</h2>
                    <ul className='mt-2'>
                        <li className='leading-8 font-medium'>
                            <i className="las la-check text-xl font-bold mr-2"></i>
                            Tương tác cùng mentor và giảng viên qua phần thảo luận
                        </li>
                        <li className='leading-8 font-medium'>
                            <i className="las la-check text-xl font-bold mr-2"></i>
                            Review code và đưa ra các nhận xét góp ý
                        </li>
                        <li className='leading-8 font-medium'>
                            <i className="las la-check text-xl font-bold mr-2"></i>
                            Chấm điểm tương tác thảo luận giữa các học viên
                        </li>
                    </ul>
                </div>
            </div>
            <div className='grid gap-[20px]'>
                <div className='bg-[#5c8295] rounded-lg p-4'>
                    <h2 className='font-bold text-xl'>HỆ THỐNG HỌC TẬP</h2>
                    <ul className='mt-2'>
                        <li className='leading-8 font-medium'>
                            <i className="las la-check text-xl font-bold mr-2"></i>
                            Tự động chấm điểm trắc nghiệm và đưa câu hỏi tùy theo mức độ học viên
                        </li>
                        <li className='leading-8 font-medium'>
                            <i className="las la-check text-xl font-bold mr-2"></i>
                            Thống kê lượt xem video, làm bài, điểm số theo chu kỳ
                        </li>
                        <li className='leading-8 font-medium'>
                            <i className="las la-check text-xl font-bold mr-2"></i>
                            Thống kê, so sánh khả năng học của các học viên cùng level để đưa ra mục tiêu học tập
                        </li>
                    </ul>
                </div>
                <div className='bg-[#63c0a8] rounded-lg p-4'>
                    <h2 className='font-bold text-xl'>CHỨNG NHẬN</h2>
                    <ul className='mt-2'>
                        <li className='leading-8 font-medium'>
                            <i className="las la-check text-xl font-bold mr-2"></i>
                            Chấm bài và có thể vấn đáp trực tuyến để review
                        </li>
                        <li className='leading-8 font-medium'>
                            <i className="las la-check text-xl font-bold mr-2"></i>
                            Hệ thống của chúng tôi cũng tạo ra cho bạn một CV trực tuyến độc đáo
                        </li>
                        <li className='leading-8 font-medium'>
                            <i className="las la-check text-xl font-bold mr-2"></i>
                            Kết nối CV của bạn đến với các đối tác của V learning
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
