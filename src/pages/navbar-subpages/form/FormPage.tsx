import { useNavigate } from "react-router-dom";
import Button from "../../../apple-design/components/Buttons/Button";
import ImageButton from "../../../components/ImageButton/ImageButton";
import useAuthRedirect from "../../../hooks/useAuthRedirect";

const FormPage = () => {
    useAuthRedirect();

    const navigate = useNavigate();

    return (
        <div className="navbar-subpage">
            <div
                className="scrollable"
                style={{
                    gap: "0.7rem",
                }}
            >
                <span className="screen-title" style={{ textIndent: 0 }}>
                    Select your choice
                </span>

                <Button
                    title="LO XI"
                    onClick={() => navigate("/form/lo11/1")}
                />

                <ImageButton />
            </div>
        </div>
    );
};

export default FormPage;
