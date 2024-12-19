import { useState } from 'react';
import './componentsStyles/Slider.css';
import Button from '../components/Button.jsx';
//Import resources from assets/
import sole1 from '../assets/Sole1.png';
import sole2 from '../assets/Sole2.png';
import sole3 from '../assets/Sole3.png';
import sole4 from '../assets/Sole4.png';
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

                text="<"
                style={{
                    marginTop: "5%",
                    borderRadius: "30px",
                    width: "6%",
                    height: "50px",
                    marginLeft: "80%",

                }}
                onClick={() => swiperInstance?.slidePrev()}
            />
            <Button

                text=">"
                style={{
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

                    <h1>Goma</h1>
                    <img src={sole1} alt="" />




                </SwiperSlide>
                <SwiperSlide className='SwiperSlide'>

                    <h1>Negra</h1>
                    <img src={sole2} alt="" />



                </SwiperSlide>
                <SwiperSlide className='SwiperSlide'>

                    <h1>Colores</h1>
                    <img src={sole1} alt="" />


                </SwiperSlide>
                <SwiperSlide className='SwiperSlide'>

                    <h1>Torretin</h1>
                    <img src={sole1} alt="" />

                </SwiperSlide>
            </Swiper>



        </>
    );
}


