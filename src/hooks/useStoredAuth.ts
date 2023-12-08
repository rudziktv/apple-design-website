import { Session } from "@supabase/supabase-js";
import { createContext, useContext } from "react";

interface IStoredAuthContext {
    authorized: boolean;
    session: Session | null;
}

const StoredAuthContext = createContext<IStoredAuthContext>({
    authorized: false,
    session: null,
});

const useStoredAuth = () => {
    return useContext(StoredAuthContext).authorized;
};

const useStoredSession = () => {
    return useContext(StoredAuthContext).session;
};

export { StoredAuthContext, useStoredAuth, useStoredSession };
