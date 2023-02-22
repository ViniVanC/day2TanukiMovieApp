import React, { useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { MovieBox } from "./components/MovieBox";
import { Loader } from "./components/Loader";

const App = () => {
  const [movie, setMovie] = useState();
  const [search, setSearch] = useState("");
  const [notMovie, setNotMovie] = useState(false);
  const [open, setOpen] = useState(false);
  const [load, setLoad] = useState(false);

  const handleChange = (e) => {
    return setSearch(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (search !== "") {
      setLoad(true);
      const response = await fetch(
        `https://www.omdbapi.com/?t=${search}&apikey=7f9a3b82`,
        {
          method: "GET",
        }
      );

      const responseResult = await response.json();

      if (responseResult.Response === "False") {
        setNotMovie(true);
      } else {
        setNotMovie(false);
        setMovie(responseResult);
      }

      setOpen(true);
      setLoad(false);
    } else {
      setOpen(false);
    }
  };

  return (
    <>
      <Header />
      <main>
        <div className="container">
          {load ? (
            <Loader />
          ) : (
            <MovieBox
              movie={movie}
              search={search}
              open={open}
              notMovie={notMovie}
              handleSubmit={handleSubmit}
              handleChange={handleChange}
            />
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default App;
