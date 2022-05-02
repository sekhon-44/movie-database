import BannerMovieCard from "./BannerMovieCard"

function HeroBanner({ bannerMovieData }) {

    return (
        <div className="hero-banner">
            {bannerMovieData.map(bannerMovie => <BannerMovieCard key={bannerMovie.id} movie={bannerMovie} />)}
        </div>
    )
}
export default HeroBanner