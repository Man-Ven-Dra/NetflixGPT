import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {

    const movies = useSelector(store => store.movies?.nowPlayingMovies)

    if(movies == null) return;

    const mainMovie = movies[0];
    const {original_title, overview, vote_average, id} = mainMovie;

    return (
        <div>
            <VideoTitle original_title={original_title} overview={overview} vote_average={vote_average}/>
            <VideoBackground id={id}/>
        </div>
    );
};

export default MainContainer;