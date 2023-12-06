import { useState } from "react";
import Checkbox from "../../../../apple-design/components/Checkbox/Checkbox";
import TextInput from "../../../../apple-design/components/TextInput/TextInput";
import Button from "../../../../apple-design/components/Buttons/Button";
import useFormField from "../../../../hooks/useFieldForm";
import { useNavigate } from "react-router-dom";
import { transitionFade } from "../../../../apple-design/animation/page-transition";

const Page2 = () => {
    const [competition, setCompetition] = useState(false);

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
            <TextInput label="Nazwa konkursu" placeholder="Work in progress" />
            <div className="inline-actions">
                <Button
                    title="Wstecz"
                    leadingIcon={<i className="ri-arrow-left-s-line" />}
                    onClick={() => navigate("/form/lo11/1")}
                />
                <Button
                    title="Dalej"
                    trailingIcon={<i className="ri-arrow-right-s-line" />}
                    onClick={() => navigate("/form/lo11/2")}
                />
            </div>
        </div>
    );
};

export default Page2;
