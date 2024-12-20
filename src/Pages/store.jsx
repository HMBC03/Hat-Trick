import Card from '../components/Card.jsx';
import '../styles/store.css';
//Import images form store preview // IMPORTANT: Create a function that will this operation dinamic
import shoe1 from "../assets/shoe1.png"
import shoe2 from "../assets/shoe2.png"
import shoe3 from "../assets/shoe3.png"
export default function Store() {
    return (
        <div className='store'>
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
    )
}