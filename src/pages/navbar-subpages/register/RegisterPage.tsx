import { useState } from "react";
import Button from "../../../apple-design/components/Buttons/Button";
import TextInput from "../../../apple-design/components/TextInput/TextInput";
import useFormField from "../../../hooks/useFieldForm";
import { CheckEmail } from "../../../security/validation/EmailValidation";
import Checkbox from "../../../apple-design/components/Checkbox/Checkbox";
import { CheckPassword } from "../../../security/validation/PasswordValidation";
import { useNavigate } from "react-router-dom";
import { transitionSlide } from "../../../apple-design/animation/page-transition";

const RegisterPage = () => {
    // const [email, setEmail] = useState("");

    const navigate = useNavigate();

    const [password, setPassword] = useState("");
    const [passwordRepeat, setPasswordRepeat] = useState("");

    const [eula, setEula] = useState(false);

    const [email, setEmail] = useFormField("", (value, setValue) => {
        const forbidden = new RegExp("([^a-zA-Z0-9\\_\\-\\.\\@])");
        if (forbidden.test(value)) {
            return;
        }
        setValue(value);

        // const validTopLevelDomain = new RegExp(
        //     "([a-zA-Z0-9\\_\\-\\.]+)@([a-zA-Z]+)\\.(.+[^.]$)"
        // );
        // const validDomain = new RegExp("([a-zA-Z0-9\\_\\-\\.]+)@([a-zA-Z]+)");
        // const validForm = new RegExp("([a-zA-Z0-9\\_\\-\\.]+)@");

        // // console.log("full-split", validTopLevelDomain.exec(value));
        // // console.log("domain", validDomain.exec(value));
        // // console.log("name", validForm.exec(value));
    });

    return transitionSlide(
        <div
            className="navbar-subpage"
            style={{
                width: "100%",
                maxWidth: "400px",
            }}
        >
            <div
                className="scrollable"
                style={{
                    gap: "0.7rem",
                    padding: "1rem",
                }}
            >
                <span className="screen-title">Register your account</span>
                <TextInput
                    label="Email"
                    placeholder="example@domain.com"
                    error={CheckEmail(email, true)}
                    value={email}
                    onTextChange={setEmail}
                />
                <TextInput
                    label="Password"
                    type="password"
                    value={password}
                    onTextChange={setPassword}
                    error={CheckPassword(password)}
                />
                <TextInput
                    label="Repeat password"
                    type="password"
                    value={passwordRepeat}
                    onTextChange={setPasswordRepeat}
                />

                <div
                    style={{
                        display: "flex",
                        // justifyContent: "space-between",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        gap: "0.5rem",
                    }}
                >
                    <Checkbox value={eula} onChange={setEula} />
                    <span>
                        I agree to the <a href="">terms</a>
                    </span>
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
                        title="Back"
                        buttonType="text"
                        leadingIcon={<i className="ri-arrow-left-s-line" />}
                        onClick={() => navigate("/authorize/")}
                    />
                    <Button
                        title="Sign Up"
                        buttonType="primary"
                        leadingIcon={<i className="ri-edit-2-line" />}
                    />
                </div>
            </div>
        </div>,
        "right"
    );
};

export default RegisterPage;
