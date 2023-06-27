export const MainNavBar = () => {
    return(
        <div className="main_navbar">
            <div className="logo_container flex justify-between">LOGO<img src="" alt="" /></div>
            <div className="main_menu">
                <ul className="flex">
                    <li className="nav-item">Categoria 1</li>
                    <li className="nav-item">Categoria 2</li>
                    <li className="nav-item">Categoria 3</li>
                    <li className="nav-item">Categoria 4</li>
                </ul>
            </div>
            <div>
                <ion-icon className="icono_navbar" size="large" name="bag-handle-outline"></ion-icon>
                <ion-icon className="icono_navbar" size="large" name="person-circle-outline"></ion-icon>
            </div>
        </div>
    )
}