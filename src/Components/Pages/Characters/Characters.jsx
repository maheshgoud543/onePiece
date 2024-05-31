import { PiratesData } from "./PiratesData";
import { MarinesData } from "./MarinesData";
import { WarlordsData } from "./WarloardsData";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';;
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import './Characters.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useState } from "react";
const Characters = () => {
    // const[index, setIndex] = useState(0)
    // const length = 3;
    // const handlePrevious = () => {

    // }
    // const handleNext = () => {

    // }
    return (
        <div className="Characters">
            <div className="Pirates">
                <div className="Pirates_title">
                    <h3>Pirates</h3>
                </div>

                <ul className="Pirates_data">
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={3}
                        pagination={{ clickable: true }}
                        navigation
                        className="Pirates_data">
                        {PiratesData.map((pirates, id) => (
                            <li key={id}>
                                <SwiperSlide>
                                    <img src={pirates.src} className="Pirates_images" />
                                </SwiperSlide>
                            </li>

                        ))}
                    </Swiper>
                </ul>

                <div>

                </div>
            </div>
            <div className="Marines">
                <div className="Marines_title">
                    <h3>Marines</h3>
                </div>
                <div>

                    <ul className="Marines_data">
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={3}
                            pagination={{ clickable: true }}
                            navigation
                            className="Marines_data" >
                            {MarinesData.map((marines, id) => (
                                <li key={id}>
                                    <SwiperSlide>
                                        <img src={marines.src} className="Marine_images" />
                                    </SwiperSlide>
                                </li>
                            ))}
                        </Swiper>
                    </ul>

                </div>
            </div>
            <div>
                <div className="warlords">
                    <div className="Warlords_title">
                        <h3>Warlords</h3>
                    </div>

                </div>
                <div>
                    <ul className="Warlord_data">
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={3}
                            pagination={{ clickable: true }}
                            navigation  
                            className="Warlord_data">
                            {WarlordsData.map((lords, id) => (
                                <li key={id}>
                                    <SwiperSlide>
                                        <img src={lords.src} className="Warlords_images" />
                                    </SwiperSlide>
                                </li>
                            ))}
                        </Swiper >
                    </ul>

                </div>

            </div>
            <div className="Quote">
                <p>"Scars on the back are a swordsman's shame." - Roronoa Zoro</p>
            </div>
        </div >
    )
}
export default Characters;