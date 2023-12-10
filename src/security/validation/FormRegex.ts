import { FieldCallback } from "../../hooks/useFieldForm";

const NameCallbackRegex: FieldCallback<string> = (value, setValue) => {
    const forbidden = new RegExp("([^\\-\\.\\d\\w\\sąĄśŚćĆżŻźŹóÓęĘńŃłŁ])");
    if (forbidden.test(value)) {
        return;
    }
    setValue(value);
};

const PolishNameCallbackRegex: FieldCallback<string> = (value, setValue) => {
    const forbidden = new RegExp("([^\\-\\w\\sąĄśŚćĆżŻźŹóÓęĘńŃłŁ])");
    if (forbidden.test(value)) {
        return;
    }
    setValue(value);
};

const PeselCallbackRegex: FieldCallback<string> = (value, setValue) => {
    const forbidden = new RegExp("[^\\d]");
    if (forbidden.test(value)) {
        return;
    }
    setValue(value);
};

const PhoneCallbackRegex: FieldCallback<string> = (value, setValue) => {
    const forbidden = new RegExp("[^\\+\\d]");
    if (forbidden.test(value)) {
        return;
    }
    setValue(value);
};

const ZipCodeCallbackRegex: FieldCallback<string> = (value, setValue) => {
    const forbidden = new RegExp("[^\\-\\d]");
    if (forbidden.test(value)) {
        return;
    }
    setValue(value);
};

export {
    NameCallbackRegex,
    PeselCallbackRegex,
    PolishNameCallbackRegex,
    ZipCodeCallbackRegex,
    PhoneCallbackRegex,
};
