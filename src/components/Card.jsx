import './componentsStyles/Card.css'
import Button from './Button.jsx'

export default function Card({ name, url, price, style, onClick }) {
    return (
        <div className='cardContainer'>
            <section className='imgContainer' style={style}>
                <img src={url} alt="shoe" />
            </section>

            <section className='infoCard'>
                <div>
                    <h4>
                        {name}
                    </h4>

                    <h4>
                        {price}
                    </h4>
                </div>


                <Button
                    text={"Añadir"}
                    style={
                        {
                            backgroundColor: "#5759E5",
                            color: "#fff",
                            width: "30%",
                            height: "3vh",
                            borderRadius: "5px",
                            borderColor: "#5759E5",
                            
                        }

                    }
                    onClick={onClick}

                />
            </section>


        </div>
    );
}