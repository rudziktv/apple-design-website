import { useState } from "react";
import { useStoredSession } from "../../hooks/useStoredAuth";

const SaveData = <T>(key: string, data: T) => {
    localStorage.setItem(key, JSON.stringify(data));
};

const LoadData = <T>(key: string, defaultValue?: T) => {
    const data = localStorage.getItem(key);

    if (data) {
        return JSON.parse(data) as T;
    }

    if (defaultValue != undefined) {
        SaveData(key, defaultValue);
        return defaultValue;
    }

    return {} as T;
};

const useSavedData = <T>(
    key: string,
    defaultValue?: T
): [T, React.Dispatch<React.SetStateAction<T>>] => {
    const [data, setData] = useState(LoadData<T>(key, defaultValue));

    const setDataWithStorage: React.Dispatch<React.SetStateAction<T>> = (
        value: React.SetStateAction<T>
    ) => {
        const newData = value instanceof Function ? value(data) : value;
        setData(value);
        SaveData(key, newData);
    };

    // return useState<T>(LoadData<T>(key, defaultValue));
    return [data, setDataWithStorage];
};

const useUserData = <T>(key: string, defaultValue?: T) => {
    const userId = useStoredSession()?.user?.id || "unknown-user";
    return useSavedData(`${userId}-${key}`, defaultValue);
};

export { SaveData, LoadData, useSavedData, useUserData };
