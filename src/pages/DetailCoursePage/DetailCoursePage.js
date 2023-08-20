import React, { useEffect, useState } from 'react'
import BlockTitle from '../../components/layout/BlockTitle/BlockTitle'
import { useParams } from 'react-router-dom'
import { Button, Input, Modal, Rate } from 'antd'
import { courseServ } from '../../services/courseServ'
import { SUCCESS } from '../../utils/constant'
import { localUser } from '../../utils/localUser'
import "./DetailCoursePage.css"
import CourseItem from '../../components/layout/CourseItem/CourseItem'
const { confirm } = Modal;

export default function DetailCoursePage() {
  const { course } = useParams()
  const [courseDetail, setCourseDetail] = useState(null)
  const [modal, contextHolder] = Modal.useModal();
  const [courses, setCourses] = useState([])
  const fetchCourseList = async () => {
    try {
      const result = await courseServ.getCourseList()
      setCourses(result.data)
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    fetchCourseList()
  }, [])
  const countDown = (icon, title) => {
    let secondsToGo = 5
    const instance = modal.success({
      icon: <i className={`${icon} w-12 h-12 rounded-full flex items-center justify-center text-white bg-green-light text-2xl mx-auto`}></i>,
      title: <div className='text-green-light text-center mt-2 font-medium text-xl'>{title}</div>,
      content: <div className='text-right text-base text-slate-700'>{`Sẽ thoát sau ${secondsToGo} giây.`}</div>,
    });
    const timer = setInterval(() => {
      secondsToGo -= 1;
      instance.update({
        content: <div className='text-right text-base text-slate-700'>{`Sẽ thoát sau ${secondsToGo} giây.`}</div>,
      });
    }, 1000);
    setTimeout(() => {
      clearInterval(timer);
      instance.destroy();
    }, secondsToGo * 1000);
  };
  const fetchCourseDetail = async () => {
    try {
      const result = await courseServ.getCourseDetail(course)
      if (result.status === SUCCESS) {
        setCourseDetail(result.data)
      }
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    fetchCourseDetail()
  }, [course])


  const handleRegisterCourse = async () => {
    confirm({
      icon: "",
      title: <div className='text-base font-medium'>Bạn có muốn đăng ký khóa học <span className='text-green-light text-lg'>{courseDetail.tenKhoaHoc} này không?</span></div>,
      okText: 'Yes',
      cancelText: 'No',
      async onOk() {
        const boughtTheCourse = {
          maKhoaHoc: course,
          taiKhoan: localUser.get()?.taiKhoan
        }
        try {
          const result = await courseServ.registerCourse(boughtTheCourse)
          if (result.status === SUCCESS) {
            countDown("las la-check", "Đăng ký thành công")
          }
        } catch (err) {
          countDown("las la-exclamation", "Đã đăng ký khóa học này rồi")
        }
      },
      onCancel() {
      }
    })

  }

  return (
    <div>
      {/* <Button onClick={countDown}>Open modal to close in 5s</Button> */}
      {contextHolder}
      <BlockTitle title="THÔNG TIN KHÓA HỌC" desc="TIẾN LÊN VÀ KHÔNG CHẦN CHỪ !!!" />
      <div className='px-[20px] py-[30px] md:p-[50px] pb-0'>
        <div className='flex flex-col-reverse md:grid grid-cols-3 gap-10'>
          <div className='md:col-span-2'>
            <h2 className='text-2xl font-semibold'>{courseDetail?.tenKhoaHoc}</h2>
            <div className='py-8 md:grid md:grid-cols-3'>
              <div className='flex items-center'>
                <img className='w-14 h-14 object-cover rounded-full' src="/images/instrutor3.jpg" alt="error image" />
                <div className='ml-3'>
                  <h4 className='text-gray-400 text-sm font-medium'>Giảng viên</h4>
                  <h4 className='font-medium'>{courseDetail?.nguoiTao.hoTen}</h4>
                </div>
              </div>
              <div className='flex items-center'>
                <i className="las la-graduation-cap text-5xl text-green-light"></i>
                <div className='ml-2 my-4 md:my-0'>
                  <h4 className='text-gray-400 text-sm font-medium'>Lĩnh vực</h4>
                  <h4 className='font-medium'>{courseDetail?.danhMucKhoaHoc.tenDanhMucKhoaHoc}</h4>
                </div>
              </div>
              <div className='flex items-center'>
                <div className='ml-3'>
                  <Rate disabled defaultValue={4} />
                  <h4 className='text-gray-400 text-sm font-medium text-right'>{courseDetail?.luotXem} Đánh giá</h4>
                </div>
              </div>
            </div>
            <p className='pb-6 border-b border-b-gray-400'>React.js là thư viện JavaScript phổ biến nhất mà bạn có thể sử dụng và tìm hiểu ngày nay để xây dựng giao diện người dùng hiện đại, phản ứng cho web.Khóa học này dạy bạn về React chuyên sâu, từ cơ bản, từng bước đi sâu vào tất cả các kiến ​​thức cơ bản cốt lõi, khám phá rất nhiều ví dụ và cũng giới thiệu cho bạn các khái niệm nâng cao.Bạn sẽ nhận được tất cả lý thuyết, hàng tấn ví dụ và bản trình diễn, bài tập và bài tập cũng như vô số kiến ​​thức quan trọng bị hầu hết các nguồn khác bỏ qua - sau cùng, có một lý do tại sao khóa học này lại rất lớn! Và trong trường hợp bạn thậm chí không biết tại sao bạn lại muốn học React và bạn chỉ ở đây vì một số quảng cáo hoặc "thuật toán" - đừng lo lắng: ReactJS là một công nghệ quan trọng với tư cách là một nhà phát triển web và trong khóa học này, tôi sẽ cũng giải thích TẠI SAO điều đó lại quan trọng!</p>
            <div className='pt-6'>
              <h3 className='text-xl font-semibold'>Những gì bạn sẽ học</h3>
              <div className='grid md:grid-cols-2 gap-x-10'>
                <ul>
                  <li className='mb-1 text-justify'>
                    <i className="las la-check text-2xl text-yellow mr-1"></i>
                    Xây dựng các ứng dụng web mạnh mẽ, nhanh chóng, thân thiện với người dùng và phản ứng nhanh
                  </li>
                  <li className='mb-1 text-justify'>
                    <i className="las la-check text-2xl text-yellow mr-1"></i>
                    Đăng ký công việc được trả lương cao hoặc làm freelancer trong một trong những lĩnh vực được yêu cầu nhiều nhất mà bạn có thể tìm thấy trong web dev ngay bây giờ
                  </li>
                  <li className='mb-1 text-justify'>
                    <i className="las la-check text-2xl text-yellow mr-1"></i>
                    Cung cấp trải nghiệm người dùng tuyệt vời bằng cách tận dụng sức mạnh của JavaScript một cách dễ dàng
                  </li>
                  <li>
                    <i className="las la-check text-2xl text-yellow mr-1"></i>
                    Tìm hiểu tất cả về React Hooks và React Components
                  </li>
                </ul>
                <ul>
                  <li className='mb-1 text-justify'>
                    <i className="las la-check text-2xl text-yellow mr-1"></i>
                    Thông thạo chuỗi công cụ hỗ trợ React, bao gồm cú pháp Javascript NPM, Webpack, Babel và ES6 / ES2015
                  </li>
                  <li className='mb-1 text-justify'>
                    <i className="las la-check text-2xl text-yellow mr-1"></i>
                    Nhận ra sức mạnh của việc xây dựng các thành phần có thể kết hợp
                  </li>
                  <li className='mb-1 text-justify'>
                    <i className="las la-check text-2xl text-yellow mr-1"></i>
                    Hãy là kỹ sư giải thích cách hoạt động của Redux cho mọi người, bởi vì bạn biết rất rõ các nguyên tắc cơ bản
                  </li>
                  <li>
                    <i className="las la-check text-2xl text-yellow mr-1"></i>
                    Nắm vững các khái niệm cơ bản đằng sau việc cấu trúc các ứng dụng Redux
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <h3 className='text-2xl font-bold my-6'>Nội dung khóa học</h3>
              <div className='font-semibold text-xl'>
                MỤC 1: GIỚI THIỆU
                <Button className='ml-4 font-bold border border-green-light text-green-light hover:bg-green-light hover:text-white'>XEM TRƯỚC</Button>
              </div>
              <div className='my-6'>
                <h4 className='text-lg'>Bài học</h4>
                <div className='group text-[#8c8c8c] flex justify-between cursor-pointer'>
                  <div className='flex my-3 md:my-4 items-center'>
                    <i className="las la-play w-6 h-6 bg-green-light rounded-full flex items-center justify-center text-white"></i>
                    <div className='ml-3 transition-all duration-200 group-hover:text-green-light group-hover:scale-95'>Các khái niệm về React Component</div>
                  </div>
                  <div className='flex items-center'>
                    <i className="fa-solid fa-clock text-green-light text-2xl"></i>
                    <span className='ml-2'>14:35</span>
                  </div>
                </div>
                <div className='group text-[#8c8c8c] flex justify-between cursor-pointer'>
                  <div className='flex my-3 md:my-4 items-center'>
                    <i className="las la-play w-6 h-6 bg-green-light rounded-full flex items-center justify-center text-white"></i>
                    <div className='ml-3 transition-all duration-200 group-hover:text-green-light group-hover:scale-95'>Thiết lập môi trường cho Windows</div>
                  </div>
                  <div className='flex items-center'>
                    <i className="fa-solid fa-clock text-green-light text-2xl"></i>
                    <span className='ml-2'>14:35</span>
                  </div>
                </div>
                <div className='group text-[#8c8c8c] flex justify-between cursor-pointer'>
                  <div className='flex my-3 md:my-4 items-center'>
                    <i className="las la-play w-6 h-6 bg-green-light rounded-full flex items-center justify-center text-white"></i>
                    <div className='ml-3 transition-all duration-200 group-hover:text-green-light group-hover:scale-95'>Tạo ứng dụng React - React-Scripts</div>
                  </div>
                  <div className='flex items-center'>
                    <i className="fa-solid fa-clock text-green-light text-2xl"></i>
                    <span className='ml-2'>14:35</span>
                  </div>
                </div>
                <div className='group text-[#8c8c8c] flex justify-between cursor-pointer'>
                  <div className='flex my-3 md:my-4 items-center'>
                    <i className="las la-play w-6 h-6 bg-green-light rounded-full flex items-center justify-center text-white"></i>
                    <div className='ml-3 transition-all duration-200 group-hover:text-green-light group-hover:scale-95'>Ghi chú nhanh về dấu ngoặc kép cho string interpolation</div>
                  </div>
                  <div className='flex items-center'>
                    <i className="fa-solid fa-clock text-green-light text-2xl"></i>
                    <span className='ml-2'>14:35</span>
                  </div>
                </div>
              </div>
              <div className='font-semibold text-xl'>
                MỤC 2: KIẾN THỨC CĂN BẢN
                <Button className='ml-4 font-bold border border-green-light text-green-light hover:bg-green-light hover:text-white'>XEM TRƯỚC</Button>
              </div>
              <div className='my-6'>
                <h4 className='text-lg'>Bài học</h4>
                <div className='group text-[#8c8c8c] flex justify-between cursor-pointer'>
                  <div className='flex my-3 md:my-4 items-center'>
                    <i className="las la-play w-6 h-6 bg-green-light rounded-full flex items-center justify-center text-white"></i>
                    <div className='ml-3 transition-all duration-200 group-hover:text-green-light group-hover:scale-95'>Trang chủ và thành phần thư mục</div>
                  </div>
                  <div className='flex items-center'>
                    <i className="fa-solid fa-clock text-green-light text-2xl"></i>
                    <span className='ml-2'>14:35</span>
                  </div>
                </div>
                <div className='group text-[#8c8c8c] flex justify-between cursor-pointer'>
                  <div className='flex my-3 md:my-4 items-center'>
                    <i className="las la-play w-6 h-6 bg-green-light rounded-full flex items-center justify-center text-white"></i>
                    <div className='ml-3 transition-all duration-200 group-hover:text-green-light group-hover:scale-95'>Hướng dẫn khóa học + Liên kết Github</div>
                  </div>
                  <div className='flex items-center'>
                    <i className="fa-solid fa-clock text-green-light text-2xl"></i>
                    <span className='ml-2'>14:35</span>
                  </div>
                </div>
                <div className='group text-[#8c8c8c] flex justify-between cursor-pointer'>
                  <div className='flex my-3 md:my-4 items-center'>
                    <i className="las la-play w-6 h-6 bg-green-light rounded-full flex items-center justify-center text-white"></i>
                    <div className='ml-3 transition-all duration-200 group-hover:text-green-light group-hover:scale-95'>Trang chủ thương mại điện tử + thiết lập SASS</div>
                  </div>
                  <div className='flex items-center'>
                    <i className="fa-solid fa-clock text-green-light text-2xl"></i>
                    <span className='ml-2'>14:35</span>
                  </div>
                </div>
                <div className='group text-[#8c8c8c] flex justify-between cursor-pointer'>
                  <div className='flex my-3 md:my-4 items-center'>
                    <i className="las la-play w-6 h-6 bg-green-light rounded-full flex items-center justify-center text-white"></i>
                    <div className='ml-3 transition-all duration-200 group-hover:text-green-light group-hover:scale-95'>Tệp CSS và SCSS</div>
                  </div>
                  <div className='flex items-center'>
                    <i className="fa-solid fa-clock text-green-light text-2xl"></i>
                    <span className='ml-2'>14:35</span>
                  </div>
                </div>
                <div className='group text-[#8c8c8c] flex justify-between cursor-pointer'>
                  <div className='flex my-3 md:my-4 items-center'>
                    <i className="las la-play w-6 h-6 bg-green-light rounded-full flex items-center justify-center text-white"></i>
                    <div className='ml-3 transition-all duration-200 group-hover:text-green-light group-hover:scale-95'>React 17: Cập nhật các gói + Phiên bản React mới nhất</div>
                  </div>
                  <div className='flex items-center'>
                    <i className="fa-solid fa-clock text-green-light text-2xl"></i>
                    <span className='ml-2'>14:35</span>
                  </div>
                </div>
              </div>
              <div className='font-semibold text-xl'>
                MỤC 3: KIẾN THỨC CHUYÊN SÂU
                <Button className='ml-4 font-bold border border-green-light text-green-light hover:bg-green-light hover:text-white'>XEM TRƯỚC</Button>
              </div>
              <div className='my-6'>
                <h4 className='text-lg'>Bài học</h4>
                <div className='group text-[#8c8c8c] flex justify-between cursor-pointer'>
                  <div className='flex my-3 md:my-4 items-center'>
                    <i className="las la-play w-6 h-6 bg-green-light rounded-full flex items-center justify-center text-white"></i>
                    <div className='ml-3 transition-all duration-200 group-hover:text-green-light group-hover:scale-95'>connect() and mapStateToProps</div>
                  </div>
                  <div className='flex items-center'>
                    <i className="fa-solid fa-clock text-green-light text-2xl"></i>
                    <span className='ml-2'>14:35</span>
                  </div>
                </div>
                <div className='group text-[#8c8c8c] flex justify-between cursor-pointer'>
                  <div className='flex my-3 md:my-4 items-center'>
                    <i className="las la-play w-6 h-6 bg-green-light rounded-full flex items-center justify-center text-white"></i>
                    <div className='ml-3 transition-all duration-200 group-hover:text-green-light group-hover:scale-95'>Trạng thái thư mục vào Redux</div>
                  </div>
                  <div className='flex items-center'>
                    <i className="fa-solid fa-clock text-green-light text-2xl"></i>
                    <span className='ml-2'>14:35</span>
                  </div>
                </div>
                <div className='group text-[#8c8c8c] flex justify-between cursor-pointer'>
                  <div className='flex my-3 md:my-4 items-center'>
                    <i className="las la-play w-6 h-6 bg-green-light rounded-full flex items-center justify-center text-white"></i>
                    <div className='ml-3 transition-all duration-200 group-hover:text-green-light group-hover:scale-95'>Thành phần Tổng quan về Bộ sưu tập</div>
                  </div>
                  <div className='flex items-center'>
                    <i className="fa-solid fa-clock text-green-light text-2xl"></i>
                    <span className='ml-2'>14:35</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div className='md:col-span-1'>
            <div className='p-4 bg-white shadow-2xl'>
              <img className='w-full h-[240px] object-cover' src={courseDetail?.hinhAnh} alt="" />
              <div className='p-4'>
                <h3 className='text-xl font-semibold text-right mb-4'>500.000 <sup>đ</sup></h3>
                <Button onClick={handleRegisterCourse} className='w-full py-5 flex items-center justify-center text-green transition-all duration-300 border-green-light hover:text-white hover:bg-green-light 
              hover:scale-95'>ĐĂNG KÝ</Button>
                <div className='flex items-center justify-between mt-4'>
                  <div className='my-5 font-medium'>
                    <span className='text-[#8c8c8c]'>Ngày tạo: </span>
                    {courseDetail?.ngayTao}
                  </div>
                  <i className="las la-clock text-3xl text-green-light"></i>
                </div>
                <div className='flex items-center justify-between'>
                  <div className='my-5 font-medium'>
                    <span className='text-[#8c8c8c]'>Ghi danh: </span>
                    10 học viên
                  </div>
                  <i className="las la-user-graduate text-3xl text-green-light"></i>
                </div>
                <div className='flex items-center justify-between'>
                  <div className='my-5 font-medium'>
                    <span className='text-[#8c8c8c]'>Thời gian: </span>
                    18 giờ
                  </div>
                  <i className="las la-clock text-3xl text-green-light"></i>
                </div>
                <div className='flex items-center justify-between'>
                  <div className='my-5 font-medium'>
                    <span className='text-[#8c8c8c]'>Bài học: </span>
                    10
                  </div>
                  <i className="las la-book text-3xl text-green-light"></i>
                </div>
                <div className='flex items-center justify-between'>
                  <div className='my-5 font-medium'>
                    <span className='text-[#8c8c8c]'>Video: </span>
                    14
                  </div>
                  <i className="las la-photo-video text-3xl text-green-light"></i>
                </div>
                <div className='flex items-center justify-between'>
                  <div className='my-5 font-medium'>
                    <span className='text-[#8c8c8c]'>Trình độ: </span>
                    Người mới bắt đầu
                  </div>
                  <i className="las la-database text-3xl text-green-light"></i>
                </div>
                <Input className='border-green-light' placeholder='Nhập mã' />
              </div>
            </div>
          </div>
        </div>
        <div className='mt-10'>
          <h2 className='mb-10 font-semibold text-xl'>Khóa học tham khảo</h2>
          <div className='flex gap-6 md:gap-8 lg:gap-10 overflow-x-scroll lg:grid lg:grid-cols-4 lg:px-8'>
            {courses.slice(20, 24).map(course => {
              return <CourseItem key={course.maKhoaHoc} course={course} />
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

