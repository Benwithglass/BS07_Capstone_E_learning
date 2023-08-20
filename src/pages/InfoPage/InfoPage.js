import React from 'react'

export default function InfoPage() {
  return (
    <div>
      <div className='bg-[50%] bg-no-repeat bg-cover bg-fixed py-[120px] md:p-[150px]' style={{ backgroundImage: `url(/images/slide-info-page.png)` }}>
        <div className='text-center lg:p-[50px]'>
          <h3 className='text-green-light text-lg md:text-xl font-medium'>V LEARNING HỌC LÀ VUI</h3>
          <h2 className='text-yellow text-2xl md:text-4xl font-bold lg:leading-[70px]'>Cùng nhau khám phá nhưng điều mới mẻ</h2>
          <h4 className='text-base md:text-lg text-white'>Học đi đôi với hành</h4>
        </div>
      </div>
      <div className='p-[20px] py-[40px] md:p-[50px] '>
        <div className='grid md:grid-cols-2 gap-8 mb-20'>
          <div>
            <h4 className='text-green-light text-xl font-bold'>V LEARNING ?</h4>
            <h3 className='text-4xl font-semibold'>Nơi hội tụ kiến thức</h3>
            <div className='flex items-center'>
              <span
                className='mt-4 text-left leading-8 text-[#8c8c8c] first-letter:font-serif first-letter:font-medium first-letter:text-[#cd5c5c] first-letter:text-6xl first-letter:float-left first-letter:mr-2'>
                Đây là nền tảng giảng dạy và học tập trực tuyến được xây dựng để hỗ trợ phát triển giáo dục trong thời đại công nghiệp 4.0, được xây dựng dựa trên cơ sở quan sát toàn bộ các nhu cầu cần thiết của một lớp học offline.
                Từ đó đáp ứng và đảm bảo cung cấp các công cụ toàn diện, dễ sử dụng cho giáo viên và học sinh, giúp tạo nên một lớp học trực tuyến thú vị và hấp dẫn.
              </span>
            </div>
          </div>
          <div>
            <img className='h-[380px] object-contain w-full' src="/images/img-info1.png" alt="" />
          </div>
        </div>
        <div className='grid md:grid-cols-2 gap-8 mb-20'>
          <div className='hidden md:block'>
            <img className='h-[380px] object-contain w-full' src="/images/img-info2.png" alt="" />
          </div>
          <div>
            <h4 className='text-green-light text-xl font-bold'>CHƯƠNG TRÌNH HỌC V LEARNING</h4>
            <h3 className='text-4xl font-semibold'>Hệ thống học hàng đầu</h3>
            <div className='flex items-center'>
              <span
                className='mt-4 text-left leading-8 text-[#8c8c8c] first-letter:font-serif first-letter:font-medium first-letter:text-[#cd5c5c] first-letter:text-6xl first-letter:float-left first-letter:mr-2'>
                Giảng viên đều là các chuyên viên thiết kế đồ họa và giảng viên của các trường đại học danh tiếng trong thành phố: Đại học CNTT, KHTN, Bách Khoa,…Trang thiết bị phục vụ học tập đầy đủ, phòng học máy lạnh, màn hình LCD, máy cấu hình mạnh, mỗi học viên thực hành trên một máy riêng.100% các buổi học đều là thực hành trên máy tính. Đào tạo với tiêu chí: “học để làm được việc”, mang lại cho học viên những kiến thức hữu ích nhất, sát với thực tế nhất.
              </span>
            </div>
          </div>
          <div className='md:hidden'>
            <img className='h-[380px] object-contain w-full' src="/images/img-info2.png" alt="" />
          </div>
        </div>
        <div className='grid md:grid-cols-2 gap-8 mb-20'>
          <div>
            <h4 className='text-green-light text-xl font-bold'>TẦM NHÌN V LEARNING</h4>
            <h3 className='text-4xl font-semibold'>Đào tạo lập trình chuyên sâu</h3>
            <div className='flex items-center'>
              <span
                className='mt-4 text-left leading-8 text-[#8c8c8c] first-letter:font-serif first-letter:font-medium first-letter:text-[#cd5c5c] first-letter:text-6xl first-letter:float-left first-letter:mr-2'>
                Trở thành hệ thống đào tạo lập trình chuyên sâu theo nghề hàng đầu khu vực, cung cấp nhân lực có tay nghề cao, chuyên môn sâu cho sự phát triển công nghiệp phần mềm trong thời đại công nghệ số hiện nay, góp phần giúp sự phát triển của xã hội, đưa Việt Nam thành cường quốc về phát triển phần mềm.giúp người học phát triển cả tư duy, phân tích, chuyên sâu nghề nghiệp, học tập suốt đời, sẵn sàng đáp ứng mọi nhu cầu của doanh nghiệp.
              </span>
            </div>
          </div>
          <div>
            <img className='h-[380px] object-contain w-full' src="/images/img-info3.png" alt="" />
          </div>
        </div>
        <div className='grid md:grid-cols-2 gap-8'>
          <div className='hidden md:block'>
            <img className='h-[380px] object-contain w-full' src="/images/img-info4.png" alt="" />
          </div>
          <div>
            <h4 className='text-green-light text-xl font-bold'>SỨ MỆNH V LEARNING</h4>
            <h3 className='text-4xl font-semibold'>Phương pháp đào tạo hiện đại</h3>
            <div className='flex items-center'>
              <span
                className='mt-4 text-left leading-8 text-[#8c8c8c] first-letter:font-serif first-letter:font-medium first-letter:text-[#cd5c5c] first-letter:text-6xl first-letter:float-left first-letter:mr-2'>
                Sử dụng các phương pháp đào tạo tiên tiến và hiện đại trên nền tảng công nghệ giáo dục, kết hợp phương pháp truyền thống, phương pháp trực tuyến, lớp học đảo ngược và học tập dựa trên dự án thực tế, phối hợp giữa đội ngũ training nhiều kinh nghiệm và yêu cầu từ các công ty, doanh nghiệp. Qua đó, V learning giúp người học phát triển cả tư duy, phân tích, chuyên sâu nghề nghiệp, học tập suốt đời, sẵn sàng đáp ứng mọi nhu cầu của doanh nghiệp.
              </span>
            </div>
          </div>
          <div className='md:hidden'>
            <img className='h-[380px] object-contain w-full' src="/images/img-info4.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
