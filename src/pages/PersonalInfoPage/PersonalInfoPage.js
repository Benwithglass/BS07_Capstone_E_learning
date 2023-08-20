import React, { useEffect, useState } from 'react'
import { Tabs } from 'antd';
import InfoPage from './InfoPage/InfoPage';
import { userServ } from '../../services/userServ';
import BlockTitle from '../../components/layout/BlockTitle/BlockTitle';
import PurchasedCourse from './PurchasedCourse/PurchasedCourse';

export default function PersonalInfoPage() {
    const [peronalInfo, setPeronalInfo] = useState()
    const fetchAccoutInfo = async () => {
        try {
            const result = await userServ.getAccountInfo()
            setPeronalInfo(result.data)
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        fetchAccoutInfo()
    }, [])
    return (
        <div>
            <BlockTitle title="THÔNG TIN CÁ NHÂN" desc="THÔNG TIN HỌC VIÊN" />
            <div className='p-[20px] lg:p-[50px] grid lg:grid-cols-6'>
                <div className='col-span-6 mb-8 lg:mb-0 lg:col-span-1 text-center'>
                    <img src="./images/avatar.jpg" className='w-28 h-28 object-cover rounded-full mx-auto' alt="" />
                    <h3 className='mt-2 font-semibold text-lg'>{peronalInfo?.hoTen}</h3>
                    <p>Lập trình viên Front-end</p>
                </div>
                <div className='col-span-5 md:ml-[30px]'>
                    <Tabs animated={true} defaultActiveKey="1" items={[
                        {
                            key: '1',
                            label: `Thông tin cá nhân`,
                            children: <InfoPage peronalInfo={peronalInfo} />,
                        },
                        {
                            key: '2',
                            label: `Khóa học`,
                            children: <PurchasedCourse peronalInfo={peronalInfo} fetchAccoutInfo={fetchAccoutInfo} />,
                        }
                    ]} />
                </div>
            </div>
        </div>
    )
}
