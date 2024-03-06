import supabase, { supabasePersonal } from "../../../supabase/supabase-client";
import { Database } from "../../../supabase/types/personal";
import { Database as Public } from "../../../supabase/types/public_schema";

const ApplicationsLoader = async (): Promise<IApplicationLoader> => {
    return {
        applications: await ApplicationsFetch(),
        profiles: await ProfilesFetch(),
    };
};

const ApplicationsFetch = async () => {
    const { data } = await supabasePersonal.from("application").select();

    return data || [];
};

const ProfilesFetch = async () => {
    const { data } = await supabase.from("recruitment_profiles").select();

    return data || [];
};

export interface IApplicationLoader {
    applications: Database["personal_data"]["Tables"]["application"]["Row"][];
    profiles: Public["public"]["Tables"]["recruitment_profiles"]["Row"][];
}

export { ApplicationsLoader };
