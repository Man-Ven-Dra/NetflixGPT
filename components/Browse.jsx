import useActionMovies from "../hooks/useActionMovies";
import useHorrorMovies from "../hooks/useHorrorMovies";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovie";
import useThrillerMovies from "../hooks/useThrillerMovies";
import useTvSeries from "../hooks/useTvSeries";
import { addGptMovieResult } from "../utils/gptSlice";
import GptSearch from "./GptSearch";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { useDispatch, useSelector } from "react-redux";

const Browse = () => {
    const dispatch = useDispatch();

    const gptSearchInfo = useSelector((store) => store.gpt.showGptSearch)
    useNowPlayingMovies()
    usePopularMovies();
    useTvSeries();
    useHorrorMovies();
    useActionMovies();
    useThrillerMovies();

    dispatch(addGptMovieResult({movieName: null, movieResults: null}))

    return (
        <div>
            <Header />
            { gptSearchInfo ? 
            <GptSearch/>:
            <> 
            <MainContainer/>
            <SecondaryContainer/>
            </>}
        </div>
    );
};

export default Browse;