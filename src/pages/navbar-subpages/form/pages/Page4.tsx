import { useEffect } from "react";
import Button from "../../../../apple-design/components/Buttons/Button";
import { useLoaderData, useNavigate } from "react-router-dom";
import { transitionFade } from "../../../../apple-design/animation/page-transition";
import Dropdown from "../../../../apple-design/components/Dropdown/Dropdown";
import { IDropdownItem } from "../../../../apple-design/components/Dropdown/DropdownItem";
import { useStoredUserField } from "../../../../hooks/useFieldForm";
import { IFormData } from "../../../../data/data-loader/FormDataLoader";
import { FormFieldsAliases } from "../../../../data/form-data/FormFiledsAliases";

const Page4 = () => {
    const loaderData = useLoaderData() as IFormData;

    const [mainLanguage, setMainLanguage] = useStoredUserField<IDropdownItem>(
        { id: 0, label: "Brak" },
        FormFieldsAliases.application.mainLanguague
    );

    const mainLanugages = () => {
        const languages = loaderData.languages.filter(
            (item) => item.can_be_first
        );

        return languages.map((item) => ({
            id: item.id,
            label: item.name || "Label",
        }));
    };

    const secondaryLanguages = () => {
        const languages = loaderData.languages.filter(
            (item) => item.id !== mainLanguage?.id
        );

        return languages.map((item) => ({
            id: item.id,
            label: item.name || "Label",
        }));
    };

    const [secondaryLang, setSecondaryLang] = useStoredUserField<IDropdownItem>(
        { id: 0, label: "Brak" },
        FormFieldsAliases.application.secondaryLanguague
    );

    useEffect(() => {
        if (mainLanguage.id == secondaryLang.id) {
            setSecondaryLang({ id: 0, label: "Brak" });
        }
    }, [mainLanguage]);

    const navigate = useNavigate();

    return transitionFade(
        <div className="form-page">
            <span className="form-title-page">Języki obce</span>
            <Dropdown
                label="Wybierz wiodący język obcy"
                items={mainLanugages()}
                value={mainLanguage}
                onChange={setMainLanguage}
            />
            <Dropdown
                label="Wybierz drugi język obcy"
                items={secondaryLanguages()}
                value={secondaryLang}
                onChange={setSecondaryLang}
                disabled={mainLanguage.id === 0}
            />
            <div className="inline-actions">
                <Button
                    title="Wstecz"
                    leadingIcon={<i className="ri-arrow-left-s-line" />}
                    onClick={() => navigate("/form/lo11/3")}
                />
                <Button
                    title="Dalej"
                    trailingIcon={<i className="ri-arrow-right-s-line" />}
                    onClick={() => navigate("/form/lo11/5")}
                    disabled={mainLanguage.id === 0 || secondaryLang.id === 0}
                />
            </div>
        </div>
    );
};

export default Page4;
