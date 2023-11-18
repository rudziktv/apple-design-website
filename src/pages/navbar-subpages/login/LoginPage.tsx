import Button from "../../../apple-design/components/Buttons/Button";
import TextInput from "../../../apple-design/components/TextInput/TextInput";

export function LoginPage() {
    return (
        <div className="navbar-subpage">
            <div
                className="scrollable"
                style={{
                    gap: "0.5rem",
                }}
            >
                <TextInput label="Email" />
                <TextInput label="Password" type="password" />

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
                        buttonType="text"
                        leadingIcon={<i className="ri-user-add-line" />}
                    />
                    <Button
                        title="Sign In"
                        buttonType="primary"
                        leadingIcon={<i className="ri-login-box-line" />}
                    />
                </div>
            </div>
        </div>
    );
}
