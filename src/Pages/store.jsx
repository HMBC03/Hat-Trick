//Import components
import Card from '../components/Card.jsx';
import Header from '../components/Header.jsx';
import CardPopup from '../components/CardPopup.jsx';
//Import styles
import '../styles/store.css';

//Import react functionality

import React, { useState } from 'react';

//Import images form store preview // IMPORTANT: Create a function that will this operation dinamic
import shoe1 from "../assets/shoe1.png"
import shoe2 from "../assets/shoe2.png"
import shoe3 from "../assets/shoe3.png"

export default function Store() {
   //This corresponds to the states that will we use
    const [blur, setBlur] = useState(false);
    const [visible, setVisible] = useState(false);
    //Here we create the functions
    const toggleBlur = ()=> {
        setBlur(!blur);
        setVisible(!visible);
        console.log(blur);
    };





    return (
        <>
            <Header />
            
            <CardPopup
            url={shoe1}
            style={
                {
                }
            }
            visible={visible}
            /> 
            
            
            
            
            <div className={`store-container ${blur ? 'blurred' : ''}`}>


                <section className='infoStore'>
                    <h1>Escoge las zapatillas ideales</h1>
                </section>


                <section className='shoesList'>
                    <Card
                        style={
                            { backgroundColor: "#96CAEF" }
                        }
                        name="Zapatilla 1"
                        url={shoe1}
                        price="$100.000"
                        onClick={toggleBlur}
                    />
                    <Card
                        style={
                            { backgroundColor: "#FFBAD0" }
                        }
                        name="Zapatilla 2"
                        url={shoe2}
                        price="$100.000"
                        onClick={toggleBlur}
                    />
                    <Card
                        style={
                            { backgroundColor: "#EF9698" }
                        }
                        name="Zapatilla 3"
                        url={shoe3}
                        price="$190.000"
                        onClick={toggleBlur}
                    />
                    <Card
                        style={
                            { backgroundColor: "#EF9698" }
                        }
                        name="Zapatilla 3"
                        url={shoe3}
                        price="$190.000"
                        onClick={toggleBlur}
                    />
                    <Card
                        style={
                            { backgroundColor: "#96CAEF" }
                        }
                        name="Zapatilla 1"
                        url={shoe1}
                        price="$100.000"
                        onClick={toggleBlur}
                    />
                    <Card
                        style={
                            { backgroundColor: "#FFBAD0" }
                        }
                        name="Zapatilla 2"
                        url={shoe2}
                        price="$100.000"
                        onClick={toggleBlur}
                    />
                    <Card
                        style={
                            { backgroundColor: "#EF9698" }
                        }
                        name="Zapatilla 3"
                        url={shoe3}
                        price="$190.000"
                        onClick={toggleBlur}
                    />
                    <Card
                        style={
                            { backgroundColor: "#EF9698" }
                        }
                        name="Zapatilla 3"
                        url={shoe3}
                        price="$190.000"
                        onClick={toggleBlur}
                    /><Card
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
                    /><Card
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
                </section>
                        


            </div>
        </>

    )
}