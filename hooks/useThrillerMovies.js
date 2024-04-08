import { useEffect } from "react";
import { API_OPTIONS, MOVIE_API6 } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addThrillerMovies } from "../utils/movieSlice";

const useThrillerMovies = () => {
    const dispatch = useDispatch();
    const ThrillerMovies = useSelector(
        (store) => store.movies.thrillerMovies
    )
        const getThrillerMovies = async () => {
            const data = await fetch(MOVIE_API6, API_OPTIONS);
            const json = await data.json();
            dispatch(addThrillerMovies(json.results))
        }
    
    useEffect(()=>{
        !ThrillerMovies && getThrillerMovies()
    }, []);
}

export default useThrillerMovies;
