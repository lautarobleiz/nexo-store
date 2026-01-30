import { Button } from "@/components/ui/button"
import '../styles/navbar.css'
import { Link } from "react-router";

export const Navbar = () => {
    return (
        <>
            <div className='navbar-main shadow-lg/30'>
                <div className='navbar-slogan'>
                    <p className="text-4xl text-blue-300 font-semibold text-shadow-lg/20">Nexo Store</p>
                    <p className='navbar-store-description font-semibold text-white text-shadow-lg/20'>Sabemos de computación.</p>
                </div>
                <div className="navbar-buttons-container">
                    <Button asChild className="bg-blue-300 hover:bg-blue-400 text-gray-700 border border-gray-700">
                        <Link to="/login">Iniciar sesi&oacute;n</Link>
                    </Button>
                    <Button asChild className="bg-blue-300 hover:bg-blue-400 text-gray-700 border border-gray-700">
                        <Link to="/register">Registrarse</Link> 
                    </Button>
                </div>
            </div>    
        </>
    )
}