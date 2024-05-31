import { DevilFruitsData } from "./DevilFruitsData";
import './DevilFruits.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const DevilFruits = () => {
    return (
        <div className="Devil">
            <div className="DevilFruits_title">
                <h1 className="Devil_title">Devil Fruits</h1>
                <p className="DeviFruits_story">Devil Fruits are a major plot device in One Piece. They are mysterious, supernatural fruits that are scattered throughout the world, though mostly seen within the Grand Line, and can grant special powers to anyone who eats them, ranging from the simplest abilities to highly destructive ones, and even the incredibly bizarre. As a price for consuming a Devil Fruit, the individual permanently becomes weak to seawater, essentially losing the ability to swim at all. There is no known way to remove the power or weaknesses, but once a user dies, the power will be reborn into another fruit waiting to be consumed by someone else. In addition, an individual can only acquire the power of a single Devil Fruit and survive, with only one notable exception for unspecified reasons. Their exact origin is a mystery, but they have existed for at least 800 years.  </p>
            </div>
            <div className="DevilFruits">
                <Swiper
                    slidesPerView={2}
                    spaceBetween={3}
                    pagination={{ clickable: true }}
                    navigation>
                    {DevilFruitsData.map((fruits, id) => (
                        <li key={id}>
                            <SwiperSlide>
                                <img src={fruits.src} className="DeviFruits_images" />
                            </SwiperSlide>
                        </li>
                    ))}
                </Swiper>
            </div>
            <div>
                <p className="Quote">"Nobody Hurts A Friend Of Mine!"-Shanks</p>
            </div>
        </div>
    )
}

export default DevilFruits;