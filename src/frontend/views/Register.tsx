import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Button } from "../components/ui/button";
import { Navbar } from "../components/navbar";
import { Link } from "react-router";
import { useState } from "react";
import { register } from "../../server/listeners/register";
import { validateEmail, validateUsername, validatePassword, comparePasswords } from "../utils/validations";
import { AlertDialog, AlertDialogTitle, AlertDialogDescription, AlertDialogHeader, AlertDialogFooter, AlertDialogAction, AlertDialogContent } from "@/components/ui/alert-dialog";

export const Register = () => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [alertDialog, setAlertDialog] = useState({title: "", description: ""});
    const [isDialogOpen, setIsDialogOpen] = useState(false);


    const storeData = async () => {
        //Hacer validaciones
        const emailValid = validateEmail(email);
        const usernameValid = validateUsername(username);
        const passwordValid = validatePassword(password);
        const passwordsMatch = comparePasswords(password, confirmPassword);

        if (!emailValid){
            setAlertDialog({title: "Datos inválidos", description: "El email ingresado debe tener un formato válido (ej: usuario@dominio.com)"});
            setIsDialogOpen(true);
            return;
        }else if (!passwordValid){
            setAlertDialog({title: "Datos inválidos", description:"La contraseña ingresada debe tener como mínimo 6 caracteres y una mayúscula."})
            setIsDialogOpen(true);
            return;
        }else if (!passwordsMatch){
            setAlertDialog({title: "Datos inválidos", description:"Las contraseñas ingresadas deben ser iguales."})
            setIsDialogOpen(true);
            return;
        }else if (!usernameValid){
            setAlertDialog({title: "Datos inválidos", description:"El nombre de usuario debe tener un mínimo de 6 caracteres."})
            setIsDialogOpen(true);
            return;
        }
        if (!register(email, username, password, confirmPassword)){
            setAlertDialog({title: "Datos inválidos", description:"Uno o varios datos ingresados son inválidos. Por favor, revisalos y volvé a intentar."})
            setIsDialogOpen(true);
            return;
        }
        setAlertDialog({title: "¡Usuario registrado!", description:"Redirigiéndote a la página principal..."})
        setIsDialogOpen(true);
        return;
    };

    return (
        <div className="flex flex-col min-h-screen">
            {/* 1. El Navbar se queda arriba por flujo natural */}
            <Navbar />

            {/* 2. El contenedor principal crece para ocupar el resto del espacio y centra la Card */}
            <main className="flex-1 flex flex-col items-center justify-center p-4">
                <Card className="w-fit mx-auto">
                <CardHeader className="text-center text-2xl text-blue-500">
                    <CardTitle>Cre&aacute; una cuenta</CardTitle>
                </CardHeader>
                
                <CardContent className="grid gap-4 mb-8">
                    <div className="grid gap-2">
                        <Label>Correo</Label>
                        {/* el onChange es para que el input se actualice cuando el usuario escribe */}
                        <Input onChange={(e) => setEmail(e.target.value)} className="w-80" placeholder="correo@ejemplo.com" />
                    </div>
                    <div className="grid gap-2">
                        <Label>Nombre de usuario</Label>
                        <Input onChange={(e) => setUsername(e.target.value)} className="w-80" placeholder="NombreDeUsuario" />
                    </div>
                    <div className="grid gap-2">
                        <Label>Contraseña</Label>
                        <Input onChange={(e) => setPassword(e.target.value)} className="w-80" type="password" />
                    </div>
                    <div className="grid gap-2">
                        <Label>Confirmar contraseña</Label>
                        <Input onChange={(e) => setConfirmPassword(e.target.value)} className="w-80" type="password" />
                    </div>
                </CardContent>

                <CardFooter className="flex justify-center">
                    <Button onClick={storeData} className="w-full">Registrarme</Button>
                </CardFooter>
                </Card>

                <p className="p-8">¿Ya ten&eacute;s una cuenta? <Link to="/login" className="text-blue-500">Ingres&aacute;</Link>.</p>
                <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                    <AlertDialogContent size="sm">
                        <AlertDialogHeader>
                            <AlertDialogTitle>{alertDialog.title}</AlertDialogTitle>
                            <AlertDialogDescription>{alertDialog.description}</AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogAction>Aceptar</AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            </main>
        </div>
    )
}