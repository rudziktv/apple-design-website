import Loading from "../Loading/Loading";
import "./LoadingPopup.css";

const LoadingPopup = () => {
    return (
        <div className="loading-popup">
            <Loading />
            <span>Loading...</span>
        </div>
    );
};

export default LoadingPopup;
