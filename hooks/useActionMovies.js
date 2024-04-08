import { useEffect } from "react";
import { API_OPTIONS, MOVIE_API4 } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addActionMovies } from "../utils/movieSlice";

const useActionMovies = () => {
    const dispatch = useDispatch();
    const ActionMovies = useSelector(
        (store) => store.movies.actionMovies
    )
        const getActionMovies = async () => {
            const data = await fetch(MOVIE_API4, API_OPTIONS);
            const json = await data.json();
            dispatch(addActionMovies(json.results))
        }
    
    useEffect(()=>{
        !ActionMovies && getActionMovies()
    }, []);
}

export default useActionMovies;
