import { useRef, useState } from "react";
import "./App.css";
import "remixicon/fonts/remixicon.css";
import Button from "./apple-design/components/Buttons/Button";
import MenuItem from "./apple-design/components/Menu/MenuItem";
import Menu from "./apple-design/components/Menu/Menu";
import Label from "./apple-design/components/Label/Label";
import Toggle from "./apple-design/components/Toggle/Toggle";
import { LoginPage } from "./pages/navbar-subpages/login/LoginPage";
import RegisterPage from "./pages/navbar-subpages/register/RegisterPage";

function App() {
    const ref = useRef();

    const [toggle, setToggle] = useState(false);

    return (
        <>
            <div id="app">
                <nav id="navbar">
                    <div id="navbar-logo">Cyfroweszkoly</div>
                    <div id="navbar-actions">
                        <Button title="About" buttonType="text" />
                        <Button title="Recruitment" buttonType="text" />
                        <Button title="Log In" buttonType="primary" />
                        <Menu
                            options={[
                                {
                                    title: "Application",
                                    icon: <i className="ri-list-check" />,
                                },
                                {
                                    title: "Account",
                                    icon: <i className="ri-user-line" />,
                                },
                                {
                                    title: "Log Out",
                                    icon: (
                                        <i className="ri-logout-box-r-line" />
                                    ),
                                    color: "red",
                                },
                            ]}
                        >
                            <Button
                                title="Account"
                                id="account"
                                buttonType="primary"
                                trailingIcon={
                                    <i className="ri-arrow-down-s-fill"></i>
                                }
                            />
                        </Menu>
                    </div>
                </nav>
                <main id="main">
                    {/* <LoginPage /> */}
                    <RegisterPage />
                </main>
            </div>
        </>
    );
}

export default App;
