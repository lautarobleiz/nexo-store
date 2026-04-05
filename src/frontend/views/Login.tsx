import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Button } from "../components/ui/button";
import { Navbar } from "../components/navbar";
import { Link } from "react-router";
import { useState } from "react";
import { login } from "../../server/listeners/login.ts"

export const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const searchUser = () => {
        login(email, password)
    }

    return (
       <div className="flex flex-col min-h-screen">
            {/* 1. El Navbar se queda arriba por flujo natural */}
            <Navbar />

            {/* 2. El contenedor principal crece para ocupar el resto del espacio y centra la Card */}
            <main className="flex-1 flex flex-col items-center justify-center p-4 ">
                <Card className="w-fit mx-auto">
                    <CardHeader className="text-center text-2xl text-blue-500">
                        <CardTitle>Iniciar sesión</CardTitle>
                    </CardHeader>
                    
                    <CardContent className="grid gap-4 mb-8">
                        <div className="grid gap-2">
                            <Label>Correo</Label>
                            <Input onChange={e => setEmail(e.target.value)} className="w-80" placeholder="correo@ejemplo.com" />
                        </div>
                        <div className="grid gap-2">
                            <Label>Contraseña</Label>
                            <Input onChange={e => setPassword(e.target.value)} className="w-80" type="password" />
                        </div>
                    </CardContent>

                    <CardFooter className="flex justify-center">
                        <Button onClick={searchUser} className="w-full">Continuar</Button>
                    </CardFooter>
                </Card>
                <p className="p-8">Si olvidaste tu contraseña, hacé click <Link to="/" className="text-blue-500">ac&aacute;</Link>.</p>
                <p className="p-8">¿No ten&eacute;s una cuenta? <Link to="/register" className="text-blue-500">Registrate</Link>.</p>
            </main>
        </div>
    )
}