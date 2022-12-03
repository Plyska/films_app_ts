export const getMovies = async (page: number = 1) => {
  return await fetch(
    `${process.env.REACT_APP_URI}/?api_key=${process.env.REACT_APP_KEY}&page=${page}`
  ).then((res) => res.json());
};
