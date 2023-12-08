import supabase from "../../supabase/supabase-client";

export interface IFormData {
    competitions: {
        id: number;
        name: string | null;
    }[];
    profiles: {
        id: number;
        id_school: number | null;
        name: string | null;
        short_name: string | null;
        description: string | null;
    }[];
    languages: {
        id: number;
        name: string | null;
        can_be_first: boolean | null;
    }[];
}

const CuratorialCompetitionsLoader = async () => {
    const { data } = await supabase.from("curatorial_competition").select();

    if (data) {
        return data;
    } else {
        return [];
    }
};

const ProfilesLoader = async () => {
    const { data } = await supabase.from("recruitment_profiles").select();

    return data ? data : [];
};

const ForeginLanguagesLoader = async () => {
    const { data } = await supabase.from("foreign_languages").select();

    return data ? data : [];
};

const FormDataLoader = async (): Promise<IFormData> => {
    const competitions = await CuratorialCompetitionsLoader();
    const profiles = await ProfilesLoader();
    const languages = await ForeginLanguagesLoader();

    return {
        competitions: competitions,
        profiles: profiles,
        languages: languages,
    };
};

export default FormDataLoader;
