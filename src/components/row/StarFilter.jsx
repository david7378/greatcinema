import { AiFillStar } from "react-icons/ai";

const StarFilter = ({ value, handleStar }) => {
  return (
    <>
      <div className="flex pt-5 ">
        <span
          className={`${
            (value >= 0) & (value <= value + 2)
              ? "text-amber-500"
              : "text-stone-200"
          } cursor-pointer hover:text-amber-500 transition-colors ease-linear active:text-red-500 `}
        >
          <i onClick={() => handleStar(2)}>
            <AiFillStar size={20} className="" />
          </i>
        </span>

        <span
          className={`${
            (value > 2) & (value <= value + 2)
              ? "text-amber-500"
              : "text-stone-200"
          } cursor-pointer hover:text-amber-500 transition-colors ease-linear active:text-red-500  `}
        >
          <i onClick={() => handleStar(4)}>
            <AiFillStar size={20} />
          </i>
        </span>

        <span
          className={`${
            (value > 4) & (value <= value + 2)
              ? "text-amber-500"
              : "text-stone-200"
          } cursor-pointer hover:text-amber-500 transition-colors ease-linear active:text-red-500 `}
        >
          <i onClick={() => handleStar(6)}>
            <AiFillStar size={20} />
          </i>
        </span>

        <span
          className={`${
            (value > 6) & (value <= value + 2)
              ? "text-amber-500"
              : "text-stone-200"
          } cursor-pointer hover:text-amber-500 transition-colors ease-linear active:text-red-500`}
        >
          <i onClick={() => handleStar(8)}>
            <AiFillStar size={20} />
          </i>
        </span>

        <span
          className={`${
            (value > 8) & (value <= value + 2)
              ? "text-amber-500"
              : "text-stone-200"
          } cursor-pointer hover:text-amber-500 transition-colors ease-linear active:text-red-500`}
        >
          <i onClick={() => handleStar(10)}>
            <AiFillStar size={20} />
          </i>
        </span>
      </div>
    </>
  );
};

export default StarFilter;
