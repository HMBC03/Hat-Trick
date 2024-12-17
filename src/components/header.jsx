
//assets - iconos - media
import iconoLogo from "../assets/logo.png";
import cart from "../assets/cart.png"
import sesion from "../assets/sesion.png"
import "./componentsStyles/header.css"

//Components
import SearchButton from "./search";


export default function Header() {

    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <img className="iconologo"
                            src={iconoLogo}
                            alt="Logo" />
                            <h1>Hat trick</h1>
                    </li>
                    <li>
                        <p>Personalización</p>
                    </li>
                    <li>
                        <p>Nuevos Modelos</p>
                    </li>

                    
                    <li className="iconSection">
                        <li><SearchButton /></li>
                         <li>
                         <img className="cart"
                        src={cart} 
                        alt="carrito de compras" 
                        />

                        </li>   
                        
                         <li><img className="sesion"
                         src={sesion}
                         alt="inicio de sesion" 
                         /></li>
                    </li>
                </ul>
            </nav>
        </header>






    )

}


