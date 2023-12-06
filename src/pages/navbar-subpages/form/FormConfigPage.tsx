import { useParams } from "react-router-dom";
import useAuthRedirect from "../../../hooks/useAuthRedirect";
import Page1 from "./pages/Page1";
import "./Form.css";
import Page2 from "./pages/Page2";

const FormConfigPage = () => {
    useAuthRedirect();

    const { schoolId, page } = useParams();

    return (
        <div className="navbar-subpage">
            <div
                className="scrollable"
                style={{
                    gap: "0.7rem",
                    alignItems: "stretch",
                }}
            >
                <span className="screen-title" style={{ textIndent: 0 }}>
                    Selection {schoolId}, page: {page}
                </span>

                {page === "1" && <Page1 />}
                {page === "2" && <Page2 />}
            </div>
        </div>
    );
};

export default FormConfigPage;
