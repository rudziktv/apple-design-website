import { useLoaderData } from "react-router-dom";
import { IApplicationLoader } from "./ApplicationsLoader";

const ApplicationsPage = () => {
    const loaderData = useLoaderData() as IApplicationLoader;

    return (
        <div className="navbar-subpage">
            <div className="scrollable">
                <span className="screen-title">Zgłoszenia</span>
                <div>
                    {loaderData.applications.map((item) => (
                        <div className="application-card" key={item.id}>
                            <span>{item.submit_date}</span>
                            <span>{item.finished_school}</span>
                            <span>{String(item.first_choice)}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ApplicationsPage;
