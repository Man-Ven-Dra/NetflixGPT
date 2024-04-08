import { useEffect } from "react";
import { API_OPTIONS, MOVIE_API3 } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";

const usePopularMovies = () => {
    const dispatch = useDispatch();
    const PopularMovies = useSelector(
        (store) => store.movies.popularMovies
    )
        const getPopularMovies = async () => {
            const data = await fetch(MOVIE_API3, API_OPTIONS);
            const json = await data.json();
            dispatch(addPopularMovies(json.results))
        }
    
    useEffect(()=>{
        !PopularMovies && getPopularMovies()
    }, []);
}

export default usePopularMovies;
