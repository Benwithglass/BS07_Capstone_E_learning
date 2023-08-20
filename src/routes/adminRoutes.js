import AdminLayout from "../layout/AdminLayout/AdminLayout";
import CourseManagerPage from "../pages/Admin/CourseManagerPage/CourseManagerPage";
import UserManagerPage from "../pages/Admin/UserManagerPage/UserManagerPage";

export const adminRoutes = [
    {
        url: "/admin/quanlynguoidung",
        component: <AdminLayout Component={UserManagerPage}/> 
    },
    {
        url: "/admin/quanlykhoahoc",
        component: <AdminLayout Component={CourseManagerPage}/> 
    },
]

