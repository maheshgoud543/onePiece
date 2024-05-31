import { MapsData } from "./MapsData";
import './Maps.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Maps = () => {
    return (
        <div>
            <div>
                <h1  className="Maps_title">Maps</h1>

                <p>In the world of One Piece, maps are an essential tool for navigation, as they often depict the geography of an individual island, a group of islands or even an entire ocean (in which case, they are sometimes referred as sea charts).[2] In sailing, it is usually the duty of navigators to read and interpret maps during voyages, in order to establish safe navigation routes and avoid natural hazards or getting lost.</p>
            </div>
            <div>
                <ul>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={3}
                        pagination={{ clickable: true }}
                        navigation>
                        {MapsData.map((Map, id) => (
                            <li key={id}>
                                <SwiperSlide>
                                    <img src={Map.src} className="Maps_images" />
                                </SwiperSlide>
                            </li>
                        ))}
                        </Swiper>
                </ul>
            </div>
            <div>
                <p className="Quote">“A Man Dies When People Forget Him!"</p>
            </div>
        </div>
    )
}

export default Maps;