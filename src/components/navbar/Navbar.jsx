import useCinema from "../../hooks/UseCinema";
import SearchInput from "./SearchInput";

const Navbar = () => {
  // Traigo desde el context searchTerm y onTextChange para el input de busqueda a traves del hook useCinema.
  const { searchTerm, onTextChange } = useCinema();

  return (
    <>
      <div className="flex items-center justify-between p-4 z-[40] w-full absolute">
        <h1 className="text-red-600 mt-x[-60p] sm:mt-[-60px] lg:mt-0 hover:text-pink-500 hover:font-black text-4xl font-bold transition-colors ease-linear">
          GREATCINEMA
        </h1>
        <div className="relative z-0 h-fit items-center justify-between right-60 top-14 sm:right-72 sm:top-6 md:right-80 md:top-14 lg:right-0 lg:top-2 w-fit sm:w-2/12 lg:w-2/12 mb-8">
          <SearchInput searchTerm={searchTerm} onTextChange={onTextChange} />
        </div>
        {true && (
          <div className="invisible sm:invisible lg:visible">
            <button className="text-white hover:text-gray-300 pr-4 transition-colors ease-linear">
              Account
            </button>

            <button className="bg-red-600 hover:bg-red-700 transition-colors ease-linear px-6 py-2 rounded cursor-pointer text-white">
              Logout
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
