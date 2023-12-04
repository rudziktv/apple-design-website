import { useEffect, useState } from "react";
import supabase from "../supabase/supabase-client";

/**
 * useAuth hook returns if user is authorized or not
 * @returns {boolean}
 */
const useAuth = () => {
    const [authorized, setAuthorized] = useState(false);

    useEffect(() => {
        (async () =>
            setAuthorized(!!(await supabase.auth.getSession()).data.session))();

        const callback = supabase.auth.onAuthStateChange((_, session) => {
            setAuthorized(!!session);
        });

        return () => callback.data.subscription.unsubscribe();
    }, []);

    return authorized;
};

export default useAuth;
