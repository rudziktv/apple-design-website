import { useNavigate } from "react-router-dom";
import Button from "../../../apple-design/components/Buttons/Button";
import useAuth from "../../../hooks/useAuth";
import { FORM_PAGE_LINK, LOGIN_PAGE_LINK } from "../../../router/links";

const RecruitmentPage = () => {
    const navigate = useNavigate();
    const auth = useAuth();

    return (
        <div className="navbar-subpage">
            <div
                className="scrollable"
                style={{
                    gap: "0.7rem",
                }}
            >
                <span>Enter recruitment.</span>

                {auth ? (
                    <Button
                        title="Recruitment"
                        onClick={() => navigate(FORM_PAGE_LINK)}
                    />
                ) : (
                    <Button
                        title="Log In"
                        onClick={() => navigate(LOGIN_PAGE_LINK)}
                    />
                )}
            </div>
        </div>
    );
};

export default RecruitmentPage;
