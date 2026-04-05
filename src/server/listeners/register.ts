import { validateEmail, validateUsername, validatePassword, comparePasswords } from "@/utils/validations"
import { supabase } from "../libs/supabase";

export const register = async (email: string, username: string, password: string, confirmPassword: string) => {

    if (!validateEmail(email) || !validateUsername(username) || !validatePassword(password) || !comparePasswords(password, confirmPassword)){
        return false
    }

    const { error } = await supabase.auth.signUp({ 
        email: email, 
        password: password,
        options: {
            data: {
                username: username
            }
        }
    });
    if (error) throw error;
    return true;

}
