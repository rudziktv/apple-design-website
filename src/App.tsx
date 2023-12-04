import "./App.css";
import "remixicon/fonts/remixicon.css";
import { Outlet, useNavigate } from "react-router-dom";
import Button from "./apple-design/components/Buttons/Button";
import HomeDropdown from "./components/HomeDropdown";
import useAuth from "./hooks/useAuth";
import { AnimatePresence } from "framer-motion";

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
                <AnimatePresence mode="wait">
                    <main id="main">
                        <Outlet />
                    </main>
                </AnimatePresence>
            </div>
        </>
    );
}

export default App;
