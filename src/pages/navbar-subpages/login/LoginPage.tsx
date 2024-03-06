import { useNavigate } from "react-router-dom";
import { transitionSlide } from "../../../apple-design/animation/page-transition";
import Button from "../../../apple-design/components/Buttons/Button";
import TextInput from "../../../apple-design/components/TextInput/TextInput";
import { useEffect, useState } from "react";
import supabase from "../../../supabase/supabase-client";
import useAlert from "../../../hooks/useAlert";
import { CheckPassword } from "../../../security/validation/PasswordValidation";
import { CheckEmail } from "../../../security/validation/EmailValidation";
import { useStoredAuth } from "../../../hooks/useStoredAuth";

const LoginPage = () => {
    const navigate = useNavigate();
    const auth = useStoredAuth();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const tryLogin = async () => {
        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            loginAlert(true, {
                title: "Error",
                message: error.message,
            });
            // alert(error.message);
        }
    };

    useEffect(() => {
        if (auth) {
            navigate("/");
        }
    }, [auth]);

    const forgot = useAlert(
        "Forgot password?",
        "This feature is still under development. Not avaiable yet.",
        (setVisible) => [
            {
                title: "Confirm",
                onClick: () => setVisible(false),
            },
        ]
    );

    const loginAlert = useAlert("Error during login", "", (setVisible) => [
        {
            title: "Confirm",
            onClick: () => setVisible(false),
            color: "error",
        },
    ]);

    const loginDisallowed = !!CheckPassword(password) || !!CheckEmail(email);

    return transitionSlide(
        <div className="navbar-subpage">
            <div
                className="scrollable"
                style={{
                    gap: "0.7rem",
                }}
            >
                {/* <LoadingPopup /> */}
                <span className="screen-title">Login to your account</span>
                <TextInput
                    label="Email"
                    type="email"
                    value={email}
                    onTextChange={setEmail}
                    error={CheckEmail(email, true)}
                />
                <TextInput
                    label="Password"
                    type="password"
                    value={password}
                    onTextChange={setPassword}
                    error={CheckPassword(password, true)}
                />

                <div>
                    <Button
                        title="Forgot password?"
                        buttonSize="small"
                        buttonType="tertiary-text"
                        leadingIcon={<i className="ri-question-line" />}
                        onClick={() => forgot(true)}
                    />
                </div>

                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: "5rem",
                    }}
                >
                    <Button
                        title="Create account"
                        buttonType="semi"
                        leadingIcon={<i className="ri-user-add-line" />}
                        onClick={() => navigate("/signup/")}
                    />
                    <Button
                        disabled={loginDisallowed}
                        title="Sign In"
                        buttonType="primary"
                        leadingIcon={<i className="ri-login-box-line" />}
                        onClick={tryLogin}
                    />
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
