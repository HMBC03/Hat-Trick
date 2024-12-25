import "../styles/inicio.css"
import shoe from "../assets/shoe.png"
import Button from "../components/Button.jsx"
import Slider from "../components/Slider.jsx"
import Card from "../components/Card.jsx"
import Encabezado from "../components/Header.jsx"
//Import images form store preview // IMPORTANT: Create a function that will this operation dinamic
import shoe1 from "../assets/shoe1.png"
import shoe2 from "../assets/shoe2.png"
import shoe3 from "../assets/shoe3.png"
export default function Inicio() {

    return (

        //Principal content of the Inicio section includues the principal page, shoe section and banner section
        <div >
            <Encabezado/>
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
            {/**Sole Section Medium */}
            <div className="soleSection">
                <section className="">
                    <h1>Elige la que se adapte a ti</h1>
                    <p>Personaliza tus zapatillas elige colores, detalles y acabados que reflejen tu futbol y personalidad</p>
                    {/**SLIDER WIHT SWIPER "INSTALL SWIPER IS MANDATORY" */}
                    <div className="sliderContainer">
                        <Slider />
                    </div>

                    <Button
                        text="Ver más"
                        style={{
                            backgroundColor: "#5759E5",
                            color: "#FFFFFF",
                            border: "none",
                            width: "15%",
                            height: "8vh"

                        }}
                    />



                </section>
            </div>

            <div className="storePrev">
                <h1>Nuevos modelos </h1>
                <div className="cardsPrev">
                    <Card
                        style={
                            { backgroundColor: "#96CAEF" }
                        }
                        name="Zapatilla 1"
                        url={shoe1}
                        price="$100.000"
                    />
                    <Card
                        style={
                            { backgroundColor: "#FFBAD0" }
                        }
                        name="Zapatilla 2"
                        url={shoe2}
                        price="$100.000"
                    />
                    <Card
                        style={
                            { backgroundColor: "#EF9698" }
                        }
                        name="Zapatilla 3"
                        url={shoe3}
                        price="$190.000"
                    />
                    <Card
                        style={
                            { backgroundColor: "#EF9698" }
                        }
                        name="Zapatilla 3"
                        url={shoe3}
                        price="$190.000"
                    />
                </div>

            </div>





            {/**Banner section */}
            <div className="bannerSection">
                <div className="container">
                    <section className="ContactUs">
                        <h2>Contáctanos</h2>
                        <p>zapatillas@gmail.com</p>
                        <p>+57 3196164030</p>
                    </section>
                    <section className="Politics">
                        <h2>Políticas</h2>
                        <a href=""><p>Política Envíos</p></a>
                        <a href=""><p>Política Cambios y Devoluciones</p></a>
                        <a href=""><p>Política de Uso de Cookies</p></a>
                        <a href=""><p>Política de Privacidad</p></a>
                        <a href=""><p>Términos y Condiciones</p></a>
                    </section>
                    <section className="Suscription">
                        <h2>Suscribirse</h2>
                        <input type="email" name="email" id="email" placeholder="Correo Electronico" />
                        <Button
                            text="Enviar"
                            style={{
                                backgroundColor: "#5759e573",
                                color: "#fff",
                                borderColor: "#5759E5",
                                width: "40%",
                                borderRadius: "6px"



                            }}
                        />

                    </section>

                </div>
                <div className="creditos">
                    <p>2024 Zapatillas Hat Trick todos los derechos reservados. Desarrollado por: Héctor Beltran</p>
                </div>

            </div>



        </div>
    )
}