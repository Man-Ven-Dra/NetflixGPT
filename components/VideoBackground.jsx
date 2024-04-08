import useTrailer from "../hooks/useTrailer";
import { useSelector } from "react-redux";

const VideoBackground = ({ id }) => {

    useTrailer(id);
    const trailerId = useSelector(store => store.movies?.trailerVideo)

    return (
        <div className="w-screen">
           <iframe
           className="w-screen aspect-video" 
           src={"https://www.youtube.com/embed/"+trailerId+"?autoplay=1&mute=1&loop=1&playlist="+trailerId} title="YouTube video player" allow=" autoplay;">
           </iframe>
        </div>
    );
};

export default VideoBackground;