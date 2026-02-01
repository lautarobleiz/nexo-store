import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../components/ui/card";

export const Login = () => {
    return (
        <>
            <Card>
                <CardHeader className="">
                    <CardTitle>Iniciar sesi&oacute;n</CardTitle>
                </CardHeader>
                <CardContent>
                    <CardDescription>mail y contraseña</CardDescription>
                </CardContent>
                <CardFooter>
                    <CardDescription>boton login, sign up y olvide mi contraseña</CardDescription>
                </CardFooter>
            </Card>
        </>
    )
}