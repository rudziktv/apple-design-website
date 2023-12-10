import Button from "../../../../apple-design/components/Buttons/Button";
import { useNavigate } from "react-router-dom";
import { transitionFade } from "../../../../apple-design/animation/page-transition";
import TextInput from "../../../../apple-design/components/TextInput/TextInput";
import { useStoredUserField } from "../../../../hooks/useFieldForm";
import { PolishNameCallbackRegex } from "../../../../security/validation/FormRegex";
import { FormFieldsAliases } from "../../../../data/form-data/FormFiledsAliases";
import Checkbox from "../../../../apple-design/components/Checkbox/Checkbox";
import { useState } from "react";
import useAlert from "../../../../hooks/useAlert";
import LoadingPopup from "../../../../apple-design/components/LoadingPopup/LoadingPopup";
import usePopup from "../../../../hooks/usePopup";
import { ACCOUNT_PAGE_LINK } from "../../../../router/links";
import { SendForm } from "../../../../data/form-data/FormSender";

const Final = () => {
    const navigate = useNavigate();

    const [eula, setEula] = useState(false);

    const [comments, setComments] = useStoredUserField(
        "",
        FormFieldsAliases.application.comments,
        PolishNameCallbackRegex
    );

    const sendAlert = useAlert(
        "Poszło",
        "Twoje zgłoszenie zostało wysłane",
        (set) => [
            {
                title: "Zamknij",
                onClick: () => {
                    set(false);
                    navigate(ACCOUNT_PAGE_LINK);
                },
            },
        ]
    );

    const loading = usePopup(<LoadingPopup />);

    const send = async () => {
        loading(true);
        await SendForm();
        loading(false);
        sendAlert(true);
    };

    return transitionFade(
        <div className="form-page">
            <span className="form-title-page">Zgody i uwagi</span>

            <TextInput
                label="Uwagi"
                value={comments}
                onTextChange={setComments}
            />

            <div className="inline-checkbox">
                <Checkbox value={eula} onChange={setEula} />
                <span>Zgadzam się na przetwarzanie moich danych osobowych</span>
            </div>

            {/* <LoadingPopup /> */}

            <div className="inline-actions">
                <Button
                    title="Wstecz"
                    leadingIcon={<i className="ri-arrow-left-s-line" />}
                    onClick={() => navigate("/form/lo11/7")}
                />
                <Button
                    title="Wyślij"
                    trailingIcon={<i className="ri-send-plane-2-line" />}
                    onClick={send}
                    disabled={!eula}
                />
            </div>
        </div>
    );
};

export default Final;
