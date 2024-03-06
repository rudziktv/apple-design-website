import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LoginPage from "../pages/navbar-subpages/login/LoginPage";
import RegisterPage from "../pages/navbar-subpages/register/RegisterPage";
import RecruitmentPage from "../pages/navbar-subpages/recruitment/RecruitmentPage";
import FormPage from "../pages/navbar-subpages/form/FormPage";
import {
    ABOUT_PAGE_ALIAS,
    ACCOUNT_PAGE_ALIAS,
    APPLICATIONS_PAGE_ALIAS,
    FORM_CONFIG_PAGE_ALIAS,
    FORM_PAGE_ALIAS,
    LOGIN_PAGE_ALIAS,
    RECRUITMENT_PAGE_ALIAS,
    REGISTER_PAGE_ALIAS,
} from "./aliases";
import AccountPage from "../pages/navbar-subpages/account/AccountPage";
import FormConfigPage from "../pages/navbar-subpages/form/FormConfigPage";
import FormDataLoader from "../data/data-loader/FormDataLoader";
import ApplicationsPage from "../pages/navbar-subpages/applications/ApplicationsPage";
import { ApplicationsLoader } from "../pages/navbar-subpages/applications/ApplicationsLoader";
import AboutPage from "../pages/navbar-subpages/about/AboutPage";

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
            {
                path: APPLICATIONS_PAGE_ALIAS,
                element: <ApplicationsPage />,
                loader: ApplicationsLoader,
            },
            {
                path: ABOUT_PAGE_ALIAS,
                element: <AboutPage />,
            },
            {
                path: FORM_CONFIG_PAGE_ALIAS,
                element: <FormConfigPage />,
                loader: FormDataLoader,
                children: [
                    // {
                    //     path: "lo11/2",
                    //     element: <Page2 />,
                    // },
                    {
                        path: ":schoolId/:page",
                        element: <>Empty</>,
                    },
                ],
            },
        ],
    },
]);

export default router;
