import { FaHeart, FaRegHeart } from "react-icons/fa";

const Movie = ({ item, setModal, setIdMovie }) => {

  // Al hacer click en una pelicula pasamos el id de la misma y abrimos el modal para mostrar la info de la misma.
  const handleClick = () => {
    setIdMovie(item.id);
    setModal(true);
  };

  // Limitamos el largo del string para que ocupe menos espacio en pantalla si supera cierta cantidad de caracteres.
  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  // Desestructuro lo que necesito de item
  const { backdrop_path, title, vote_average } = item;

  return (
    <>
      <div
        className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2"
        onClick={() => handleClick()}
      >
        {backdrop_path !== null ? (
          <img
            className="w-full h-auto block"
            src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
            alt={title}
          />
        ) : (
          <div className="absolute top-0 left-0 w-full h-full">
            <p className="white-space-normal text-white text-xs md:text-sm font-bold flex justify-center items-center h-full text-center gap-1">
              {truncateString(title, 18)}
              {" -"}
              <span className="text-red-500">NO IMAGE...</span>
            </p>
          </div>
        )}

        <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white transition-colors ease-linear">
          <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
            {truncateString(title, 30)}
          </p>
          {backdrop_path !== null ? (
            <p>
              {vote_average > 7 ? (
                <FaHeart className="absolute top-4 left-4 text-gray-300" />
              ) : (
                <FaRegHeart className="absolute top-4 left-4 text-gray-300" />
              )}
            </p>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Movie;
