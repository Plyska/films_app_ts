export const getDirectors = async (id: number) => {
  const result = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_KEY}`
  )
    .then((response) => response.json())
    .then((jsonData) =>
      jsonData.crew.filter(({ job }: any) => job === "Director")
    );

    return result;
};
