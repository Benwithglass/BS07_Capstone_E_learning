import ClientLayout from "../layout/ClientLayout/ClientLayout";
import BlogPage from "../pages/BlogPage/BlogPage";
import CoursesPage from "../pages/CoursesPage/CoursesPage";
import HomePage from "../pages/HomePage/HomePage";
import PersonalInfoPage from "../pages/PersonalInfoPage/PersonalInfoPage";
import EventPage from "../pages/EventPage/EventPage";
import DetailCoursePage from "../pages/DetailCoursePage/DetailCoursePage";
import CourseByCategoryPage from "../pages/CourseByCategoryPage/CourseByCategoryPage";
import InfoPage from "../pages/InfoPage/InfoPage";
import CourseSearchPage from "../pages/CourseSearchPage/CourseSearchPage";
import NotFoundCourseSearchPage from "../pages/NotFoundCourseSearchPage/NotFoundCourseSearchPage";

export const clientRoutes = [
    {
        url: "/",
        component: <ClientLayout Component={HomePage}/>
    },
    {
        url: "/courses",
        component: <ClientLayout Component={CoursesPage}/>
    },
    {
        url: "/blog",
        component: <ClientLayout Component={BlogPage}/>
    },
    {
        url: "/events",
        component: <ClientLayout Component={EventPage}/>
    },
    {
        url: "/info",
        component: <ClientLayout Component={InfoPage}/>
    },
    {
        url: "/personal-info",
        component: <ClientLayout Component={PersonalInfoPage}/>
    },
    {
        url: "/course-search/:value",
        component: <ClientLayout Component={CourseSearchPage}/>
    },
    {
        url: "/notfound-course-search",
        component: <ClientLayout Component={NotFoundCourseSearchPage
        }/>
    },
    {
        url: "/detail/:course",
        component: <ClientLayout Component={DetailCoursePage}/>
    },
    {
        url: "/course-catalog/:id",
        component: <ClientLayout Component={CourseByCategoryPage}/>
    }
]