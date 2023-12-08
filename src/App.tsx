import "./App.css";
import "remixicon/fonts/remixicon.css";
import { Outlet, useNavigate } from "react-router-dom";
import Button from "./apple-design/components/Buttons/Button";
import HomeDropdown from "./components/HomeDropdown";
import useAuth from "./hooks/useAuth";
import { AnimatePresence } from "framer-motion";
import Alert from "./apple-design/components/Alert/Alert";
import AlertContext from "./apple-design/components/Alert/AlertContext";
import { useEffect, useState } from "react";
import { AlertActionProps } from "./apple-design/components/Alert/AlertAction";
import { StoredAuthContext } from "./hooks/useStoredAuth";
import supabase from "./supabase/supabase-client";
import { Session } from "@supabase/supabase-js";

function App() {
    const auth = useAuth();
    const navigate = useNavigate();

    const [session, setSession] = useState<Session | null>(null);

    const [alertVisible, setAlertVisible] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");
    const [alertTitle, setAlertTitle] = useState("");
    const [alertActions, setAlertActions] = useState<AlertActionProps[]>([]);

    useEffect(() => {
        const callback = supabase.auth.onAuthStateChange((_, session) => {
            setSession(session);
        });

        return () => callback.data.subscription.unsubscribe();
    }, []);

    return (
        <>
            <AlertContext.Provider
                value={{
                    alertVisible: alertVisible,
                    alertSetVisible: setAlertVisible,
                    alertSetMessage: setAlertMessage,
                    alertSetTitle: setAlertTitle,
                    alertSetActions: setAlertActions,
                }}
            >
                <StoredAuthContext.Provider
                    value={{ authorized: auth, session: session }}
                >
                    <div id="app">
                        <AnimatePresence>
                            {alertVisible && (
                                <Alert
                                    message={alertMessage}
                                    title={alertTitle}
                                    actions={alertActions}
                                />
                            )}
                        </AnimatePresence>

                        <nav id="navbar">
                            <div id="navbar-logo">Cyfroweszkoly</div>
                            <div id="navbar-actions">
                                <Button title="About" buttonType="text" />
                                <Button
                                    title="Recruitment"
                                    onClick={() => navigate("/recruitment/")}
                                    buttonType="text"
                                />
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
                </StoredAuthContext.Provider>
            </AlertContext.Provider>
        </>
    );
}

export default App;
