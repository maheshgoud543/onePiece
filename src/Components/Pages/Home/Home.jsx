import { HomeData } from "./HomeData";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';;
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useState } from "react";
import './Home.css'
const Home = () => {
    const [slide, setSlide] = useState(0);

    const nextSlide = () => {
        setSlide(slide === HomeData.length - 1 ? 0 : slide + 1);
    };

    const prevSlide = () => {
        setSlide(slide === 0 ? HomeData.length - 1 : slide - 1);
    };
    const handleClick = () => {
     window.location.href = "https://www.crunchyroll.com/series/GRMG8ZQZR/one-piece?utm_campaign=media_actions&utm_medium=deep_link&utm_source=google"
    }
    return (
        <div >
            <div className="Main_theme">
                <div>
                    <img src="https://c4.wallpaperflare.com/wallpaper/34/877/118/anime-one-piece-brook-one-piece-franky-one-piece-wallpaper-preview.jpg" />
                </div>
                <div className="Story">

                    <h1 className="Title">One Piece</h1>
                    <p>In a seafaring world, a young pirate captain sets out with his crew to attain the title of Pirate King, and to discover the mythical treasure known as 'One Piece. ' An alternate version of Earth, and one that is currently in the midst of the 'Golden Age of Pirates'.</p>
                    <div className="button">
                        <button onClick={handleClick}>WatchNow</button>
                    </div>
                </div>
            </div>
            <div className="Caruosal">
                <ChevronLeftIcon className="arrow arrow-left" onClick={prevSlide} />
                {HomeData.map((item, idx) => (
                    <li key={idx}>
                        <img src={item.src} className={slide === idx ? "slide" : "slide slide-hidden"} />
                    </li>
                ))}
                <ChevronRightIcon className="arrow arrow-right" onClick={nextSlide} />
            </div>
            <div className="Quote">
                <p>"The One Piece Is Real!” <span className="Subtext">-whitebeard</span></p>
            </div>
        </div>
    )
}

export default Home;