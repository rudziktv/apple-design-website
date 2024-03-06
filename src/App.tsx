import "./App.css";
import "remixicon/fonts/remixicon.css";
import { Outlet, useNavigate, useNavigation } from "react-router-dom";
import Button from "./apple-design/components/Buttons/Button";
import HomeDropdown from "./components/HomeDropdown";
import useAuth from "./hooks/useAuth";
import { AnimatePresence } from "framer-motion";
import Alert from "./apple-design/components/Alert/Alert";
import AlertContext, {
    Orientation,
} from "./apple-design/components/Alert/AlertContext";
import { useEffect, useState } from "react";
import { AlertActionProps } from "./apple-design/components/Alert/AlertAction";
import { StoredAuthContext } from "./hooks/useStoredAuth";
import supabase from "./supabase/supabase-client";
import { Session } from "@supabase/supabase-js";
import Popup from "./apple-design/components/Popup/Popup";
import PopupContext from "./apple-design/components/Popup/PopupContext";
import LoadingPopup from "./apple-design/components/LoadingPopup/LoadingPopup";
import NavbarOS from "./components/NavbarOS/NavbarOS";

function App() {
    const auth = useAuth();
    const navigate = useNavigate();
    const { state } = useNavigation();

    const [session, setSession] = useState<Session | null>(null);

    const [alertVisible, setAlertVisible] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");
    const [alertTitle, setAlertTitle] = useState("");
    const [alertActions, setAlertActions] = useState<AlertActionProps[]>([]);
    const [alertOrientation, setAlertOrientation] =
        useState<Orientation>("vertical");

    const [popupVisible, setPopupVisible] = useState(false);
    const [popupContent, setPopupContent] = useState<React.ReactNode>(<></>);

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
                    alertSetOrientation: setAlertOrientation,
                }}
            >
                <PopupContext.Provider
                    value={{
                        popupVisible: popupVisible,
                        popupContent: popupContent,
                        popupSetVisible: setPopupVisible,
                        popupSetContent: setPopupContent,
                    }}
                >
                    <StoredAuthContext.Provider
                        value={{ authorized: auth, session: session }}
                    >
                        <div id="app">
                            <AnimatePresence>
                                {popupVisible && <Popup>{popupContent}</Popup>}
                            </AnimatePresence>

                            <AnimatePresence>
                                {alertVisible && (
                                    <Alert
                                        message={alertMessage}
                                        title={alertTitle}
                                        actions={alertActions}
                                        orientation={alertOrientation}
                                    />
                                )}
                            </AnimatePresence>

                            <nav id="navbar">
                                <div id="navbar-logo">Cyfroweszkoly</div>
                                <div id="navbar-actions">
                                    <Button
                                        title="About"
                                        buttonType="text"
                                        onClick={() => navigate("/about")}
                                    />
                                    <Button
                                        title="Recruitment"
                                        onClick={() =>
                                            navigate("/recruitment/")
                                        }
                                        buttonType="text"
                                    />
                                    {auth ? (
                                        <HomeDropdown />
                                    ) : (
                                        <Button
                                            title="Log In"
                                            buttonType="primary"
                                            onClick={() =>
                                                navigate("/authorize/")
                                            }
                                        />
                                    )}
                                </div>
                            </nav>

                            <NavbarOS />

                            <AnimatePresence mode="wait">
                                <main id="main">
                                    {state == "loading" ? (
                                        <LoadingPopup />
                                    ) : (
                                        <Outlet />
                                    )}
                                </main>
                            </AnimatePresence>
                        </div>
                    </StoredAuthContext.Provider>
                </PopupContext.Provider>
            </AlertContext.Provider>
        </>
    );
}

export default App;
