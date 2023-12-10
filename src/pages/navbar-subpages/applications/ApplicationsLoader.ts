import { supabasePersonal } from "../../../supabase/supabase-client";
import { Database } from "../../../supabase/types/personal";

const ApplicationsLoader = async (): Promise<IApplicationLoader> => {
    return {
        applications: await ApplicationsFetch(),
    };
};

const ApplicationsFetch = async () => {
    const { data } = await supabasePersonal.from("application").select();

    return data || [];
};

export interface IApplicationLoader {
    applications: Database["personal_data"]["Tables"]["application"]["Row"][];
}

export { ApplicationsLoader };
