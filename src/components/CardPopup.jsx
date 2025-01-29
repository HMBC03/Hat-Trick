import './componentsStyles/cardPopup.css';
import Button from './Button.jsx';



export default function CardPopup({ url, style, visible }) {
    return (

        <div className={`cardPopupContainer ${visible ? 'visible' : ''}`} style={style}>

            <section className='imgContainer' >
                <img src={url} alt="shoe" />
            </section>


            <section className='infoProduct'>

                <div className='productName'>
                    <h3>
                        Producto Name
                    </h3>
                    <h3>
                        $00000
                    </h3>
                </div>

                <div class="sizes">
                    <label>Tallas:</label>
                    <div class="size-options">
                        <button class="size">35</button>
                        <button class="size selected">36</button>
                        <button class="size">38</button>
                        <button class="size">39</button>
                        <button class="size">40</button>
                        <button class="size">41</button>
                        <button class="size">42</button>
                    </div>
                </div>
                <div className='ButtonsSection'>
                    <Button
                        text={"Añadir"}
                        style={
                            {
                                backgroundColor: "#5759E5",
                                color: "#fff",
                                width: "40%",
                                height: "6vh",
                                borderRadius: "5px",
                                borderColor: "#5759E5"
                            }

                        }

                    />
                    <Button
                        text={"Más Tallas"}
                        style={
                            {
                                backgroundColor: "#fff",
                                color: "#000",
                                width: "40%",
                                height: "6vh",
                                borderRadius: "5px",
                                borderColor: "#5759E5"
                                
                            }

                        }

                    />

                </div>

            </section>


        </div>

    )

}