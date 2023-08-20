import AuthenLayout from "../layout/AuthenLayout/AuthenLayout";
import SignInPage from "../pages/SignInPage/SignInPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";

export const authenRoutes = [
    {
        url: "/sign-in",
        component: <AuthenLayout Component={SignInPage}/>
    },
    {
        url: "/sign-up",
        component: <AuthenLayout Component={SignUpPage}/>
    },
]