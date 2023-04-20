import { createClient } from "@supabase/supabase-js";

const URL = "https://ucrkkcojilmwmgvjsgza.supabase.co";

const API_KEY = process.env.VITE_API_KEY;

export const supabase = createClient(URL, API_KEY);
