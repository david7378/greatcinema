const SkeletonMovie = () => {
  return (
    <>
      <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] h-[160px] inline-block cursor-pointer relative p-2 bg-slate-900">
        <p className="white-space-normal text-white text-xs md:text-sm font-bold flex justify-center items-center h-full text-center gap-1">
          <span className="text-red-500">SORRY! NO DATA...</span>
        </p>
      </div>
    </>
  );
};

export default SkeletonMovie;
