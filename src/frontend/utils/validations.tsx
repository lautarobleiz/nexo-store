export const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

export const validateUsername = (username: string) => {
    const isUsernameValid = username.length >= 6;
    return isUsernameValid;
};

export const validatePassword = (password: string) => {
    const isLengthValid = password.length >= 6;
    const isCaseValid = /[A-Z]/.test(password);
    return isLengthValid && isCaseValid;
};

export const comparePasswords = (password: string, confirmPassword: string) => {
    return password === confirmPassword;
};