import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux"
import { addTrailerVideo } from "../utils/movieSlice";

const useTrailer = (id) => {

        const dispatch = useDispatch();
    
        const fetchTrailer = async () => {
            const data = await fetch('https://api.themoviedb.org/3/movie/'+id+'/videos', API_OPTIONS);
            const json = await data.json();
    
            const trailer = json.results.filter(video => video.type == "Trailer")
            const key = trailer.length ? trailer[0]?.key : json.result[0] ;
            dispatch(addTrailerVideo(key))
        }
        useEffect(() => {
            fetchTrailer();
        }, [])
    
}

export default useTrailer;