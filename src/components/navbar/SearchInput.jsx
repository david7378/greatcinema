const SearchInput = ({ onTextChange, searchTerm }) => {
  return (
    <>
      <input
        className="pt-3 placeholder:font-base w-fit placeholder:text-white pb-2 px-0 mt-0
         bg-transparent border-0 border-b-2 appearance-none focus:outline-none text-white focus:ring-0 
         focus:border-red-600 border-green-600 transition-colors ease-linear"
        id="search"
        type="text"
        placeholder="Search your movie here..."
        onChange={(e) => onTextChange(e)}
        value={searchTerm}
      />
    </>
  );
};

export default SearchInput;
