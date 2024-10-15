// api/supabaseClient.ts
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.0.0";

// Create the Supabase client instance
const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
const supabaseKey = Deno.env.get("SUPABASE_KEY")!;
export const supabase = createClient(supabaseUrl, supabaseKey);
