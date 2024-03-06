import { useLocation } from "react-router-dom";
import "./NavbarOS.css";

const NavbarOS = () => {
    const { pathname } = useLocation();

    return (
        <div className="navbar-os">
            <div className="navbar-os-group">
                <i className="ri-apple-fill navbar-os-item" />
                <div className="navbar-os-item active">
                    {pathname.toUpperCase()}
                </div>
            </div>

            <div className="navbar-os-group" style={{ marginLeft: "auto" }}>
                <div className="navbar-os-item">Recruitment</div>
                <div className="navbar-os-item">About</div>
                <div className="navbar-os-item primary">
                    <i className="ri-login-box-line" /> Log In
                </div>
            </div>
        </div>
    );
};

export default NavbarOS;
