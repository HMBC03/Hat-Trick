
//assets - iconos - media
import iconoLogo from "../assets/logo.png";
import "./componentsStyles/header.css"

//Components
import SearchButton from "./search";


export default function Header(){

    return(
        <nav>
            <li>
                <ul>
                    <img 
                    src={iconoLogo} 
                    alt="Lgo" />
                </ul>
                <ul>
                    <h1>Hat trick</h1>
                </ul>
                <ul>
                    <p>Personalización</p>
                </ul>
                <ul>
                    <p>Nuevos Modelos</p>
                </ul>
                <ul>
                    <SearchButton/>
                </ul>
            </li>
        </nav>
        
    



)

}


