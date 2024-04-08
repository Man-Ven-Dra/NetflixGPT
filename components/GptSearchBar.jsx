import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/langConstant";
import { useRef } from "react";
import openai from "../utils/openAI";
import { API_OPTIONS, SEARCH_URL1, SEARCH_URL2 } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
    const dispatch = useDispatch();

    const langInfo = useSelector((store) => store.config.lang);
    const searchText = useRef(null);

    const searchMovieTMDB = async (name) => {

        const data = await fetch(SEARCH_URL1 +
        name + SEARCH_URL2
        , API_OPTIONS);
        const json = await data.json();
        return json.results;
    }

    const handleGptSearchClick = async () => {
        const gptQuery = "Act as a Movie Recommendation system and suggest some movies for the query:" + searchText.current.value + ". Only give me names of 5 movies, comma separated like example result give ahead: Gadar, Sholay, Avengers, Ironman";

        const chatCompletion = await openai.chat.completions.create({
            messages: [{ role: 'user', content: gptQuery }],
            model: 'gpt-3.5-turbo',
        });
        if(!chatCompletion.choices){
            console.log("Search Failed!!!")
        }
        const gptMovies = chatCompletion?.choices[0]?.message?.content.split(",");

        const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie))
        const movieList = await Promise.all(promiseArray);

        dispatch(addGptMovieResult({movieName: gptMovies, movieResults: movieList}))
    }


    return (
        <div className="pt-[15%] flex justify-center">
            <form className="p-2 m-6 bg-black w-1/2 grid grid-cols-12 bg-opacity-70 rounded-md" onSubmit={(e) => e.preventDefault()}>
                <input 
                ref={searchText}
                type="text"
                className="p-4 m-4 col-span-9 rounded-md text-xl" 
                placeholder={lang[langInfo].gptSearchPlaceHolder}
                />
                <button className="col-span-3 py-2 px-4 m-4 bg-red-600 text-white rounded-md text-xl font-semibold" onClick={handleGptSearchClick}>
                    {lang[langInfo].search}</button>
            </form>
        </div>
    );
};

export default GptSearchBar;