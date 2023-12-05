import { createContext, useContext } from "react";

const StoredAuthContext = createContext({
    authorized: false,
});

const useStoredAuth = () => {
    return useContext(StoredAuthContext).authorized;
};

export { StoredAuthContext, useStoredAuth };
