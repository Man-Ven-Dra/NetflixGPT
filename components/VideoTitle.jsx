import { EXCLAMATION, PLAY, STAR } from "../utils/constants";

const VideoTitle = ({ original_title, overview, vote_average }) => {
    
    return (
        <div className="absolute pt-[11rem] text-white bg-gradient-to-tr from-[#090909] w-screen aspect-video">
            <h1 className="pl-10 py-2 text-[3rem] font-semibold ">{original_title}</h1>
            <p className=" pl-10 py-2 w-[28rem] text-justify text-[1.2rem]">{overview}</p>
            <div className="pl-10 text-[1.1rem] flex items-center gap-2">
                RATING: {vote_average}
                <img className="w-[1.1rem]" src={STAR} alt="" />
            </div>
            <div className="text-white flex gap-5 py-6 pl-10 text-[1rem]">
                <button className="bg-white rounded-lg px-4 py-2 flex items-center justify-center w-[8rem] gap-2 text-black "><img className="w-2" src={PLAY}/>PLAY</button>
                <button className="bg-gray-400 w-[10rem] rounded-lg px-1 py-1 bg-opacity-30 flex justify-center gap-2 items-center"><img className="w-4" src={EXCLAMATION}/>More Info</button>
            </div>
        </div>
    );
};

export default VideoTitle;