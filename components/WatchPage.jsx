import { Link, useSearchParams } from "react-router-dom";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import { LOGO } from "../utils/constants";

const WatchPage = () => {

    const [searchParams] = useSearchParams();
    const movieData = JSON.parse(decodeURIComponent(searchParams.get("v")));

    const {original_title, overview, vote_average, id} = movieData;
    console.log(movieData)
    return (
        <div>
            <Link to={"/browse"}>
                <div className="bg-gradient-to-b from-black w-full absolute z-20">
                    <img className="h-[8rem] ml-5" src={LOGO} alt="logo" />
                </div>
            </Link>
            <VideoTitle original_title={original_title} overview={overview} vote_average={vote_average}/>
            <VideoBackground id={id}/>
        </div>
        
    );
};

export default WatchPage;