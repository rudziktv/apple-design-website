import { useLoaderData } from "react-router-dom";
import { IApplicationLoader } from "./ApplicationsLoader";
import "./ApplicationsPage.css";
import ApplicationItem from "./ApplicationItem";

const ApplicationsPage = () => {
    const loaderData = useLoaderData() as IApplicationLoader;

    return (
        <div className="navbar-subpage">
            <div className="scrollable">
                <span className="screen-title">Zgłoszenia</span>
                <div className="applications-list">
                    {loaderData.applications.map((item) => (
                        <ApplicationItem item={item} key={item.id} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ApplicationsPage;
