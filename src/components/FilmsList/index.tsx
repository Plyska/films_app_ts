import React from "react";
import { Film, Genre } from "../../screens/HomeScreen/types";
import Box from "@mui/material/Box";
import FilmCard from "./FilmCard";
import { useAppContext } from "../../context/AppContext";

interface FilmsListProps {
    allGenres: Array<Genre> | [];
}

const FilmsList: React.FC<FilmsListProps> = ({ allGenres }) => {
    const { parameters } = useAppContext();
    const { films } = parameters
    return (
        <Box display="grid" gridTemplateColumns="repeat(2, 1fr)" gap={5}>
            {films &&
                films.map((film: Film) => <FilmCard key={film.id} film={film} allGenres={allGenres} />)}
        </Box>
    );
};

export default FilmsList;
