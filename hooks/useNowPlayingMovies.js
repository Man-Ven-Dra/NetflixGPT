import { useEffect } from "react";
import { API_OPTIONS, MOVIE_API1 } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const NowPlayingMovies = useSelector(
        (store) => store.movies.nowPlayingMovies
    )

        const getNowPlayingMovies = async () => {
            const data = await fetch(MOVIE_API1, API_OPTIONS);
            const json = await data.json();
            dispatch(addNowPlayingMovies(json.results))
        }
    
    useEffect(()=>{
        !NowPlayingMovies && getNowPlayingMovies()
    }, []);
}

export default useNowPlayingMovies;
