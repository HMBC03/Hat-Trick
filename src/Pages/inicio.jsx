import "../styles/inicio.css"
import shoe from "../assets/shoe.png"

export default function Inicio(){

    return(
        <div className="SeccionInitial">

            <section className="ShoeInformation">
            <h1>ZAPATILLAS</h1>
            <h2>HAT TRICK</h2>
            <p>Diseñadas para ofrecerte el mejor agarre y comodidad en cada jugada, nuestras zapatillas destacan por su calidad y durabilidad.</p>
            
            </section>
            

            <section className="ImageInformation">
                <img src={shoe}
                alt="Zamba" />
            </section>

            

        </div>
    )
}