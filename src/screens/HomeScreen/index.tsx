import React, { useEffect, useState } from "react";
import { getMovies } from "../../api/getMovies";
import { getGenres } from "../../api/getGenres";
import { Film, Genre } from "./types";
import FilmsList from "../../components/FilmsList";

const HomeScreen = () => {
  const [films, setFilms] = useState<Array<Film> | []>([]);
  const [allGenres, setAllGenres] = useState<Array<Genre> | []>([]);

  const getDataFromApi = async () => {
    const res = await getMovies();
    setFilms(res.results);
  }

  const getGenresFromApi = async () => {
    const res = await getGenres();
    setAllGenres(res.genres);
  }

  useEffect(() => {
    getDataFromApi();
    getGenresFromApi();
  }, []);

  return <div>
    <FilmsList films={films} allGenres={allGenres} />
  </div>;
};

export default HomeScreen;
