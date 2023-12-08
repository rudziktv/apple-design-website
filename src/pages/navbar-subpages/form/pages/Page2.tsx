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

const Page2 = () => {
    const loaderData = useLoaderData() as IFormData;

    const [competition, setCompetition] = useStoredUserField(
        false,
        "competition-exist"
    );
    const [name, setName] = useStoredUserField<IDropdownItem>(
        { id: 0, label: "Brak" },
        "competition-name"
    );

    const navigate = useNavigate();

    return transitionFade(
        <div className="form-page">
            <span className="form-title-page">
                Udział w konkursie kuratoryjnym
            </span>
            <div className="inline-checkbox">
                <Checkbox value={competition} onChange={setCompetition} />
                <span>Laureat przedmiotowego konkursu kuratoryjnego</span>
            </div>
            <Dropdown
                label="Wybierz konkurs"
                items={loaderData.competitions.map((item) => ({
                    id: item.id,
                    label: item.name || "Label",
                }))}
                value={name}
                onChange={setName}
                disabled={!competition}
            />
            <div className="inline-actions">
                <Button
                    title="Wstecz"
                    leadingIcon={<i className="ri-arrow-left-s-line" />}
                    onClick={() => navigate("/form/lo11/1")}
                />
                <Button
                    title="Dalej"
                    trailingIcon={<i className="ri-arrow-right-s-line" />}
                    onClick={() => navigate("/form/lo11/3")}
                    disabled={competition && !name.id}
                />
            </div>
        </div>
    );
};

export default Page2;
