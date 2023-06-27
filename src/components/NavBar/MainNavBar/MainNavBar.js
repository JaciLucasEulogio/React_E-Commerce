
import {CartWidget} from '../CartWidget/CartWidget';
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
                <CartWidget />
                <span class="notification-badge">3</span>
                
            </div>
        </div>
    )
}