import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
    const movies1 = useSelector(store => store.movies?.nowPlayingMovies)
    const movies2 = useSelector(store => store.movies?.tvSeries)
    const movies3= useSelector(store => store.movies?.popularMovies)
    const movies4= useSelector(store => store.movies?.actionMovies)
    const movies5= useSelector(store => store.movies?.horrorMovies)
    const movies6= useSelector(store => store.movies?.thrillerMovies)

    return (
        <div className="w-screen bg-black">
            <div className="-mt-[20rem] relative z-20">
            <MovieList title={"Now Playing"} movies={movies1}/>
            <MovieList title={"Web Series"} movies={movies2}/>
            <MovieList title={"Trending"} movies={movies3}/>
            <MovieList title={"Action"} movies={movies4}/>
            <MovieList title={"Horror"} movies={movies5}/>
            <MovieList title={"Non-Fiction"} movies={movies6}/>
            </div>
            
        </div>
    );
};

export default SecondaryContainer;