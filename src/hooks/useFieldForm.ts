import React, { useState } from "react";
import {
    SaveData,
    useSavedData,
    useUserData,
} from "../data/data-handler/DataHandler";

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

const useStoredField = <T>(
    defaultValue: T,
    key: string,
    callback?: (value: T, setInputValue: (value: T) => void) => void
): [T, React.Dispatch<React.SetStateAction<T>>] => {
    const [value, setValue] = useSavedData(key, defaultValue);

    const onChange = (v: React.SetStateAction<T>) => {
        if (callback) {
            const val = v instanceof Function ? v(value) : value;
            callback(val, setValue);
        } else {
            setValue(value);
        }
    };

    return [value, onChange];
};

export default useFormField;
export { useStoredField };
