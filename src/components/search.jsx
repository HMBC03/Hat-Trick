import searchIcon from "../assets/search.png"
import "./componentsStyles/search.css"


export default function SearchButton(){

    return(

        <div className="searchIcon">
        <img src={searchIcon} 
        alt="search" />
        <p>Buscar</p>
        </div>

    )
}