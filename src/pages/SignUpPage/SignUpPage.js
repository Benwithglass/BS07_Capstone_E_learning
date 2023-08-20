import React, { useState } from 'react'
import {Button,Form,Input,InputNumber,Radio,} from 'antd';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchApiUserRegister } from '../../toolkit/userSlice';
import './SignUpPage.css';

export default function Register() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const onFinish = (values) => {
    let newUser = {...values, maNhom: "GP00"}
    const onSuccess = () => {
      navigate("/login")
    } 
    dispatch(fetchApiUserRegister(newUser, onSuccess))
  };
  return (
    <div className='glass'>
      <h2 className='mb-4 laptop:mb-10 text-lg text-center font-bold laptop:text-2xl text-black'>Đăng Ký Tài khoản</h2>
      <Form  
        className='' 
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 20,
        }}
        layout="horizontal"
        initialValues={{
        }}
        onFinish={onFinish}
        validateTrigger= "onSubmit"
        style={{
        maxWidth: 1000,
      }}
      >
        <Form.Item
          label="Họ tên"
          name="hoTen"
          rules={[{ required: true, message: 'Vui lòng nhập họ tên!' }]}
          className=''
        >
          <Input />
        </Form.Item>
        <Form.Item
          className=''
          label="Tên Tài khoản"
          name="taiKhoan"
          rules={[{ required: true, message: 'Vui lòng nhập tên tài khoản!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Mật khẩu"
          name="matKhau"
          rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!'}, {min: 4, message: "Mật khẩu ít nhất 4 ký tự"}]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[{ type: "email", required: true, message: 'Vui lòng nhập email!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Số ĐT"
          name="soDT"
          rules={[{type: "string", message: "Vui lòng nhập số điện thoại"}, {pattern: /^0\d{9}$/, message: "Số điện thoại không hợp lệ"}]}
        >
          <Input />
        </Form.Item>
        <div className='text-center'>
          <Button type='primary' htmlType="submit" className='bg-[#1677ff] mb-4 font-semibold text-sm'>Đăng ký</Button>
        </div>
      </Form>
      <h2 className='text-center'>Bạn đã có tài khoản? <NavLink to="/sign-in" className="text-red-500 font-semibold">Đăng nhập</NavLink></h2>
    </div>
  )
}

