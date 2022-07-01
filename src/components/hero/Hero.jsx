import axios from "axios";
import { useState, useEffect } from "react";

const Hero = () => {
  // Estado donde guardamos la pelicula para mostrar imagen aleatoria en la portada.
  const [movies, setMovies] = useState([]);

  // Trae una pelicula random
  useEffect(() => {
    const api_key = "df6013470a9cca3565417a3c746d7b22";
    const trending = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`;
    axios.get(trending).then((response) => {
      const movies = response.data.results;
      setMovies(movies[Math.floor(Math.random() * movies.length)]);
    });
  }, []);

  // Limitamos el largo del string para que ocupe menos espacio en pantalla.
  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  // Desestructuro el estado movies
  const { backdrop_path, title, release_date, overview } = movies;

  return (
    <div className="w-full h-[550px] text-white">
      <div className="w-full h-full">
        <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
          alt={title}
          loading="lazy"
        />
        <div className="absolute w-full top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold">{title}</h1>
          <div className="my-4">
            <a
              type="button"
              href={`https://www.youtube.com/results?search_query=${title} trailer`}
              target="_blank"
              rel="noreferrer"
              className="border bg-gray-300 hover:bg-gray-200 text-black border-gray-300 py-2 px-5 transition-colors ease-linear"
            >
              Play
            </a>
            <button className="border text-white border-gray-300 hover:border-gray-100 py-2 px-5 ml-4 transition-colors ease-linear">
              Watch Later
            </button>
          </div>
          <p className="text-gray-400 text-sm">Released: {release_date}</p>
          <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">
            {truncateString(overview, 180)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
