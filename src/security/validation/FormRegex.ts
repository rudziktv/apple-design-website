import { FieldCallback } from "../../hooks/useFieldForm";

const NameCallbackRegex: FieldCallback<string> = (value, setValue) => {
    const forbidden = new RegExp("([^\\-\\.\\d\\w\\sąĄśŚćĆżŻźŹóÓęĘńŃłŁ])");
    if (forbidden.test(value)) {
        return;
    }
    setValue(value);
};

export { NameCallbackRegex };
