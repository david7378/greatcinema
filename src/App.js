import React, { Suspense } from "react";
import useCinema from "./hooks/UseCinema";
import MovieModal from "./components/modals/MovieModal";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  // Traemos del context solo lo que necesitamos a traves del hook useCinema.
  const { modal, setModal, dataMovie } = useCinema();
  return (
    <>
      {/* Componente que muestra las alertas */}
      <ToastContainer
        position="top-right"
        autoClose={2900}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/* Abrimos el modal, cuando modal es tre */}
      {modal && (
        <Suspense fallback={<div>Loading...</div>}>
          <MovieModal setModal={setModal} dataMovie={dataMovie} />
        </Suspense>
      )}
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Home />
      </Suspense>
    </>
  );
}

export default App;
