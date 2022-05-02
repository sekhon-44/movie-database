import { useEffect, useState } from "react";
import { API_KEY } from "../globals/globals";



function PageHome() {

    const [movieData, setMovieData] = useState(false);

    useEffect(() => {

        const fetchMovies = async () => {

            const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);

            const data = await response.json();

            const first12Movies = data.results.splice(0, 12);

            setMovieData(first12Movies);

        }

        fetchMovies();

    }, []);

    return (
        <div>PageHome</div>
    )
}
export default PageHome