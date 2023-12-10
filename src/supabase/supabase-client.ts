import { createClient } from "@supabase/supabase-js";
import { API_ANON_KEY, API_URL } from "./supabase-api";
import { Database } from "./types/public_schema";
import { Database as Personal } from "./types/personal";

const supabase = createClient<Database>(API_URL, API_ANON_KEY);
const supabasePersonal = createClient<Personal>(API_URL, API_ANON_KEY, {
    db: { schema: "personal_data" },
});

export { supabase, supabasePersonal };
export default supabase;
