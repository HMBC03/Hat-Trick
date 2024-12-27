import './componentsStyles/cardPopup.css';
import Button from './Button.jsx';
import Talla from './Talla.jsx';


export default function CardPopup({ url, style }) {
    return (
        <div className='cardPopup' >


            <div className='cardPopupContainer'>


                <section className='imgContainer' style={style} >

                    <img src={url} alt="shoe" />

                </section>

                <section className='infoCard'>

                    <div className='infoCardFirst'>
                        <div>
                            <h4>
                                Product Name
                            </h4>
                            <h4>
                                $89.000
                            </h4>

                        </div>

                        <div className='tallas'>
                            <Talla
                                talla="40"
                            />
                        </div>


                    </div>
                    <Button
                        text={"Añadir"}
                        style={
                            {

                                backgroundColor: "#5759E5",
                                color: "#fff",
                                width: "100%",
                                height: "6vh",
                                borderRadius: "5px",
                                borderColor: "#5759E5"
                            }

                        }

                    />
                    <a href=""><h4>Más tallas</h4></a>


                </section>
            </div>
        </div>
    )
}