import React from "react";
import { useGlobalContext } from "./context";
const Movie = () => {
  const {
    movies: { Poster, Title },
  } = useGlobalContext();

  return (
    <>
      <div className="px-5">{Title}</div>

      <div className="overflow-x-hidden columns-3 md:columns-3 gap-4 p-2 flex ">
        <img src={Poster} alt="" className="w-full p-2 rounded-lg" />
        <img src={Poster} alt="" className="w-full p-2 rounded-lg" />
        <img src={Poster} alt="" className="w-full p-2 rounded-lg" />
      </div>
    </>
  );
};

export default Movie;
