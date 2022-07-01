import React, { Suspense } from "react";
import useCinema from "../hooks/UseCinema";

// Componentes con Lazy lo que nos permite que cargue conforme lo necesitamos para no cargar la pagina desde el inicio.
const LazyHero = React.lazy(() => import("../components/hero/Hero"));
const LazySimpleRow = React.lazy(() => import("../components/row/SimpleRow"));
const LazyRow = React.lazy(() => import("../components/row/Row"));

const Home = () => {
  // Traemos del context solo lo que necesitamos a traves del hook useCinema.
  const { requests, setModal, setIdMovie } = useCinema();
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyHero />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <LazyRow rowID="1" title="Trending Movies" />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <LazySimpleRow
          rowID="2"
          title="Horror"
          fetchURL={requests.horrorRequest}
          setModal={setModal}
          setIdMovie={setIdMovie}
        />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <LazySimpleRow
          rowID="3"
          title="Top Rated"
          fetchURL={requests.topRatedRequest}
          setModal={setModal}
          setIdMovie={setIdMovie}
        />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <LazySimpleRow
          rowID="4"
          title="Popular"
          fetchURL={requests.upcomingRequest}
          setModal={setModal}
          setIdMovie={setIdMovie}
        />
      </Suspense>
    </>
  );
};

export default Home;
