import { useState, useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Movie from "./components/Movie";
import Search from "./components/Search";
function App() {
  return (
    <div>
      <Header />
      <Main />
      <Search />
      <Movie />
      <Movie />
    </div>
  );
}

export default App;
