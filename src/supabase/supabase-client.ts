import { createClient } from "@supabase/supabase-js";
import { API_ANON_KEY, API_URL } from "./supabase-api";
import { Database } from "./types/public_schema";

const supabase = createClient<Database>(API_URL, API_ANON_KEY);

export default supabase;
