import Checkbox from "../../../../apple-design/components/Checkbox/Checkbox";
import TextInput from "../../../../apple-design/components/TextInput/TextInput";
import Button from "../../../../apple-design/components/Buttons/Button";
import {
    useStoredField,
    useStoredUserField,
} from "../../../../hooks/useFieldForm";
import { useNavigate } from "react-router-dom";
import { transitionFade } from "../../../../apple-design/animation/page-transition";
import { NameCallbackRegex } from "../../../../security/validation/FormRegex";
import { FormFieldsAliases } from "../../../../data/form-data/FormFiledsAliases";

const Page1 = () => {
    const [first, setFirst] = useStoredUserField(
        false,
        FormFieldsAliases.application.isOurSchoolFirstChoice
    );
    const [school, setSchool] = useStoredUserField(
        "",
        FormFieldsAliases.application.finishedSchoolName,
        NameCallbackRegex
    );

    const navigate = useNavigate();

    return transitionFade(
        <div className="form-page">
            <span className="form-title-page">Podstawowe informacje</span>
            <div className="inline-checkbox">
                <Checkbox value={first} onChange={setFirst} />
                <span>LO XI to szkoła mojego pierwszego wyboru</span>
            </div>
            <TextInput
                label="Nazwa ukończonej szkoły"
                placeholder="np. Szkoła Podstawowa nr. 311 w Olsztynie"
                value={school}
                onTextChange={setSchool}
            />
            <div className="inline-actions">
                <Button
                    title="Strona Główna"
                    leadingIcon={<i className="ri-home-line" />}
                    disabled
                />
                <Button
                    disabled={!school}
                    title="Dalej"
                    trailingIcon={<i className="ri-arrow-right-s-line" />}
                    onClick={() => navigate("/form/lo11/2")}
                />
            </div>
        </div>
    );
};

export default Page1;
