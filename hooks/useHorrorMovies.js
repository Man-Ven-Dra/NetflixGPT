import { useEffect } from "react";
import { API_OPTIONS, MOVIE_API5 } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addHorrorMovies } from "../utils/movieSlice";

const useHorrorMovies = () => {
    const dispatch = useDispatch();
    const HorrorMovies = useSelector(
        (store) => store.movies.horrorMovies
    )
        const getHorrorMovies = async () => {
            const data = await fetch(MOVIE_API5, API_OPTIONS);
            const json = await data.json();
            dispatch(addHorrorMovies(json.results))
        }
    
    useEffect(()=>{
        !HorrorMovies && getHorrorMovies()
    }, []);
}

export default useHorrorMovies;
