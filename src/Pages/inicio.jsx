import "../styles/inicio.css"
import shoe from "../assets/shoe.png"
import Button from "../components/Button.jsx"

export default function Inicio(){

    return(
        <div className="SeccionInitial">

            <section className="ShoeInformation">
            <h1>ZAPATILLAS</h1>
            <h2>HAT TRICK</h2>
            <p>Nos especializamos en zapatillas deportivas de fútbol de salón que combinan rendimiento, estilo y personalización. Diseñadas para ofrecerte el mejor agarre y comodidad en cada jugada, nuestras zapatillas destacan por su calidad y durabilidad</p>
            <Button
            text="Ver más"
            style={{
                backgroundColor: "#0C72F7",
                color:"#FFFFFF",
                border: "none",
                marginTop: "12%"
                
              }}
            />

            <Button
            text={"Añadir"}
            style={{
                backgroundColor: "#fff",
                color:"#000",
                marginLeft: "10px",
                fontWeight:"bold"
              
                

                
            }}
            />
            </section>
            

            <section className="ImageInformation">
                <img src={shoe}
                alt="Zamba" />
            </section>

            

        </div>
    )
}