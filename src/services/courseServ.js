import { https } from "./config"

export const courseServ = {
    deleteCourse: (courseInfo) => {
        return https.post("/api/QuanLyKhoaHoc/HuyGhiDanh", courseInfo)
    },
    getCourseList: () => {
        return https.get("/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc")
    },
    getCourseListbyPage: (page) => {
        return https.get(`/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc_PhanTrang?page=${page.toString()}&pageSize=12&MaNhom=GP01`)
    },
    getCourseCatalog: () => {
        return https.get(`api/QuanLyKhoaHoc/LayDanhMucKhoaHoc`)
    },
    getCourseByCategory: (course) => {
        return https.get(`/api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${course}&MaNhom=GP01`)
    },
    getCourseDetail: (course) => {
        return https.get(`api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${course}`)
    },
    courseSearch: (course) => {
        return https.get(`api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?tenKhoaHoc=${course}&MaNhom=GP01`)
    },
    registerCourse: (account) => {
        return https.post(`/api/QuanLyKhoaHoc/DangKyKhoaHoc`, account)
    },
    ghiDanhCourse: (account) => {
        return https.post(`/api/QuanLyKhoaHoc/GhiDanhKhoaHoc`, account)
    },
    huyGhiDanhCourse: (account) => {
        return https.post(`/api/QuanLyKhoaHoc/HuyGhiDanh`, account)
    },
    searchCourse: (keyWord) => {
        return https.get(`/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?tenKhoaHoc=${keyWord}&MaNhom=GP01`)
    },

}