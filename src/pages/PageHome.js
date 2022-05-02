import { useEffect, useState } from "react";
import { API_KEY } from "../globals/globals";
import HeroBanner from "../components/HeroBanner";


function PageHome() {

    const [bannerMovieData, setBannerMovieData] = useState(false);

    useEffect(() => {

        const fetchBannerMovies = async () => {

            const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`);

            const data = await response.json();

            const first3Movies = data.results.splice(0, 3);

            setMovieData(first3Movies);

        }

        fetchMovies();

    }, []);

    return (
        <section className="home-page">
            <HeroBanner bannerMovieData={bannerMovieData} />
        </section>
    )
}
export default PageHome