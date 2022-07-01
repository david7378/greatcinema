const Button = ({ setModal, title }) => {
  return (
    <>
      <button
        className="border text-gray-300 hover:text-white hover:border-gray-100 border-gray-300 py-2 px-5 ml-4 transition-colors ease-linear"
        onClick={() => {
          setModal(false);
        }}
      >
        {title}
      </button>
    </>
  );
};

export default Button;
