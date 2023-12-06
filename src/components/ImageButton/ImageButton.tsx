import cyfroweszkolyLogo from "../../assets/logo/cyfroweszkoly-logo.svg";
import "./ImageButton.css";

const ImageButton = () => {
    return (
        <button className="image-button">
            <img src={cyfroweszkolyLogo} />

            <span>LO XI</span>
        </button>
    );
};

export default ImageButton;
