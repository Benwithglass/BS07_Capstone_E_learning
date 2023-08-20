import { https } from './config';

export const userServ = {
  userLogin: (userInfo) => https.post('/api/QuanLyNguoiDung/DangNhap', userInfo),
  getAccountInfo: () => https.post('/api/QuanLyNguoiDung/ThongTinTaiKhoan'),
  getUserList: () => https.get('/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01'),
  searchUser: (value) =>
    https.get(`/api/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=GP01&tuKhoa=${value}`),
  getListUnRegiteredCourses: (account) =>
    https.post(`/api/QuanLyNguoiDung/LayDanhSachKhoaHocChuaGhiDanh?TaiKhoan=${account}`),
  getCourseAwaitApproval: (account) =>
    https.post(`/api/QuanLyNguoiDung/LayDanhSachKhoaHocChoXetDuyet`, account),
  getCourseApprovaled: (account) =>
    https.post(`/api/QuanLyNguoiDung/LayDanhSachKhoaHocDaXetDuyet`, account),
  addUser: (userInfo) => https.post('/api/QuanLyNguoiDung/ThemNguoiDung', userInfo),
  updateUser: (userInfo) => https.put('/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung', userInfo),
  deleteUser: (user) => https.delete(`/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${user}`),
  getUserListUnRegister: (idCourse) =>
    https.post('/api/QuanLyNguoiDung/LayDanhSachNguoiDungChuaGhiDanh', idCourse),
  getUserListWaitApproval: (idCourse) =>
    https.post('/api/QuanLyNguoiDung/LayDanhSachHocVienChoXetDuyet', idCourse),
  getCourseUserList: (idCourse) =>
    https.post('/api/QuanLyNguoiDung/LayDanhSachHocVienKhoaHoc', idCourse),
};
