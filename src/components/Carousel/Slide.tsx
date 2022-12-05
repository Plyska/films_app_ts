import React from "react";
import Box from "@mui/material/Box";
import { styles } from "./styles";
import Typography from "@mui/material/Typography";
import { MockFilm } from "../../constants/dataForSlider";


interface SlideProps {
    film: MockFilm;
}

const Slide: React.FC<SlideProps> = ({ film }) => {
    const getText = () => {
        const textArr = film.plot.split("");
        textArr.splice(50);
        return textArr.join("") + "...";
    };

    return (
        <Box sx={styles.slideBox}>
            <Box sx={styles.img} component={"img"} alt="#" src={film.path} />
            <Typography sx={styles.p} variant="h4">
                {getText()}
            </Typography>
        </Box>
    );
};

export default Slide;
