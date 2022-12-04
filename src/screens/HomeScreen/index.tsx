import React, { useEffect, useState } from "react";
import { getMovies } from "../../api/getMovies";
import { getGenres } from "../../api/getGenres";
import { Film, Genre } from "./types";
import FilmsList from "../../components/FilmsList";
import Carousel from "../../components/Carousel"
// import { useQuery } from "react-query";
// import InfiniteScroll from 'react-infinite-scroll-component';

import Box from "@mui/material/Box";

const COUNT = 20;

const HomeScreen = () => {
  const [films, setFilms] = useState<Array<Film> | []>([]);
  const [allGenres, setAllGenres] = useState<Array<Genre> | []>([]);
  const [offset, setOffset] = useState<number>(1);

  // const [scrollTop, setScrollTop] = useState<number>(0);

  // const { data } = useQuery("repositories", getMovies)

  const getDataFromApi = async () => {
    const res = await getMovies(offset);
    setFilms((prev) => [...prev, ...res.results]);
  };

  const getGenresFromApi = async () => {
    const res = await getGenres();
    setAllGenres(res.genres);
  };

  // function getBodyScrollTop() { 
  //   const el = document.scrollingElement || document.documentElement 
  //   setScrollTop(el.scrollTop);
  //   return el.scrollTop 
  // }

  // useEffect(() => {
  //   const onScroll = (e: any) => {
  //     // console.log(e);
  //     const { scrollHeight, scrollTop, clientHeight } = e.target.scrollingElement
  //   }


  //   document.addEventListener("scroll", onScroll, true);
  //   return () => document.removeEventListener("scroll", onScroll, true);
  // }, [])

  // const handleScroll = (e: any) => {
  //   const scrollHeight = document.documentElement.scrollHeight;
  //   const currentHeight =
  //   document.documentElement.scrollTop + window.innerHeight;
  //   console.log(currentHeight, scrollHeight)
  //   if (currentHeight + 1 >= scrollHeight) {
  //     setOffset(offset + 1);
  //     console.log('QWE');
  //   }
  // };

  // useEffect(() => {
  //   document.addEventListener('scroll', handleScroll, true);

  //   return () => document.removeEventListener("scroll", handleScroll, true);


  // }, [offset]);

  useEffect(() => {
    getDataFromApi();
    getGenresFromApi();
  }, []);


  return (
    <div>
      {/* <InfiniteScroll
        dataLength={COUNT + 20}
        next={() => console.log("QWEww")}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      > */}
      <Carousel />
      <FilmsList films={films} allGenres={allGenres} />
      {/* </InfiniteScroll> */}
    </div>
  );
};

export default HomeScreen;
