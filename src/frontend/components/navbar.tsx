import { Button } from "@/components/ui/button"
import '../styles/navbar.css'

export function Navbar (){
    return (
        <>
            <div className='navbar-main'>
                <div className='navbar-slogan'>
                    <h1 className="text-4xl text-yellow-400 font-semibold">Nexo Store</h1>
                    <p className='navbar-store-description'>La mejor electrónica, al mejor precio.</p>
                </div>
                <div className="navbar-buttons-container">
                    <Button className="bg-yellow-500 hover:bg-yellow-600">Iniciar sesión</Button>
                    <Button className="bg-yellow-500 hover:bg-yellow-600">Registrarse</Button>
                </div>
            </div>    
        </>
    )
}