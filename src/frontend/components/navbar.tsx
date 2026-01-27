import { Button } from "@/components/ui/button"
import '../styles/navbar.css'

export function Navbar (){
    return (
        <>
            <div className='navbar-main shadow-lg/30'>
                <div className='navbar-slogan'>
                    <p className="text-4xl text-gray-300 font-semibold text-shadow-lg/20">Nexo Store</p>
                    <p className='navbar-store-description font-semibold text-white text-shadow-lg/20'>La mejor electrónica, al mejor precio.</p>
                </div>
                <div className="navbar-buttons-container">
                    <Button className="bg-yellow-300 hover:bg-yellow-400 text-gray-600 border border-gray-700">Iniciar sesión</Button>
                    <Button className="bg-yellow-300 hover:bg-yellow-400 text-gray-600 border border-gray-600">Registrarse</Button>
                </div>
            </div>    
        </>
    )
}