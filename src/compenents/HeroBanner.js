import { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import BannerMovieCard from "./BannerMovieCard";

function HeroBanner({ bannerMovieData }) {

    const [activeIndex, setActiveIndex] = useState(0);

    const length = bannerMovieData.length;

    const cycleInterval = 3000;

    // set pause/resume on mouse hover/leave
    const [paused, setPaused] = useState(false);

    // scrolling with infinite carousel
    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = length - 1;
        } else if (newIndex >= length) {
            newIndex = 0;
        }

        setActiveIndex(newIndex);
    };

    // auto cycle
    useEffect(() => {
        const interval = setInterval(() => {
            if (!paused) {
                updateIndex(activeIndex + 1);
            }
        }, cycleInterval);

        return () => {
            if (interval) {
                clearInterval(interval);
            }
        };
    });

    // add swipeable function for mobile using react-swipeable package 
    const handlers = useSwipeable({
        onSwipedLeft: () => updateIndex(activeIndex + 1),
        onSwipedRight: () => updateIndex(activeIndex - 1)
    });


    return (
        <div className="hero-banner"
            // handler for mobile swipeable function 
            {...handlers}
            // set pause/resume on mouse hover/leave
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}>


            <div className="banner-container" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                {bannerMovieData.map((bannerMovie, index) => <BannerMovieCard key={bannerMovie.id} movie={bannerMovie} />)}

            </div>

            <div className="banner-buttons">
                {bannerMovieData.map((bannerMovie, index) => {
                    return (<button
                        key={index}
                        className={`${index === activeIndex ? "active" : ""}`}
                        onClick={() => { updateIndex(index); }}>{index + 1}</button>)
                })}
            </div>

        </div >
    )
}
export default HeroBanner