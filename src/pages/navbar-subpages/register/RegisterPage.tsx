import { useState } from "react";
import Button from "../../../apple-design/components/Buttons/Button";
import TextInput from "../../../apple-design/components/TextInput/TextInput";
import useFormField from "../../../hooks/useFieldForm";
import { CheckEmail } from "../../../security/validation/EmailValidation";

const RegisterPage = () => {
    // const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordRepeat, setPasswordRepeat] = useState("");

    const [email, setEmail] = useFormField("", (value, setValue) => {
        setValue(value);

        const validTopLevelDomain = new RegExp(
            "([a-zA-Z0-9\\_\\-\\.]+)@([a-zA-Z]+)\\.(.+[^.]$)"
        );
        const validDomain = new RegExp("([a-zA-Z0-9\\_\\-\\.]+)@([a-zA-Z]+)");
        const validForm = new RegExp("([a-zA-Z0-9\\_\\-\\.]+)@");

        // console.log("full-split", validTopLevelDomain.exec(value));
        // console.log("domain", validDomain.exec(value));
        // console.log("name", validForm.exec(value));
    });

    return (
        <div className="navbar-subpage">
            <div
                className="scrollable"
                style={{
                    gap: "0.7rem",
                    padding: "1rem",
                }}
            >
                <TextInput
                    label="Email"
                    classNameContainer="glow"
                    // topLabel="Your new Apple ID."
                    placeholder="example@domain.com"
                    // supportingText="This email will be used to sign in."
                    error={CheckEmail(email, true)}
                    value={email}
                    onTextChange={setEmail}
                />
                <TextInput
                    label="Password"
                    type="password"
                    classNameContainer="outlined"
                    // error="Please enter a valid password."
                />
                <TextInput
                    label="Repeat password"
                    type="password"
                    // error="Passwords does not match."
                    classNameContainer="focus-outline"
                />

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
                    />
                    <Button
                        title="Sign Up"
                        buttonType="primary"
                        leadingIcon={<i className="ri-edit-2-line" />}
                    />
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
