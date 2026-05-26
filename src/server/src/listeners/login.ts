export const login = (email: string, password: string) => {
    /*
    La contraseña está hasheada. Para compararlas: mando la contra que ingresó el usuario a supabase 
    y el mismo le aplica el hash y compara ese hash con el que tiene guardado. Si son iguales, entras,
    sino la chupas. Obvio, también comparas el mail.
    */
}