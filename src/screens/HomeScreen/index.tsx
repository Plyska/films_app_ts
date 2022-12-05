import React, { useEffect, useState, useCallback } from "react";
import { getMovies } from "../../api/getMovies";
import { getGenres } from "../../api/getGenres";
import { Film, Genre } from "./types";
import FilmsList from "../../components/FilmsList";
import Carousel from "../../components/Carousel";
import useInfiniteScroll from "react-infinite-scroll-hook";
import Typography from "@mui/material/Typography";
import { useAppContext } from "../../context/AppContext";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Box from "@mui/material/Box";

const HomeScreen = () => {
  const [allGenres, setAllGenres] = useState<Array<Genre> | []>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const { parameters, handleChangeParameters } = useAppContext();
  const { films } = parameters;
  const [page, setPage] = useState<number>(0);

  const onLoadMore = () => {
    setLoading(true);
    setPage(prev => prev + 1);
    getMovies(page, handleChangeParameters, films);
    setLoading(false);
  };

  const [sentryRef] = useInfiniteScroll({
    onLoadMore,
    hasNextPage: films.length < 723137,
    loading,
    rootMargin: '0px 0px 1px 0px',
  });

  const getGenresFromApi = async () => {
    const res = await getGenres();
    setAllGenres(res.genres);
  };

  useEffect(() => {
    getGenresFromApi();
  }, []);

  return (
    <Box>
      <Carousel />
      {
        films.length > 0 && (
          <FilmsList allGenres={allGenres} />
        )
      }
      <Box ref={sentryRef}>
        <Typography variant="h4">Loading...</Typography>
      </Box>
    </Box>
  );
};

export default HomeScreen;
