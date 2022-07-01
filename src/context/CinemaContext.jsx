import axios from "axios";
import React, { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

export const CinemaContext = createContext();

export const CinemaProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [timeoutId, setTimeoutID] = useState();
  const [value, setValue] = useState();
  const [clue, setClue] = useState();
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [noFound, setNoFound] = useState(false);
  const [modal, setModal] = useState(false);
  const [idMovie, setIdMovie] = useState();
  const [dataMovie, setDataMovie] = useState([]);

  // Esta key debe ir en un archivo .env, por una cuestion de facilidad en este proyecto queda aqui.
  const api_key = "df6013470a9cca3565417a3c746d7b22";

  // Trae las peliculas de varios endpoints para mostrarlas en la fila Trendin Movies donde esta el filtro de estrellas.
  const getMovies = async () => {
    try {
      const trending = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`;
      const trendingTwo = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=2&with_watch_monetization_types=flatrate`;
      const trendingThree = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=3&with_watch_monetization_types=flatrate`;
      const trendingFour = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=4&with_watch_monetization_types=flatrate`;
      const trendingFive = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=5&with_watch_monetization_types=flatrate`;
      const trendingSix = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=6&with_watch_monetization_types=flatrate`;

      const request = await axios.get(trending);
      const requestTwo = await axios.get(trendingTwo);
      const requestThree = await axios.get(trendingThree);
      const requestFour = await axios.get(trendingFour);
      const requestFive = await axios.get(trendingFive);
      const requestSix = await axios.get(trendingSix);

      const pageOne = request.data.results;
      const pageTwo = requestTwo.data.results;
      const pageThree = requestThree.data.results;
      const pageFour = requestFour.data.results;
      const pageFive = requestFive.data.results;
      const pageSix = requestSix.data.results;

      setMovies([
        ...pageOne,
        ...pageTwo,
        ...pageThree,
        ...pageFour,
        ...pageFive,
        ...pageSix,
      ]);
    } catch (error) {
      toast.error(error.message);
    }
  };

  // Buscar peliculas de acuerdo la consulta.
  const fetchData = async (searchString) => {
    try {
      if (searchString !== "") {
        const response = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&include_adult=false&query=${searchString}}`
        );
        setMovies(response.data.results);
      } else {
        getMovies();
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  
  const onTextChange = (e) => {
    clearTimeout(timeoutId);
    setSearchTerm(e.target.value);
    const timeout = setTimeout(() => {
      fetchData(e.target.value);
    }, 290);
    setTimeoutID(timeout);
  };

  //Ejecuta la funcion de obtener peliculas una vez al renderizar
  useEffect(() => {
    getMovies();
  }, []);

  // Cargamos el valor de la estrella en el estado value, el cual utilizamos despues para pintar
  // la estrella o estrellas de color ambar segun corresponda.  Luego filtramos las peliculas
  // que cumplan la condicion del rango de promedio correspondiente a la estrella y las ordenamos
  // de valor mas alto a mas bajo.
  // Finalmente si el array de peliculas filtradas tiene al menos un item lo cargamos al estado
  // filteredMovies y pasamos la bandera "no encontrado" a falso. De lo contrario mostramos un
  // mensaje que no hay resultados y damos true a la bandera "no encontrado"
  const checkFilteredMovies = (value) => {
    setValue(value);
    const filteredMovies = movies
      .filter(
        (movie) =>
          (movie.vote_average <= value) & (movie.vote_average >= value - 2)
      )
      .sort((a, b) => b.vote_average - a.vote_average);
    if (filteredMovies.length !== 0) {
      setFilteredMovies(filteredMovies);
      setNoFound(false);
    } else {
      toast.warn(`Sorry, there are not movies with ${value / 2} stars`);
      setNoFound(true);
    }
  };

  // Al hacer click en una estrella guardamos el valor de la misma en el estado Clue(pista)
  // luego consultamos la pista si tiene el mismo valor que el de la estrella, refrescamos
  // el filtro. Sino, ejecutamos la funcion checkFilteredMovies/
  const handleStar = (value) => {
    setClue(value);
    const refreshFilter = () => {
      setValue();
      setFilteredMovies([]);
      setClue();
    };
    clue === value ? refreshFilter() : checkFilteredMovies(value);
  };

// Trae informacion del item seleccionado (pelicula o serie)
  useEffect(() => {  
    const getDataMovie = async () => {
      try {
        const search = `https://api.themoviedb.org/3/movie/${idMovie}?api_key=${api_key}&language=en-US`;
        const requestSearch = await axios.get(search);
        setDataMovie(requestSearch.data);
      } catch (error) {
        toast.error(error);
      }
    };
    // Solo ejecuta la funcion si el idMovie es mayor a 0, para evitar que lo haga al iniciar la web.
    idMovie > 0 && getDataMovie();
  }, [idMovie]);

  // Enpoints para las filas simples.  (sin filtro estrellas)
  const requests = {
    topRatedRequest: `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&language=en-US&page=1`,
    horrorRequest: `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&query=horror&page=1&include_adult=false`,
    upcomingRequest: `https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}&language=en-US&page=1`,
  };

  return (
    <CinemaContext.Provider
      value={{
        movies,
        setMovies,
        requests,
        searchTerm,
        setSearchTerm,
        onTextChange,
        handleStar,
        value,
        filteredMovies,
        noFound,
        setModal,
        modal,
        setIdMovie,
        dataMovie,
      }}
    >
      {children}
    </CinemaContext.Provider>
  );
};
