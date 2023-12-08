import supabase from "../../supabase/supabase-client";

const CuratorialCompetitionsLoader = async () => {
    const { data } = await supabase.from("curatorial_competition").select();

    if (data) {
        return data;
    } else {
        return [];
    }
};

export default CuratorialCompetitionsLoader;
