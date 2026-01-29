import { Button } from "@/components/ui/button"
import '../styles/navbar.css'

export const Navbar = () => {
    return (
        <>
            <div className='navbar-main shadow-lg/30'>
                <div className='navbar-slogan'>
                    <p className="text-4xl text-blue-300 font-semibold text-shadow-lg/20">Nexo Store</p>
                    <p className='navbar-store-description font-semibold text-white text-shadow-lg/20'>Sabemos de computación.</p>
                </div>
                <div className="navbar-buttons-container">
                    <Button className="bg-blue-300 hover:bg-blue-400 text-gray-700 border border-gray-700">Iniciar sesión</Button>
                    <Button className="bg-blue-300 hover:bg-blue-400 text-gray-700 border border-gray-700">Registrarse</Button>
                </div>
            </div>    
        </>
    )
}