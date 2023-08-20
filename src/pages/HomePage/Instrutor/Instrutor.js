import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Rate } from 'antd';
import "./instrutor.css"

export default function Instrutor() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 6,
    slidesToScroll: 6,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ],
  };
  return (
    <div className='px-[20px] py-[40px] md:p-[50px]'>
      <h3 className='text-xl md:text-2xl font-semibold'>Giảng viên hàng đầu</h3>
      <div>
        <Slider {...settings} className='text-center my-10'>
          <div className='max-w-[150px] mx-auto'>
            <img className='w-20 h-20 rounded-full object-cover mx-auto' src="./images/instrutor.jpg" alt="" />
            <h4 className='font-semibold'>Big DadMoon</h4>
            <span className='leading-6 font-normal'>Chuyên gia lĩnh vực lập trình</span>
            <Rate disabled defaultValue={5} />
            <div className='text-gray-400'>100 Đánh giá</div>
          </div>
          <div className='max-w-[150px] mx-auto'>
            <img className='w-20 h-20 rounded-full object-cover mx-auto' src="./images/instrutor2.jpg" alt="" />
            <h4 className='font-semibold'>Bladin Slaham</h4>
            <span className='leading-6 font-normal'>Chuyên gia hệ thống máy tính</span>
            <Rate disabled defaultValue={5} />
            <div className='text-gray-400'>100 Đánh giá</div>
          </div>
          <div className='max-w-[150px] mx-auto'>
            <img className='w-20 h-20 rounded-full object-cover mx-auto' src="./images/instrutor3.jpg" alt="" />
            <h4 className='font-semibold'>Chris Andersan</h4>
            <span className='leading-6 font-normal'>Chuyên gia lĩnh vực Full Skill</span>
            <Rate disabled defaultValue={5} />
            <div className='text-gray-400'>100 Đánh giá</div>
          </div>
          <div className='max-w-[150px] mx-auto'>
            <img className='w-20 h-20 rounded-full object-cover mx-auto' src="./images/instrutor4.jpg" alt="" />
            <h4 className='font-semibold'>VueLo Gadi</h4>
            <span className='leading-6 font-normal'>Chuyên gia lĩnh vực Phân tích</span>
            <Rate disabled defaultValue={5} />
            <div className='text-gray-400'>100 Đánh giá</div>
          </div>
          <div className='max-w-[150px] mx-auto'>
            <img className='w-20 h-20 rounded-full object-cover mx-auto' src="./images/instrutor5.jpg" alt="" />
            <h4 className='font-semibold'>Hoàng Nam</h4>
            <span className='leading-6 font-normal'>Chuyên gia lĩnh vực PHP</span>
            <Rate disabled defaultValue={5} />
            <div className='text-gray-400'>100 Đánh giá</div>
          </div>
          <div className='max-w-[150px] mx-auto'>
            <img className='w-20 h-20 rounded-full object-cover mx-auto' src="./images/instrutor6.jpg" alt="" />
            <h4 className='font-semibold'>David Ngô Savani</h4>
            <span className='leading-6 font-normal'>Chuyên gia lĩnh vực Front End</span>
            <Rate disabled defaultValue={5} />
            <div className='text-gray-400'>100 Đánh giá</div>
          </div>
          <div className='max-w-[150px] mx-auto'>
            <img className='w-20 h-20 rounded-full object-cover mx-auto' src="./images/instrutor1.jpg" alt="" />
            <h4 className='font-semibold'>IcarDi MenBor</h4>
            <span className='leading-6 font-normal'>Chuyên gia ngôn ngữ Vue Js</span>
            <Rate disabled defaultValue={5} />
            <div className='text-gray-400'>100 Đánh giá</div>
          </div>
        </Slider>
      </div>
    </div>
  )
}
