import {createClient} from "@supabase/supabase-js"

const superbaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_KEY! ;
export const superbase = createClient(superbaseUrl,supabaseAnonKey);

export function createClerkSupabaseClient(getToken:() => Promise<string | null>){
    return createClient(superbaseUrl,supabaseAnonKey,{
        async accessToken(){
            return getToken();
        }
    });
}