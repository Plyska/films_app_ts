export const getProductionTeam = async (id: number) => {
  const result = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_KEY}`
  )
    .then((response) => response.json())
    .then((jsonData) => {
      const directors = jsonData.crew.filter(
        ({ job }: { job: string }) => job === "Director"
      );
      const actors = jsonData.cast.filter(
        ({ known_for_department }: { known_for_department: string }) =>
          known_for_department === "Acting"
      );
      const writers = jsonData.crew.filter(
        ({ job }: { job: string }) => job === "Writer"
      );

      return {
        directors,
        actors,
        writers,
      };
    });

  return result;
};
