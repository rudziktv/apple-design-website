import "./App.css";
import "remixicon/fonts/remixicon.css";
import { Outlet, useNavigate } from "react-router-dom";
import Button from "./apple-design/components/Buttons/Button";
import HomeDropdown from "./components/HomeDropdown";
import useAuth from "./hooks/useAuth";

function App() {
    const auth = useAuth();
    const navigate = useNavigate();

    return (
        <>
            <div id="app">
                <nav id="navbar">
                    <div id="navbar-logo">Cyfroweszkoly</div>
                    <div id="navbar-actions">
                        <Button title="About" buttonType="text" />
                        <Button title="Recruitment" buttonType="text" />
                        {auth ? (
                            <HomeDropdown />
                        ) : (
                            <Button
                                title="Log In"
                                buttonType="primary"
                                onClick={() => navigate("/authorize/")}
                            />
                        )}
                    </div>
                </nav>
                <main id="main">
                    <Outlet />
                </main>
            </div>
        </>
    );
}

export default App;
