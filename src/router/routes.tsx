import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { LoginPage } from "../pages/navbar-subpages/login/LoginPage";
import RegisterPage from "../pages/navbar-subpages/register/RegisterPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "authorize",
                element: <LoginPage />,
            },
            {
                path: "signup",
                element: <RegisterPage />,
            },
        ],
    },
]);

export default router;
