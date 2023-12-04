import { useNavigate } from "react-router-dom";
import { transitionSlide } from "../../../apple-design/animation/page-transition";
import Button from "../../../apple-design/components/Buttons/Button";
import TextInput from "../../../apple-design/components/TextInput/TextInput";
import { useState } from "react";
import supabase from "../../../supabase/supabase-client";

const LoginPage = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const tryLogin = async () => {
        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            alert(error.message);
        }
    };

    return transitionSlide(
        <div className="navbar-subpage">
            <div
                className="scrollable"
                style={{
                    gap: "0.7rem",
                    padding: "1rem",
                }}
            >
                <span className="screen-title">Login to your account</span>
                <TextInput
                    label="Email"
                    type="email"
                    value={email}
                    onTextChange={setEmail}
                />
                <TextInput
                    label="Password"
                    type="password"
                    value={password}
                    onTextChange={setPassword}
                />

                <div>
                    <Button
                        title="Forgot password?"
                        buttonSize="small"
                        buttonType="secondary-text"
                        leadingIcon={<i className="ri-question-line" />}
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
