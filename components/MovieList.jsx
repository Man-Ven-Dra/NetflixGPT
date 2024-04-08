import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
    //console.log(movies);
    return (
        <div className="px-5">
            <h1 className="text-[1.6rem] text-white px-5 font-semibold pt-10 pb-4">{title}</h1>
            <div className="w-full flex overflow-x-scroll" style={{ "scrollbarWidth": "none" }}>
                <div className="flex gap-5 ">
                    {movies?.map((item) => 
                        <MovieCard key={item.id} movie={item} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default MovieList;
