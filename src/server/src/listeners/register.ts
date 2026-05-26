import { validateEmail, validateUsername, validatePassword, comparePasswords } from "@/utils/validations"

export const register = async (email: string, username: string, password: string, confirmPassword: string) => {

    if (!validateEmail(email) || !validateUsername(username) || !validatePassword(password) || !comparePasswords(password, confirmPassword)){
        console.log("adentro false");
        return false
    }

    return true
};
