import { Button, Input, Modal, Select, Table, message, Form } from 'antd'
import React, { useEffect, useState } from 'react'
import UserMenu from '../../../components/layout/Header/UserMenu/UserMenu'
import { useSelector } from 'react-redux'
import { userServ } from '../../../services/userServ';
import { SUCCESS } from '../../../utils/constant';
import "./userManagerPage.css"
import { localUser } from '../../../utils/localUser';
import { courseServ } from '../../../services/courseServ';
import { useForm } from 'antd/es/form/Form';
const { confirm } = Modal;


export default function UserManagerPage() {
  const { userInfo } = useSelector(state => state.userSlice)
  const [userList, setUserList] = useState([])
  const [unRefisteredCourses, setUnRefisteredCourses] = useState([])
  const [modalRegister, setModalRegister] = useState(false)
  const [courseaWaitApproval, setCourseAwaitApproval] = useState([])
  const [courseApprovaled, setCourseApprovaled] = useState([])
  const [user, setUser] = useState(null)
  const [modalAddUser, setModalAddUser] = useState(false);
  const [modalUpdateUser, setModalUpdateUser] = useState(false);


  const [form] = useForm();

  // xử lý đăng xuất
  const handleLogout = () => {
    // xóa thông tin dưới localStorage
    localUser.remove()
    window.location.href = "/"
    // thông báo đăng xuất
    message.success("Đăng xuất thành công")
  }

  const headerUsers = [
    {
      title: 'STT',
      width: 40,
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Tài khoản',
      width: 80,
      dataIndex: 'taiKhoan',
      key: 'taiKhoan',
    },
    {
      title: 'Người dùng',
      width: 40,
      dataIndex: 'maLoaiNguoiDung',
      key: 'maLoaiNguoiDung',
    },
    {
      title: 'Họ và tên',
      width: 80,
      dataIndex: 'hoTen',
      key: 'hoTen',
    },
    {
      title: 'Email',
      width: 120,
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Số điện thoại',
      width: 100,
      dataIndex: 'soDt',
      key: 'soDt',
    },
    {
      title: 'Action',
      key: 'operation',
      fixed: 'right',
      width: 120,
      render: (user) => {
        return <div className="font-medium">
          <Button onClick={() => handleRegisterCourse(user)} className="bg-green-light text-white" type="bg-green-light">Ghi danh</Button>
          <Button onClick={() => handleEditUser(user)} className="mx-2" type="primary">Sửa</Button>
          <Button onClick={() => fetchDeleteUser(user)} type="primary" danger>Xóa</Button>
        </div>
      }
    },
  ]

  // call api get user search list
  const fetchSearchUser = async (searchValue) => {
    try {
      const result = await userServ.searchUser(searchValue)
      if (result.status === SUCCESS) {
        const newSearchList = result.data.map((user, index) => {
          return { id: index + 1, ...user }
        })
        if (!searchValue) {
          fetchUserList()
        } else {
          setUserList(newSearchList)
        }
      }
    } catch (err) {
      console.log(err)
    }
  }
  // get danh sách người dùng
  const fetchUserList = async () => {
    try {
      const result = await userServ.getUserList()
      if (result.status === SUCCESS) {
        const newUserList = result.data.map((user, index) => {
          return { id: index + 1, ...user }
        })
        setUserList(newUserList)
      }
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    fetchUserList()
  }, [])

  // xử lý show modal ghi danh
  const handleRegisterCourse = (user) => {
    setUser(user)
    setModalRegister(true);
    fetchListUnRegisteredCourses(user)
    fetchCourseAwaitApproval(user)
    fetchCourseAppovaled(user)
  };
  const handleCancelRegister = () => {
    setModalRegister(false);
  };
      // get danh sách khóa học chưa ghi danh
      const fetchListUnRegisteredCourses = async () => {
        let account = user.taiKhoan
        try {
          const result = await userServ.getListUnRegiteredCourses(account)
          if (result.status === SUCCESS) {
            setUnRefisteredCourses(result.data)
          }
        } catch (err) {
          console.log(err)
        }
      }

  // hàm nhận dữ liệu từ input select chọn ghi danh khóa học
  let newCourse = null
  const handleChangeCourse = (course) => {
    newCourse = course
  };
  const fetchGhiDanhCourse = async (course) => {
    const account = {
      taiKhoan: user.taiKhoan,
      maKhoaHoc: newCourse || course.maKhoaHoc
    }
    try {
      const result = await courseServ.ghiDanhCourse(account)
      if (result.status === SUCCESS) {
        fetchCourseAwaitApproval(user)
        fetchListUnRegisteredCourses(user)
        fetchCourseAppovaled(user)
        message.success("ghi danh thành công")
      }
    } catch (err) {
      message.error(err.response?.data)
    }
  }
  const headerCourseAwaitApproval = [
    {
      title: 'STT',
      dataIndex: 'id',
    },
    {
      title: 'Tên khóa học',
      dataIndex: 'tenKhoaHoc',
    },
    {
      title: 'Chờ xác nhận',
      render: (course) => {
        return <div className="font-medium">
          <Button onClick={() => fetchGhiDanhCourse(course)} className="bg-green-light text-white" type="bg-green-light mr-4">Xác thực</Button>
          <Button onClick={() => fetchHuyGhiDanhCourse(course)} type="primary" danger>Xóa</Button>
        </div>
      }
    },
  ];
  const dataCourseaWaitApproval = courseaWaitApproval

  const fetchCourseAwaitApproval = async () => {
    let account = { taiKhoan: user.taiKhoan }
    try {
      const result = await userServ.getCourseAwaitApproval(account)
      if (result.status === SUCCESS) {
        const newResult = result.data.map((course, index) => {
          return { id: index + 1, ...course }
        })
        setCourseAwaitApproval(newResult)
      }
    } catch (err) {
      console.log(err)
    }
  }
  const dataCourseAppovaled = courseApprovaled
  const headerCourseApprovaled = [
    {
      title: 'STT',
      dataIndex: 'id',
    },
    {
      title: 'Tên khóa học',
      dataIndex: 'tenKhoaHoc',
    },
    {
      title: 'Chờ xác nhận',
      render: (course) => {
        return <div className="font-medium">
          <Button onClick={() => fetchHuyGhiDanhCourse(course)} type="primary" danger>Xóa</Button>
        </div>
      }
    },
  ];
  const fetchCourseAppovaled = async () => {
    let account = { taiKhoan: user.taiKhoan }
    try {
      const result = await userServ.getCourseApprovaled(account)
      if (result.status === SUCCESS) {
        const newResult = result.data.map((course, index) => {
          return { id: index + 1, ...course }
        })
        setCourseApprovaled(newResult)
      }
    } catch (err) {
      message.error(err.response?.data)
    }
  }

  const fetchHuyGhiDanhCourse = async (course) => {
    const account = {
      taiKhoan: user.taiKhoan,
      maKhoaHoc: course.maKhoaHoc
    }
    try {
      const result = await courseServ.huyGhiDanhCourse(account)
      if (result.status === SUCCESS) {
        message.success("Hủy ghi danh thành công")
        fetchCourseAppovaled(user)
        fetchCourseAwaitApproval(user)
      }
    } catch (err) {
      message.error(err.response?.data)
    }
  }

  // xử lý thêm người dùng
  const showModalAddUser = () => {
    setModalAddUser(true);
  };
  const handleCanleAddUser = () => {
    setModalAddUser(false);
  };
  const handleAddUser = async (userInfo) => {
    try {
      const result = await userServ.addUser(userInfo)
      if (result.status === SUCCESS) {
        message.success("Thêm người dùng thành công", 5)
        form.resetFields()
      }
    } catch (err) {
      message.error(err?.response?.data, 3)
    }
    console.log(userInfo)
  }


  // xử lý sửa người dùng
  const handleEditUser = (user) => {
    setModalUpdateUser(true);
    setUser(user)
  };
  const handleCancelUpdateUser = () => {
    setModalUpdateUser(false);
    setUser(null)
  };
  const fetchUpdateUser = async (userInfo) => {
    try {
      const result = await userServ.updateUser(userInfo)
      if (result.status === SUCCESS) {
        message.success("Cập nhật dùng thành công", 5)
        fetchUserList()
      }
    } catch (err) {
      message.error(err?.response?.data, 3)
    }
  }

  // xóa người dùng
  const fetchDeleteUser = async (user) => {
    const taiKhoan = user.taiKhoan
    confirm({
      title: <div className='text-base font-medium'>Bạn có muốn xóa tài khoản <span className='text-green-light text-lg'>{taiKhoan} này không?</span></div>,
      content: 'Chú ý: sau khi xóa tài khoản sẽ bị mất vĩnh viễn',
      okText: 'Yes',
      cancelText: 'No',
      async onOk() {
        try {
          const result = await userServ.deleteUser(taiKhoan)
          if (result.status === SUCCESS) {
            message.success("Xóa người dùng thành công", 4)
            fetchUserList()
          }
        } catch (err) {
          message.error(err?.response?.data, 4)
          console.log(err.response.data)
        }
      },
      onCancel() {
      }
    })
  }
  return (
    <div className='p-[12px] w-full'>
      <div className='flex items-center justify-between'>
        <Button onClick={showModalAddUser} className='bg-green-light text-white py-5 px-4 flex items-center hover:scale-95 transition-all duration-300' type="text">Thêm người dùng</Button>
        <div className='flex items-center'>
          <Input onChange={(e) => fetchSearchUser(e.target.value)} className='w-[400px] mr-[100px] p-2 placeholder:text-gray-400 placeholder:font-medium' type="text" placeholder='Nhập vào tài khoản hoặc họ tên người dùng' />
          <UserMenu userInfo={userInfo} handleLogout={handleLogout} />
        </div>
      </div>
      <Table
        bordered
        className='mt-4'
        columns={headerUsers}
        dataSource={userList}
        pagination={{ pageSize: 8 }}
        scroll={{
          x: 1300,
        }}
      />
      <Modal className='w-[800px]' open={modalRegister} onCancel={handleCancelRegister} footer={false} closable={false}>
        <div className='flex items-center justify-between pb-8 border-b border-b-gray-400'>
          <h4>Chọn khóa học</h4>
          <Select
            defaultValue="Chọn khóa học"
            style={{
              width: 300,
            }}
            onChange={handleChangeCourse}
            options={
              unRefisteredCourses.map(course => {
                return {
                  value: course.maKhoaHoc,
                  label: course.tenKhoaHoc
                }
              })
            }
          />
          <Button onClick={fetchGhiDanhCourse} className='bg-green-light text-white' type="bg-green-light">Ghi danh</Button>
        </div>
        <div className='pt-4 pb-8 border-b border-b-gray-400'>
          <h4 className='text-xl font-medium'>Khóa học chờ xác thực</h4>
          <div>
            <Table className='h-[220px]' columns={headerCourseAwaitApproval} dataSource={dataCourseaWaitApproval} pagination={{ pageSize: 2 }} />
          </div>
        </div>
        <div className='pb-4'>
          <h4 className='text-xl font-medium'>Khóa học đã ghi danh</h4>
          <div>
            <Table className='h-[220px]' columns={headerCourseApprovaled} dataSource={dataCourseAppovaled} pagination={{ pageSize: 2 }} />
          </div>
        </div>
      </Modal>
      <Modal open={modalAddUser} onCancel={handleCanleAddUser} footer={false}>
        <h2 className='text-3xl font-medium text-center text-green-light pb-4'>Thông tin người dùng</h2>
        <Form
          form={form}
          name="basic"
          labelCol={{
            span: 6,
          }}
          wrapperCol={{
            span: 18,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            maNhom: 'GP01',
          }}
          validateTrigger="onSubmit"
          onFinish={handleAddUser}
        >
          <Form.Item
            label="Tài khoản"
            name="taiKhoan"
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập tài khoản',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Họ và tên"
            name="hoTen"
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập họ tên',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập email',
              },
              {
                type: "email",
                message: 'Email không hợp lệ',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Mật khẩu"
            name="matKhau"
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập mật khẩu',
              },
              {
                min: 4,
                message: 'Mật khẩu phải ít nhất 4 ký tự',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            label="Số điện thoại"
            name="soDT"
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập số điện thoại',
              },
              {
                pattern: /^[0-9\b]+$/,
                message: 'Số điện thoại không hợp lệ',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Loại người dùng"
            name="maLoaiNguoiDung"
            rules={[
              {
                required: true,
                message: 'Vui lòng chọn loại người dùng',
              },
            ]}
          >
            <Select>
              <Select.Option value="GV">Giáo vụ</Select.Option>
              <Select.Option value="HV">Học viên</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="Mã nhóm"
            name="maNhom"
          >
            <Input disabled />
          </Form.Item>
          <div className='text-right'>
            <Button className="bg-green-light text-white" type="bg-green-light" htmlType="submit">
              Thêm người dùng
            </Button>
          </div>
        </Form>
      </Modal>
      <Modal open={modalUpdateUser} onCancel={handleCancelUpdateUser} footer={false}>
        <h2 className='text-3xl font-medium text-center text-green-light pb-4'>Thông tin người dùng</h2>
        <Form
          key={user?.email}
          labelCol={{
            span: 6,
          }}
          wrapperCol={{
            span: 18,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            maNhom: 'GP01',
            taiKhoan: user?.taiKhoan,
            hoTen: user?.hoTen,
            email: user?.email,
            soDT: user?.soDt,
            maLoaiNguoiDung: user?.maLoaiNguoiDung
          }}
          validateTrigger="onSubmit"
          onFinish={fetchUpdateUser}
        >
          <Form.Item
            label="Tài khoản"
            name="taiKhoan"
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập tài khoản',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Họ và tên"
            name="hoTen"
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập họ tên',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập email',
              },
              {
                type: "email",
                message: 'Email không hợp lệ',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Mật khẩu"
            name="matKhau"
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập mật khẩu',
              },
              {
                min: 4,
                message: 'Mật khẩu phải ít nhất 4 ký tự',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            label="Số điện thoại"
            name="soDT"
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập số điện thoại',
              },
              {
                pattern: /^[0-9\b]+$/,
                message: 'Số điện thoại không hợp lệ',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Loại người dùng"
            name="maLoaiNguoiDung"
            rules={[
              {
                required: true,
                message: 'Vui lòng chọn loại người dùng',
              },
            ]}
          >
            <Select>
              <Select.Option value="GV">Giáo vụ</Select.Option>
              <Select.Option value="HV">Học viên</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="Mã nhóm"
            name="maNhom"
          >
            <Input disabled />
          </Form.Item>
          <div className='text-right'>
            <Button className="bg-green-light text-white" type="bg-green-light" htmlType="submit">
              Cập nhật
            </Button>
          </div>
        </Form>
      </Modal>
    </div>
  )
}
