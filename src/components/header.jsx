
import { Link } from "react-router-dom";
//assets - iconos - media
import iconoLogo from "../assets/logo.png";
import cart from "../assets/cart.png"
import sesion from "../assets/sesion.png"
import "./componentsStyles/header.css"

//sub Components
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
                            <Link to="/">Hat trick</Link>
                    </li>
                    <li>
                       <a href=""><p>Personalización</p></a> 
                    </li>
                    <li>
                    <Link to="/Store">Nuevos Modelos</Link>
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


