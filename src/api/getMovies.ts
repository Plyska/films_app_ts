export const getMovies = async () => {
  return await fetch(
    `${process.env.REACT_APP_URI}/?api_key=${process.env.REACT_APP_KEY}`
  ).then((res) => res.json());
};
