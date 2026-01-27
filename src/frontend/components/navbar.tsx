import '../styles/navbar.css'

export function Navbar (){
    return (
        <>
            <div className='navbar-main'>
                <div className='navbar-slogan'>
                    <h1 className="navbar-store-name">Compro Todo</h1>
                    <p className='navbar-store-description'>La mejor electrónica, al mejor precio.</p>
                </div>
                <div className="navbar-buttons-container">
                    <button className="navbar-buttons">Iniciar sesión</button>
                    <button className="navbar-buttons">Registrarse</button>
                </div>
            </div>    
        </>
    )
}