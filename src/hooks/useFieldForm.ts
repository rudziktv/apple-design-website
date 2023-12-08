import React, { useState } from "react";
import { useSavedData, useUserData } from "../data/data-handler/DataHandler";

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
    const [field, setField] = useSavedData(key, defaultValue);

    const onChange = (value: React.SetStateAction<T>) => {
        const newValue = value instanceof Function ? value(field) : value;
        if (callback) {
            callback(newValue, setField);
        } else {
            setField(value);
        }
    };

    return [field, onChange];
};

const useStoredUserField = <T>(
    defaultValue: T,
    key: string,
    callback?: FieldCallback<T>
): [T, React.Dispatch<React.SetStateAction<T>>] => {
    const [field, setField] = useUserData(key, defaultValue);

    const onChange = (value: React.SetStateAction<T>) => {
        const newValue = value instanceof Function ? value(field) : value;
        if (callback) {
            callback(newValue, setField);
        } else {
            setField(value);
        }
    };

    return [field, onChange];
};

type FieldCallback<T> = (value: T, setValue: (value: T) => void) => void;

export default useFormField;
export { useStoredField, useStoredUserField };
export type { FieldCallback };
