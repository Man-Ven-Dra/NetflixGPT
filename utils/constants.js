export const LOGO = "https://upload.wikimedia.org/wikipedia/commons/f/fd/Netflix-Logo.png"

export const AVATAR = "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"

export const BACKGROUND = "https://miro.medium.com/v2/resize:fit:1400/1*5lyavS59mazOFnb55Z6znQ.png"

export const Search_BG = "https://img.freepik.com/free-photo/assortment-cinema-elements-red-background-with-copy-space_23-2148457848.jpg?w=1060&t=st=1710931174~exp=1710931774~hmac=398fd6617bded5cb281252877745a635aedd29115d8a417643763123897aefd8";

export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer ' + import.meta.env.VITE_TMDB_KEY
    }
  };

export const OPENAI_KEY = import.meta.env.VITE_OPENAI_KEY;

export const SEARCH_URL1 = "https://api.themoviedb.org/3/search/movie?query=";
export const SEARCH_URL2 = "&include_adult=false&language=en-US&page=1";

export const MOVIE_API1 = "https://api.themoviedb.org/3/movie/now_playing?&page=1";
export const MOVIE_API2 = "https://api.themoviedb.org/3/tv/popular";
export const MOVIE_API3 = "https://api.themoviedb.org/3/movie/now_playing?&page=2"
export const MOVIE_API4 = "https://api.themoviedb.org/3/movie/now_playing?&page=4"
export const MOVIE_API5 = "https://api.themoviedb.org/3/movie/now_playing?&page=5"
export const MOVIE_API6 = "https://api.themoviedb.org/3/movie/now_playing?&page=10"

export const IMG_CDN ="https://image.tmdb.org/t/p/w500"

export const STAR = "./src/assets/star.png";
export const PLAY = "./src/assets/play.png";
export const EXCLAMATION = "./src/assets/exclamation.png";

export const SUPPORTED_LANG = [
  {indentifier: "en", name: "English"},
  {indentifier: "hindi", name: "Hindi"},
  {indentifier: "spanish", name: "Spanish"}
]