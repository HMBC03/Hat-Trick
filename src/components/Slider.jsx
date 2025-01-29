import { useState } from 'react';
import './componentsStyles/Slider.css';
import Button from '../components/Button.jsx';
//Import resources from assets/
import sole1 from '../assets/Sole1.png';
import sole2 from '../assets/Sole2.png';
import sole3 from '../assets/Sole3.png';
import sole4 from '../assets/Sole4.png';
import arrowIcon from '../assets/arrowRight.png';
// Import Swiper React components
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

export default function Slider() {
    const [swiperInstance, setSwiperInstance] = useState(null);

    return (
        <>
            <Button

                text=""
                style={{
                    backgroundImage: `url(${arrowIcon})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    transform: "rotate(180deg)",
                    border: "2px solid black",
                    backgroundSize: "20px 20px",
                    marginTop: "5%",
                    borderRadius: "30px",
                    width: "6%",
                    height: "50px",
                    marginLeft: "80%",

                }}
                onClick={() => swiperInstance?.slidePrev()}
            />
            <Button

                text=""
                style={{
                    backgroundImage: `url(${arrowIcon})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "20px 20px",
                    border: "2px solid black",
                    marginTop: "5%",
                    marginLeft: "1%",
                    borderRadius: "30px",
                    width: "6%",
                    height: "50px",


                }}
                onClick={() => swiperInstance?.slideNext()}
            />
            <Swiper
                // Install Swiper modules
                modules={[Navigation]}
                spaceBetween={50}
                slidesPerView={3}
                onSwiper={(swiper) => setSwiperInstance(swiper)}
            >

                <SwiperSlide className='SwiperSlide'>
                    <div>
                        <h1>Goma</h1>


                        <div>
                            <img src={sole1} alt="" />
                        </div>
                    </div>
                    <p>Ideal para superficies lisas como baldosas.
                    </p>



                </SwiperSlide>
                <SwiperSlide className='SwiperSlide'>
                    <div>
                        <h1>Negra</h1>


                        <div>
                            <img src={sole2} alt="" />
                        </div>
                    </div>
                    <p>Perfecta para largos partidos sobre asfalto y cemento, asi como la suela de colores.</p>



                </SwiperSlide>
                <SwiperSlide className='SwiperSlide'>

                    <div>
                        <h1>Colores</h1>

                        <div>
                            <img src={sole3} alt="" />
                        </div>
                    </div>
                    <p>Pensada para superficies duras como cemento o asfalto, </p>

                </SwiperSlide>
                <SwiperSlide className='SwiperSlide'>
                    <div>


                        <h1>Torretin</h1>
                        <div>
                            <img src={sole4} alt="" />
                        </div>
                    </div>
                    <p>Diseñada para grama y césped sintético, asegura una tracción óptima y estabilidad.</p>

                </SwiperSlide>
            </Swiper>



        </>
    );
}


