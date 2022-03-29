import React, { useState, useEffect, useContext } from "react";

const url = "https://www.omdbapi.com/?apikey=6689dece&t=";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [search, setSearch] = useState("Captain America: The First Avenger");
  const [movies, setMovies] = useState([]);
  const fetchMovies = async () => {
    const response = await fetch(`${url}${search}`);
    const data = await response.json();
    console.log(data);
    setMovies(data);
  };
  useEffect(() => {
    fetchMovies();
  }, [search]);

  return (
    <AppContext.Provider
      value={{
        setSearch,
        movies,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
