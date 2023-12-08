import { useState } from "react";
import Checkbox from "../../../../apple-design/components/Checkbox/Checkbox";
import Button from "../../../../apple-design/components/Buttons/Button";
import { useLoaderData, useNavigate } from "react-router-dom";
import { transitionFade } from "../../../../apple-design/animation/page-transition";
import Dropdown from "../../../../apple-design/components/Dropdown/Dropdown";
import { IDropdownItem } from "../../../../apple-design/components/Dropdown/DropdownItem";
import { useStoredUserField } from "../../../../hooks/useFieldForm";
import { IFormData } from "../../../../data/data-loader/FormDataLoader";
// import supabase from "../../../../supabase/supabase-client";

const Page3 = () => {
    const loaderData = useLoaderData() as IFormData;

    const [competition, setCompetition] = useState(false);
    // const [name, setName] = useState<IDropdownItem>();
    const [mainProfile, setMainProfile] = useStoredUserField<IDropdownItem>(
        { id: 0, label: "Brak" },
        "main-profile"
    );

    const secondaryProfiles = () => {
        const profiles = loaderData.profiles.filter(
            (item) => item.id !== mainProfile?.id
        );

        profiles.unshift({
            id: 0,
            id_school: 0,
            name: "Dowolny",
            short_name: "Dowolny",
            description: "",
        });

        return profiles.map((item) => ({
            id: item.id,
            label: item.name || "Label",
        }));
    };

    const [secondaryProfile, setSecondaryProfile] =
        useStoredUserField<IDropdownItem>(
            { id: 0, label: "Dowolny" },
            "secondary-profile"
        );

    const navigate = useNavigate();

    return transitionFade(
        <div className="form-page">
            <span className="form-title-page">Profil</span>
            {/* <div className="inline-checkbox">
                <Checkbox value={competition} onChange={setCompetition} />
                <span>Laureat przedmiotowego konkursu kuratoryjnego</span>
            </div> */}
            <Dropdown
                label="Wybierz kierunek pierwszego wyboru"
                items={loaderData.profiles.map((item) => ({
                    id: item.id,
                    label: item.name || "Label",
                }))}
                value={mainProfile}
                onChange={setMainProfile}
            />
            <Dropdown
                label="Wybierz kierunek drugiego wyboru"
                items={secondaryProfiles()}
                value={secondaryProfile}
                onChange={setSecondaryProfile}
                disabled={mainProfile.id === 0}
            />
            <div className="inline-actions">
                <Button
                    title="Wstecz"
                    leadingIcon={<i className="ri-arrow-left-s-line" />}
                    onClick={() => navigate("/form/lo11/2")}
                />
                <Button
                    title="Dalej"
                    trailingIcon={<i className="ri-arrow-right-s-line" />}
                    onClick={() => navigate("/form/lo11/4")}
                    disabled={mainProfile.id === 0}
                />
            </div>
        </div>
    );
};

export default Page3;
