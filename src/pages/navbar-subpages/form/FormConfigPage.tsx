import { useParams } from "react-router-dom";
import useAuthRedirect from "../../../hooks/useAuthRedirect";

const FormConfigPage = () => {
    useAuthRedirect();

    const { schoolId, page } = useParams();

    return (
        <div className="navbar-subpage">
            <div
                className="scrollable"
                style={{
                    gap: "0.7rem",
                }}
            >
                <span className="screen-title" style={{ textIndent: 0 }}>
                    Selection {schoolId}, page: {page}
                </span>
            </div>
        </div>
    );
};

export default FormConfigPage;
