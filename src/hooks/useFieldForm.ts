import { useState } from "react";

const useFormField = <T>(
    initialValue: T,
    callback?: (value: T, setInputValue: (value: T) => void) => void
): [T, (value: T) => void] => {
    const [value, setValue] = useState(initialValue);

    const onChange = (value: T) => {
        if (callback) {
            callback(value, setValue);
        } else {
            setValue(value);
        }
    };

    return [value, onChange];
};

export default useFormField;
