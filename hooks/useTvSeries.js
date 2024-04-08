import { useEffect } from "react";
import { API_OPTIONS, MOVIE_API2 } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTvSeries } from "../utils/movieSlice";

const useTvSeries = () => {
    const dispatch = useDispatch();
    const TvSeries = useSelector(
        (store) => store.movies.tvSeries
    )
        const getTvSeries = async () => {
            const data = await fetch(MOVIE_API2, API_OPTIONS);
            const json = await data.json();
            dispatch(addTvSeries(json.results))
        }
    
    useEffect(()=>{
        !TvSeries && getTvSeries()
    }, []);
}

export default useTvSeries;
