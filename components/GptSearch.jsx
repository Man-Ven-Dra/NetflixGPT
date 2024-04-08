import { Search_BG } from "../utils/constants";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GptSearch = () => {
    return (
        <div>
            <img src={Search_BG} className="fixed -z-10 w-full h-full"/>
          <GptSearchBar/>
          <GptMovieSuggestions/> 
        </div>
    );
};

export default GptSearch;