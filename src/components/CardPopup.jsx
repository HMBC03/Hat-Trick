import './componentsStyles/cardPopup.css';
import Button from './Button.jsx';



export default function CardPopup({ url }) {
    return (
        
        <div className='cardPopupContainer'>
            <section className='imgContainer' >
                <img src={url} alt="shoe" />
            </section>

            <section className='infoCard'>
                <div>
                    <h4>
                        a
                    </h4>

                    <h4>
                        100
                    </h4>
                </div>


                <Button
                    text={"Añadir"}
                    style={
                        {
                            backgroundColor: "#5759E5",
                            color: "#fff",
                            width: "50%",
                            height: "6vh",
                            borderRadius: "5px",
                            borderColor: "#5759E5"
                        }

                    }

                />
            </section>


        </div>
        
    )

}