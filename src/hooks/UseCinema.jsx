import { useContext } from "react";
import { CinemaContext } from "../context/CinemaContext";

const useCinema = () => {
  return useContext(CinemaContext);
};

export default useCinema;
