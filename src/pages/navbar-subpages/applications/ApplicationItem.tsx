import { useLoaderData } from "react-router-dom";
import { Database } from "../../../supabase/types/personal";
import { IApplicationLoader } from "./ApplicationsLoader";

const ApplicationItem = ({ item }: ApplicationItemProps) => {
    const { profiles } = useLoaderData() as IApplicationLoader;

    const displayDate = new Date(item.submit_date);

    const selectedProfile = profiles.find(
        (i) => i.id === item.id_first_profile
    );

    const secondaryProfile = profiles.find(
        (i) => i.id === item.id_second_profile
    );

    return (
        <div className="application-card">
            <span className="app-submit-date">
                {displayDate.toLocaleDateString()}
            </span>
            <span>
                Finished school: <>{item.finished_school}</>
            </span>
            <span>Selected profile: {selectedProfile?.name}</span>
            <span>Secondary profile: {secondaryProfile?.name || "Any"}</span>
        </div>
    );
};

export interface ApplicationItemProps {
    item: Database["personal_data"]["Tables"]["application"]["Row"];
}

export default ApplicationItem;
