import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import UserMenu from '../../../components/layout/Header/UserMenu/UserMenu'
import { Button, Cascader, DatePicker, Form, Input, InputNumber, Modal, Radio, Select, Switch, Table, TreeSelect, message } from 'antd'
import { localUser } from '../../../utils/localUser'
import { courseServ } from '../../../services/courseServ'
import "./courseManagerPage.css"
import { SUCCESS } from '../../../utils/constant'
import TextArea from 'antd/es/input/TextArea'
import { userServ } from '../../../services/userServ'

export default function CourseManagerPage() {
  const { userInfo } = useSelector(state => state.userSlice)
  const [courseList, setCourseList] = useState([])
  const [modalAddCourse, setModalAddCourse] = useState(false);
  const [showModalRegister, setShowModalRegister] = useState(false)
  const [course, setCourse] = useState(null)
  const [userListUnRegister, setUserListUnRegister] = useState(null)
  const [dataUserListApproval, setDataUserListApproval] = useState([])
  const [courseUserList, setcourseUserList] = useState([])

  // xử lý đăng xuất
  const handleLogout = () => {
    // xóa thông tin dưới localStorage
    localUser.remove()
    window.location.href = "/"
    // thông báo đăng xuất
    message.success("Đăng xuất thành công")
  }
  // col table course
  const headerCourse = [
    {
      title: 'STT',
      width: 40,
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Mã khóa học',
      width: 100,
      dataIndex: 'maKhoaHoc',
      key: 'maKhoaHoc',
    },
    {
      title: 'Tên khóa học',
      width: 100,
      dataIndex: 'tenKhoaHoc',
      key: 'tenKhoaHoc',
    },
    {
      title: 'Hình ảnh',
      width: 70,
      dataIndex: "hinhAnh",
      key: 'hinhAnh',
      render: (imageSrc) => {
        return <img className='w-full h-[55px] object-cover' src={imageSrc} />
      }
    },
    {
      title: 'Lượt xem',
      width: 50,
      dataIndex: 'luotXem',
      key: 'luotXem',
    },
    {
      title: 'Người tạo',
      width: 60,
      dataIndex: 'nguoiTao',
      key: 'nguoiTao',
      render: (author) => {
        return <div>{author.hoTen}</div>
      }
    },
    {
      title: 'Action',
      key: 'operation',
      fixed: 'right',
      width: 120,
      render: (course) => {
        return <div className="font-medium">
          <Button onClick={() => handleRegisterCourse(course)} className="bg-green-light text-white" type="bg-green-light">Ghi danh</Button>
          <Button className="mx-2" type="primary">Sửa</Button>
          <Button type="primary" danger>Xóa</Button>
        </div>
      }
    },
  ]
  const headerUserAwaitApproval = [
    {
      title: 'STT',
      dataIndex: 'id',
    },
    {
      title: 'Tài khoản',
      dataIndex: 'taiKhoan',
    },
    {
      title: 'Họ tên',
      dataIndex: 'hoTen',
    },
    {
      title: 'Chờ xác nhận',
      render: (user) => {
        return <div className="font-medium">
          <Button className="bg-green-light text-white" type="bg-green-light mr-4">Xác thực</Button>
          <Button type="primary" danger>Xóa</Button>
        </div>
      }
    },
  ];
  const headerCourseUserList = [
    {
      title: 'STT',
      dataIndex: 'id',
    },
    {
      title: 'Tài khoản',
      dataIndex: 'taiKhoan',
    },
    {
      title: 'Họ tên',
      dataIndex: 'hoTen',
    },
    {
      title: 'Chờ xác nhận',
      render: (user) => {
        return <div className="font-medium">
          <Button type="primary" danger>Xóa</Button>
        </div>
      }
    },
  ];

  const fetchCourseList = async () => {
    try {
      const result = await courseServ.getCourseList()
      const newCourseList = result.data.map((course, index) => {
        return { id: index + 1, ...course }
      })
      setCourseList(newCourseList)
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    fetchCourseList()
  }, [])

  // tìm khóa học
  const fetchSearchCourse = async (keyWord) => {
    try {
      const result = await courseServ.searchCourse(keyWord)
      if (result.status === SUCCESS) {
        const courseSearch = result.data.map((course, index) => {
          return { id: index + 1, ...course }
        })
        if (!keyWord) {
          fetchCourseList()
        } else {
          setCourseList(courseSearch)
        }
      }
    } catch (err) {
      console.log(err)
    }
  }

  // ghi danh khóa học 
  const handleRegisterCourse = (course) => {
    setCourse(course)
    setShowModalRegister(true);
  };
  const handleCancelRegister = () => {
    setCourse(null)
    setShowModalRegister(false);
  };

  // hàm nhận dữ liệu từ input select chọn ghi danh khóa học
  let newUser = null
  const handleChangeUser = (user) => {
    newUser = user
  };

  const fetchUserListUnRegister = async (course) => {
    const maKhoaHoc = { maKhoaHoc: course.maKhoaHoc }
    try {
      const result = await userServ.getUserListUnRegister(maKhoaHoc)
      console.log(result.data)
      setUserListUnRegister(result.data)
    } catch (err) {
      console.log(err)
    }
  }
  const fetchUserListWaitApproval = async (course) => {
    const maKhoaHoc = { maKhoaHoc: course.maKhoaHoc }
    try {
      const result = await userServ.getUserListWaitApproval(maKhoaHoc)
      console.log(result.data)
      const userList = result.data.map((user, index) => {
        return { id: index + 1, ...user }
      })
      console.log(userList)
      setDataUserListApproval(userList)
    } catch (err) {
      console.log(err)
    }
  }
  const fetchCourseUserList = async (course) => {
    const maKhoaHoc = { maKhoaHoc: course.maKhoaHoc }
    try {
      const result = await userServ.getCourseUserList(maKhoaHoc)
      console.log(result.data)
      const userList = result.data.map((user, index) => {
        return { id: index + 1, ...user }
      })
      setcourseUserList(userList)
      console.log(userList)
    } catch (err) {
      console.log(err)
    }
  }


  useEffect(() => {
    fetchUserListUnRegister(course)
    fetchUserListWaitApproval(course)
    fetchCourseUserList(course)
  }, [course])





  // thêm khóa học
  const showModalAddCourse = (course) => {
    setModalAddCourse(true);
  };
  const handleCanleAddCourse = () => {
    setModalAddCourse(false);
  };

  const fetchAddCourse = (course) => {
    console.log(course)
  }


  return (
    <div className='p-[12px] w-full'>
      <div className='flex items-center justify-between'>
        <Button onClick={showModalAddCourse} className='bg-green-light text-white py-5 px-4 flex items-center hover:scale-95 transition-all duration-300' type="text">Thêm Khóa học</Button>
        <div className='flex items-center'>
          <Input onChange={(e) => fetchSearchCourse(e.target.value)} className='w-[400px] mr-[100px] p-2 placeholder:text-gray-400 placeholder:font-medium' type="text" placeholder='Nhập vào tài khoản hoặc họ tên người dùng' />
          <UserMenu userInfo={userInfo} handleLogout={handleLogout} />
        </div>
      </div>
      <Table
        className='mt-4'
        bordered
        columns={headerCourse}
        dataSource={courseList}
        pagination={{ pageSize: 6 }}
        scroll={{
          x: 1300,
        }}
      />
      <Modal className='w-[900px]' open={modalAddCourse} onCancel={handleCanleAddCourse} footer={false}>
        <h2 className='text-3xl font-medium text-center text-green-light pb-4'>Thông tin người dùng</h2>
        <Form
          className='my-6'
          layout="horizontal"
          initialValues={{

          }}
          style={{
            maxWidth: 900,
          }}
          onFinish={fetchAddCourse}
        >
          <div className='grid grid-cols-2 gap-20'>
            <div>
              <Form.Item label="Mã khóa học" labelCol={{ span: 7, }} wrapperCol={{ span: 20, }}
                name="maKhoaHoc"
                rules={[
                  {
                    required: true,
                    message: 'Mã khóa học không được để trống',
                  },
                ]}>
                <Input />
              </Form.Item>
              <Form.Item label="Mục khóa học" labelCol={{ span: 7, }} wrapperCol={{ span: 20, }}
                name="maDanhMucKhoaHoc"
                rules={[
                  {
                    required: true,
                    message: 'Danh mục khóa học không được để trống',
                  },
                ]}>
                <Input />
              </Form.Item>
              <Form.Item label="DanhGia" labelCol={{ span: 7, }} wrapperCol={{ span: 20, }}
                name="danhGia"
                rules={[
                  {
                    required: true,
                    message: 'Dánh giá không được để trống',
                  },
                ]}>
                <InputNumber className='w-full' />
              </Form.Item>
              <Form.Item label="Người tạo" labelCol={{ span: 7, }} wrapperCol={{ span: 20, }}
                name="nguoiTao"
                rules={[
                  {
                    required: true,
                    message: 'Người tạo không được để trống ',
                  },
                ]}>
                <Input />
              </Form.Item>

              <Form.Item label="Mã nhóm" labelCol={{ span: 7, }} wrapperCol={{ span: 20, }}
                name="maNhom"
                rules={[
                  {
                    required: true,
                    message: 'Mã nhóm không được để trống',
                  },
                ]}>
                <Select>
                  <Select.Option value="GP01">GP01</Select.Option>
                  <Select.Option value="GP02">GP02</Select.Option>
                  <Select.Option value="GP03">GP03</Select.Option>
                  <Select.Option value="GP04">GP04</Select.Option>
                  <Select.Option value="GP05">GP05</Select.Option>
                  <Select.Option value="GP06">GP06</Select.Option>
                  <Select.Option value="GP07">GP07</Select.Option>
                  <Select.Option value="GP08">GP08</Select.Option>
                  <Select.Option value="GP09">GP09</Select.Option>
                  <Select.Option value="GP10">GP10</Select.Option>
                  <Select.Option value="GP01">GP11</Select.Option>
                  <Select.Option value="GP12">GP12</Select.Option>
                  <Select.Option value="GP13">GP13</Select.Option>
                  <Select.Option value="GP14">GP14</Select.Option>
                  <Select.Option value="GP15">GP15</Select.Option>
                </Select>
              </Form.Item>
            </div>
            <div>
              <Form.Item label="Tên khóa học" labelCol={{ span: 6, }} wrapperCol={{ span: 20, }}
                name="tenKhoaHoc"
                rules={[
                  {
                    required: true,
                    message: 'Tên khóa học không được để trống',
                  },
                ]}>
                <Input />
              </Form.Item>
              <Form.Item label="DatePicker" labelCol={{ span: 6, }} wrapperCol={{ span: 20, }}
                name="tenKhoaHoc"
                rules={[
                  {
                    required: true,
                    message: 'Tên khóa học không được để trống',
                  },
                ]}>
                <DatePicker />
              </Form.Item>
              <Form.Item label="Lượt xem" labelCol={{ span: 6, }} wrapperCol={{ span: 20, }}
                name="luotXem"
                rules={[
                  {
                    required: true,
                    message: 'Lượt xem không được để trống',
                  },
                ]}>
                <InputNumber className='w-[150px]' />
              </Form.Item>
            </div>
          </div>
          <Form.Item label="Mô tả khóa học"
            name="moTa"
            rules={[
              {
                required: true,
                message: 'Mô tả không được để trống',
              },
            ]}>
            <TextArea className='min-h-[150px]' />
          </Form.Item>
          <div className='text-right'>
            <Button className="bg-green-light text-white" type="bg-green-light" htmlType="submit">
              Tên người dùng
            </Button>
          </div>
        </Form>
      </Modal>
      <Modal className='w-[800px]' open={showModalRegister} onCancel={handleCancelRegister} footer={false} closable={false}>
        <div className='flex items-center justify-between pb-8 border-b border-b-gray-400'>
          <h4>Chọn khóa học</h4>
          <Select
            defaultValue="Tên người dùng"
            style={{
              width: 300,
            }}
            onChange={handleChangeUser}
            options={
              userListUnRegister?.map(user => {
                return {
                  value: user.taiKhoan,
                  label: user.hoTen
                }
              })
            }
          />
          <Button className='bg-green-light text-white' type="bg-green-light">Ghi danh</Button>
        </div>
        <div className='pt-4 pb-8 border-b border-b-gray-400'>
          <h4 className='text-xl font-medium'>Khóa học chờ xác thực</h4>
          <div>
            <Table columns={headerUserAwaitApproval} dataSource={dataUserListApproval} className='h-[220px]' pagination={{ pageSize: 2 }} />
          </div>
        </div>
        <div className='pb-4'>
          <h4 className='text-xl font-medium'>Khóa học đã ghi danh</h4>
          <div>
            <Table columns={headerCourseUserList} dataSource={courseUserList} className='h-[220px]' pagination={{ pageSize: 2 }} />
          </div>
        </div>
      </Modal>
    </div>
  )
}
