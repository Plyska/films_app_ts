import { Film } from "../screens/HomeScreen/types";

export const getMovies = async (page: number, handleChangeParameters: (arg: {
  films: Array<Film>;
}) => void, films: Array<Film>) => {
  return await fetch(
    `${process.env.REACT_APP_URI}/?api_key=${process.env.REACT_APP_KEY}&page=${page + 1}`
  ).then((res) => res.json().then(res => handleChangeParameters({
    films: [...films, ...res.results],
  })));
};
