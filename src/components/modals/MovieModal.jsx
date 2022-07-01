import { AiOutlineYoutube } from "react-icons/ai";
import Button from "./Button";
const MovieModal = ({ setModal, dataMovie }) => {

  // Desestructuro el estado de datos de la pelicula
  const {
    title,
    backdrop_path,
    release_date,
    genres,
    overview,
    vote_average,
    homepage,
    revenue,
    production_companies,
    production_countries,
    runtime,
  } = dataMovie;

  // Cargamos el primer pais de la productora a productionCountry. 
  const productionCountry = production_countries
  ?.map((production) => production.name)
  .join(", ");

  // Formatea el monto de ganancias.
  const formatRevenue = numberWithCommas(revenue);
  function numberWithCommas(x) {
    return x?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  // Concatenamos las productoras del array a un string para luego mostrarlo
  const productionLine = production_companies
    ?.map((production) => production.name)
    .join(", ");

  // Concatenamos los generos del array a un string para luego mostrarlo.
  const genresLine = genres?.map((genre) => genre.name).join(", ");

  // Gif de error cuando la api no encuentra la imagen.
  const noImage = "https://c.tenor.com/OiUar5nIlM0AAAAC/error404-not-found.gif";

  // Parte del enpoint que trae las imagenes.
  const imageUrl = "https://image.tmdb.org/t/p/original/";

  return (
    <>
      <div
        id="defaultModal"
        tabIndex="-1"
        aria-hidden="true"
        className="fixed z-50 w-full md:inset-0 md:h-screen overflow-y-scroll xl:overflow-y-hidden h-screen flex justify-center items-center bg-stone-900 bg-opacity-90 "
      >
        <div className="relative p-2 py-4 sm:p-4 md:p-4 lg:p-4 xl:p-0 h-screen max-h-screen w-full max-w-2xl overflow-y-auto md:h-auto opacity-100">
          <div className="relative bg-zinc-900 rounded-lg">
            <div className="flex justify-between items-start px-2 sm:px-4 md:px-4 lg:px-4 xl:px-4 rounded-t border-b dark:border-gray-600">
              <h3 className="text-base sm:text-xl md:text-xl lg:text-xl xl:text-xl py-1 sm:py-2 md:py-2 lg:py-2 xl:py-2 text-stone-300 font-semibold uppercase">
                {title}
              </h3>

              <button
                type="button"
                className="text-gray-400 bg-transparent align-middle hover:text-gray-100 rounded-lg text-sm p-1.5 mt-0.5 sm:mt-1.5 md:mt-1.5 lg:mt-1.5 xl:mt-1.5 ml-auto inline-flex items-center transition-colors ease-linear "
                data-modal-toggle="defaultModal"
                onClick={() => {
                  setModal(false);
                }}
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="p-4 sm:p-6 md:p-6 lg:p-6 xl:p-6 space-y-2 sm:space-y-3: md:space-y-3 lg:space-y-3 xl:space-y-3 ">
              <h3 className="text-stone-300 font-semibold ">
                Production:{" "}
                <span className="leading-relaxed text-stone-400 transition-colors ease-linear text-sm sm:text-xs md:text-base lg:text-base xl:text-base">
                  {productionLine}
                </span>
              </h3>
              <h3 className="text-stone-300 font-semibold">
                Production Country:{" "}
                <span className="leading-relaxed text-stone-400 transition-colors ease-linear text-sm sm:text-xs md:text-base lg:text-base xl:text-base">
                  {productionCountry}
                </span>
              </h3>

              {backdrop_path !== null ? (
                <img
                  src={`${imageUrl}${backdrop_path}`}
                  className="h-full w-full mx-auto flex justify-center shadow-2xl  "
                  alt={title}
                />
              ) : (
                <img
                  src={noImage}
                  className="h-full w-full mx-auto flex justify-center shadow-2xl  "
                  alt={title}
                />
              )}

              <h3 className="text-stone-300 font-semibold">
                Genre:{" "}
                <span className="leading-relaxed text-stone-400 text-sm sm:text-xs md:text-base lg:text-base xl:text-base font-semibold">
                  {genresLine}
                </span>
              </h3>
              <h3 className=" text-stone-300 font-semibold">
                IMDB Rating:{" "}
                <span className="text-stone-400">{vote_average}</span>{" "}
              </h3>
              <h3 className="text-stone-300 font-semibold">
                Release date:{" "}
                <span className="text-stone-400 text-base">{release_date}</span>{" "}
              </h3>
              <h3 className="text-stone-300 font-semibold">
                Description:{" "}
                <span className=" leading-relaxed text-stone-400 text-sm sm:text-base md:text-base lg:text-base xl:text-base font-medium">
                  {overview}
                </span>
              </h3>
              <h3 className="text-stone-300 font-semibold">
                Runtime:{" "}
                <span className="text-stone-400 text-base">{runtime} min</span>{" "}
              </h3>
              <h3 className="text-stone-300 font-semibold">
                Worldwide Revenue: ${" "}
                <span className="leading-relaxed text-stone-400 hover:text-green-600 transition-colors ease-linear text-sm sm:text-xs md:text-base lg:text-base xl:text-base">
                  {formatRevenue}
                </span>
              </h3>
              <h3>
                <a
                  className="my-1 text-amber-600 font-semibold hover:text-amber-500 transition-colors ease-linear"
                  href={homepage}
                  target="_blank"
                  rel="noreferrer"
                >
                  {title} Website
                </a>
              </h3>

              <div className="flex pt-1">
                <a
                  type="button"
                  href={`https://www.youtube.com/results?search_query=${title} trailer`}
                  target="_blank"
                  rel="noreferrer"
                  className="border text-stone-200 border-stone-400 hover:text-stone-100 hover:border-amber-600 py-2 px-5 flex items-center justify-items-center gap-3 transition-colors ease-linear"
                >
                  <AiOutlineYoutube color="red" size={35} />
                  {title} trailer
                </a>
              </div>
            </div>
            <div className="border-t border-gray-200 dark:border-gray-600">
              <div className="p-2 flex justify-end">
                <Button setModal={setModal} title="Close" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieModal;
