import useCinema from "../../hooks/UseCinema";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Movie from "../movie/Movie";
import SkeletonMovie from "../movie/SkeletonMovie";
import StarFilter from "./StarFilter";

const Row = ({ title, rowID }) => {
  // Traigo desde el context lo que voy a utilizar a traves del hook useCinema
  const {
    movies,
    handleStar,
    value,
    filteredMovies,
    noFound,
    setModal,
    setIdMovie,
  } = useCinema();

  // Avanzamos en la fila a la izquierda 500px
  const slideLeft = () => {
    const slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  // Avanzamos en la fila a la derecha 500px
  const slideRight = () => {
    const slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <>
      <div className="flex flex-row gap-5">
        <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
        {/* Filtro de cinco estrellas */}
        <StarFilter handleStar={handleStar} value={value} />
      </div>

      <div className="relative flex items-center group">
        <MdChevronLeft
          onClick={slideLeft}
          className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
        />
        <div
          id={"slider" + rowID}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {filteredMovies.length === 0 ? (
            movies.map((item) => (
              <Movie
                key={item.id}
                item={item}
                setModal={setModal}
                setIdMovie={setIdMovie}
              />
            ))
          ) : !noFound ? (
            filteredMovies.map((fmovie) => (
              <Movie
                key={fmovie.id}
                item={fmovie}
                setModal={setModal}
                setIdMovie={setIdMovie}
              />
            ))
          ) : (
            <SkeletonMovie />
          )}
          {/* Si el estado movies esta vacio muestra el skeletonMovie */}
          {movies.length === 0 && <SkeletonMovie />}
        </div>
        <MdChevronRight
          onClick={slideRight}
          className="bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
        />
      </div>
    </>
  );
};

export default Row;
