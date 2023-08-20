import React from 'react'
import Input from '../../components/Input/Input'
import { Form, Formik } from 'formik'
import Button from '../../components/Button/Button'
import IconEyeClose from '../../components/Icon/IconEyeClose'
import useToggle from '../../hooks/useToggle'
import IconEyeOpen from '../../components/Icon/IconEyeOpen'
import { SUCCESS } from '../../utils/constant'
import { useDispatch } from 'react-redux'
import { userLogin } from '../../toolkit/userSlice'
import { message } from 'antd'
import { userServ } from '../../services/userServ'
import { useNavigate } from 'react-router-dom'
export default function SignInPage() {
  const { toggle, handleToggle } = useToggle()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  return (
    <Formik
      className=""
      initialValues={{
        taiKhoan: "",
        matKhau: "",
      }}
      onSubmit={async (values, actions) => {
        try {
          const result = await userServ.userLogin(values)
          if (result.status === SUCCESS) {
            dispatch(userLogin(result.data))
            window.location.href = "/"
            message.success("Đăng nhập thành công")
          }
        } catch (err) {
          message.error(err?.response?.data)
        }
      }}
    >
      <Form style={{ backgroundImage: `url("./images/bg-authen.png")` }}
        className='p-5 md:p-20 bg-red-300 rounded-lg bg-center z-10'>
        <div className='text-center'>
          <h1 className='font-bold text-xl md:text-3xl'>Đăng nhập</h1>
         
        </div>
        <div className='mb-[30px]'>
          <Input className="w-full md:w-[500px] lg:w-[800px]" name="taiKhoan" type="text" placeholder="Tài khoản" />
        </div>
        <div className='mb-[30px]'>
          <Input type={toggle ? "text" : "password"} name="matKhau" placeholder="Mật khẩu" >
            {toggle ? <IconEyeOpen onClick={handleToggle} /> : <IconEyeClose onClick={handleToggle} />}
          </Input>
        </div>
        {/* hello */}
        <Button type="submit" className="block bg-white mx-auto py-3 px-5 font-bold">Sign in</Button>
      </Form>
    </Formik>
  )
}
