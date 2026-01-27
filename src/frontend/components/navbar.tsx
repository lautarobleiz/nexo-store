import '../styles/navbar.css'

export function Navbar (){
    return (
        <>
            <div className='navbar-main'>
                <h1 className="navbar-store-name">Compro Todo</h1>
                <div className="navbar-buttons-container">
                    <button className="navbar-buttons">Iniciar sesión</button>
                    <button className="navbar-buttons">Registrarse</button>
                </div>
            </div>    
        </>
    )
}