import { Link } from "react-router-dom";
import { IMG_CDN } from "../utils/constants";

const MovieCard = ({ movie }) => {
    if(!movie.poster_path) return null;

    const encodedMovie = encodeURIComponent(JSON.stringify(movie))
    return (

        <div className="w-[10rem] flex items-center hover:w-[11rem] hover:-mx-[1rem] hover:z-30 transition-all duration-300 ease-in-out">
            <Link to={`/watch?v=${encodedMovie}`}>
                <img className="" src={IMG_CDN+movie.poster_path} />
            </Link>
        </div>
    );
};

export default MovieCard;