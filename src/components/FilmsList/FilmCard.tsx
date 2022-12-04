import React, { useState, useEffect } from "react";
import { Film, Genre, Director } from "../../screens/HomeScreen/types";
import { styles } from "./styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { getProductionTeam } from "../../api/getProductionTeam";
import IconButton from "@mui/material/IconButton";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import InformationModal from "../InformationModal";

interface FilmCardProps {
  film: Film;
  allGenres: Array<Genre> | [];
}

const FilmCard: React.FC<FilmCardProps> = ({ film, allGenres }) => {
  const [filmGenres, setFilmGenres] = useState<Array<Genre> | []>([]);
  const { genre_ids, id, release_date, title, overview, vote_average } = film;
  const [directors, setDirectors] = useState<Array<Director> | []>([]);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [actors, setActors] = useState([]);
  const [writers, setWriters] = useState([]);

  const getDirectorFromApi = async () => {
    const res = await getProductionTeam(id);
    setDirectors(res.directors);
    setActors(res.actors);
    setWriters(res.writers);
  };

  useEffect(() => {
    getDirectorFromApi();
  }, [film]);

  useEffect(() => {
    const genres: Array<Genre> | [] = [];
    genre_ids.forEach((id: number) => {
      const genre: Genre | undefined = allGenres.find(
        (el: Genre) => el.id === id
      );
      genres.push(genre as never);
    });
    setFilmGenres(genres);
  }, [allGenres, genre_ids]);

  const openModal = () => {
    setIsOpenModal(true);
  };

  return (
    <Box sx={styles.card}>
      <Box sx={styles.imgBox}>
        <Box
          component="img"
          sx={styles.img}
          alt="The house from the offer."
          src={`${process.env.REACT_APP_IMG_URI}${film.poster_path}`}
        />
        <Typography sx={styles.title}>{title}</Typography>
        {localStorage.getItem("token") && <IconButton
          aria-label="info"
          sx={styles.iconButton}
          onClick={openModal}
        >
          <InfoOutlinedIcon sx={styles.icon} />
        </IconButton>}
        <InformationModal
          open={isOpenModal}
          setIsOpenModal={setIsOpenModal}
          actors={actors}
          writers={writers}
          title={title}
          overview={overview}
          IMDB={vote_average}
        />
      </Box>
      {
        localStorage.getItem("token") && (
          <Box sx={styles.filmInfo}>
            <Box sx={styles.genresBox}>
              {filmGenres.length > 0 && filmGenres.map((genre: Genre) => {
                if (genre) {
                  return (
                    <Typography sx={styles.genre} key={genre.id}>
                      {genre.name}
                    </Typography>
                  )
                }
              })}
            </Box>
            <Box sx={styles.genresBox}>
              {directors && directors.map((director: Director) => (
                <Typography sx={styles.director} key={director.id} variant="h5">
                  {director.name}
                </Typography>
              ))}
            </Box>
            <Box sx={styles.genresBox}>
              <Typography sx={styles.year} variant="h6">
                {release_date}
              </Typography>
            </Box>
          </Box>
        )
      }
    </Box>
  );
};

export default FilmCard;
