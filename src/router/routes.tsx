import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LoginPage from "../pages/navbar-subpages/login/LoginPage";
import RegisterPage from "../pages/navbar-subpages/register/RegisterPage";
import RecruitmentPage from "../pages/navbar-subpages/recruitment/RecruitmentPage";
import FormPage from "../pages/navbar-subpages/form/FormPage";
import {
    ACCOUNT_PAGE_ALIAS,
    FORM_PAGE_ALIAS,
    LOGIN_PAGE_ALIAS,
    RECRUITMENT_PAGE_ALIAS,
    REGISTER_PAGE_ALIAS,
} from "./aliases";
import AccountPage from "../pages/navbar-subpages/account/AccountPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: LOGIN_PAGE_ALIAS,
                element: <LoginPage />,
            },
            {
                path: REGISTER_PAGE_ALIAS,
                element: <RegisterPage />,
            },
            {
                path: RECRUITMENT_PAGE_ALIAS,
                element: <RecruitmentPage />,
            },
            {
                path: FORM_PAGE_ALIAS,
                element: <FormPage />,
            },
            {
                path: ACCOUNT_PAGE_ALIAS,
                element: <AccountPage />,
            },
        ],
    },
]);

export default router;
