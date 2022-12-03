import React from "react";
import { Film, Genre } from "../../screens/HomeScreen/types";
import Box from "@mui/material/Box";
import FilmCard from "./FilmCard";

interface FilmsListProps {
    films: Array<Film> | [];
    allGenres: Array<Genre> | [];
}

const FilmsList: React.FC<FilmsListProps> = ({ films, allGenres }) => {
    // console.log(films);
    return (
        <Box display="grid" gridTemplateColumns="repeat(2, 1fr)" gap={5}>
            {films &&
                films.map((film: Film) => <FilmCard key={film.id} film={film} allGenres={allGenres} />)}
        </Box>
    );
};

export default FilmsList;
