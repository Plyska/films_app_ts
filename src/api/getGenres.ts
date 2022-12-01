export const getGenres = async () => {
    return await fetch(
        `${process.env.REACT_APP_GENRES}?api_key=${process.env.REACT_APP_KEY}`
      ).then((res) => res.json());
  };
  