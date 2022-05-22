import { useEffect, useState } from "react";
import { API_KEY } from "../globals/globals";
import HeroBanner from "../compenents/HeroBanner";
import Movies from '../compenents/Movies'
import NavSort from "../compenents/NavSort";


function PageHome({ sort }) {

    const [bannerMovieData, setBannerMovieData] = useState(false);
    const [moviesData, setMoviesData] = useState(false);

    useEffect(() => {

        const fetchBannerMovies = async () => {

            const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`);

            const data = await response.json();

            const first3Movies = data.results.splice(0, 3);

            setBannerMovieData(first3Movies);

        }

        fetchBannerMovies();

    }, []);


    
        
        
        useEffect(() => {
            
            // const grabMovies = async () => {
            //     const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
                
            //     const data = await res.json();
                
            //     if(data.success === false){
            //         moviesData !== false && setMoviesData(false);
                    
            //     }else{
            //         const first12Movies = data.results.splice(0,12);
            //         setMoviesData(first12Movies);
            //     }
                
            // }
            // console.log(moviesData)
            // grabMovies()


            const grabMovies = async () => {
                const res = await fetch(`https://api.themoviedb.org/3/movie/${sort}?api_key=${API_KEY}&language=en-US&page=1`)

                const data = await res.json();

                if(data.success === false){
                    moviesData !== false && setMoviesData(false);
                }else{
                    const first12Movies = data.results.splice(0,12);
                    setMoviesData(first12Movies)
                }
            }

            grabMovies()

        }, [sort])
        
        
        return (
            
            
            <div className= "home-page">
              {bannerMovieData !== false && <HeroBanner bannerMovieData={bannerMovieData} />}
              <NavSort />
              {moviesData !== false && <Movies movieData={moviesData} />}
            </div>
  )
}

export default PageHome