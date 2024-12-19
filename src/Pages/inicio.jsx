import "../styles/inicio.css"
import shoe from "../assets/shoe.png"
import Button from "../components/Button.jsx"
import Slider from "../components/Slider.jsx"

export default function Inicio() {

    return (

        //Principal content of the Inicio section includues the principal page, shoe section and banner section
        <div >
            {/**Initial section */}
            <div className="SectionInitial">
                <section className="ShoeInformation">
                    <h1>ZAPATILLAS</h1>
                    <h2>HAT TRICK</h2>
                    <p>Nos especializamos en zapatillas deportivas de fútbol de salón que combinan rendimiento, estilo y personalización. Diseñadas para ofrecerte el mejor agarre y comodidad en cada jugada, nuestras zapatillas destacan por su calidad y durabilidad</p>
                    <Button
                        text="Ver más"
                        style={{
                            backgroundColor: "#5759E5",
                            color: "#FFFFFF",
                            border: "none",
                            marginTop: "12%"

                        }}
                    />

                    <Button
                        text={"Añadir"}
                        style={{
                            backgroundColor: "#fff",
                            color: "#5759E5",
                            marginLeft: "10px",
                            fontWeight: "bold",
                            borderColor: "#5759E5"

                        }}
                    />
                </section>


                <section className="ImageInformation">
                    <img src={shoe}
                        alt="Zamba" />
                </section>

            </div>

            <div className="soleSection">
                <section className="">
                    <h1>Elige la que se adapte a ti</h1>
                    <p>Personaliza tus zapatillas elige colores, detalles y acabados que reflejen tu futbol y personalidad</p>
                    {/**SLIDER WIHT SWIPER "INSTALL SWIPER IS MANDATORY" */}

                        <Slider />
                </section>
            </div>
        </div>
    )
}