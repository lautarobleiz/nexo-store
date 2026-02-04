import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Button } from "../components/ui/button";
import { Navbar } from "../components/navbar";

export const Register = () => {
    return (
        <div className="flex flex-col min-h-screen">
            {/* 1. El Navbar se queda arriba por flujo natural */}
            <Navbar />

            {/* 2. El contenedor principal crece para ocupar el resto del espacio y centra la Card */}
            <main className="flex-1 flex items-center justify-center p-4">
                <Card className="w-fit mx-auto">
                <CardHeader className="text-center text-2xl text-blue-500">
                    <CardTitle>Crear una cuenta</CardTitle>
                </CardHeader>
                
                <CardContent className="grid gap-4">
                    <div className="grid gap-2">
                    <Label>Correo</Label>
                    <Input className="w-80" placeholder="correo@ejemplo.com" />
                    </div>
                    <div className="grid gap-2">
                    <Label>Contraseña</Label>
                    <Input className="w-80" type="password" />
                    </div>
                    <div className="grid gap-2">
                    <Label>Confirmar contraseña</Label>
                    <Input className="w-80" type="password" />
                    </div>
                </CardContent>

                <CardFooter className="flex justify-center">
                    <Button className="w-full">Registrarme</Button>
                </CardFooter>
                </Card>
            </main>
        </div>
    )
}