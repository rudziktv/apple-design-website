import { createClient } from "@supabase/supabase-js";
import { API_ANON_KEY, API_URL } from "./supabase-api";

const supabase = createClient(API_URL, API_ANON_KEY);

export default supabase;
