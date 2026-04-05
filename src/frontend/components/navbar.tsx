import '../styles/navbar.css'
import { Link } from "react-router";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "./ui/dropdown-menu";

export const Navbar = () => {
    return (
        <>
            <div className='navbar-main'>
                <Link to="/">
                    <div className='navbar-slogan'>
                        <p className="text-4xl text-white font-semibold text-shadow-lg/20">Nexo Store</p>
                        <p className='navbar-store-description font-semibold text-white text-shadow-lg/20'>Sabemos de computación.</p>
                    </div>
                </Link>          
                <div className="navbar-buttons-container">   
                    <DropdownMenu>
                        <DropdownMenuTrigger className="text-white hover:text-gray-200">Open</DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem>Profile</DropdownMenuItem>
                            <DropdownMenuItem>Billing</DropdownMenuItem>
                            <DropdownMenuItem>Team</DropdownMenuItem>
                            <DropdownMenuItem>Subscription</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <Link to="/login" className="text-white hover:text-gray-200">Iniciar sesi&oacute;n</Link>
                    <Link to="/register" className="text-white hover:text-gray-200">Registrarme</Link>
                </div>
            </div>    
        </>
    )
}