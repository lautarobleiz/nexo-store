import { validateEmail, validateUsername, validatePassword, comparePasswords } from "@/utils/validations"
import { supabase } from "../libs/supabase";

export const register = async (email: string, username: string, password: string, confirmPassword: string) => {

    if (!validateEmail(email) || !validateUsername(username) || !validatePassword(password) || !comparePasswords(password, confirmPassword)){
        return false
    }

    /*
        Básicamente: lo guardo en la tabla que tiene supabase para los users, y luego debo
        guardarlo (sin la contraseña) en mi tabla de users. Asi, si quiero trabajar sobre 
        los datos del usuario, los traigo de mi tabla users que creé yo.
    */
    const { error } = await supabase.auth.signUp({ 
        email,
        password
    })

};
