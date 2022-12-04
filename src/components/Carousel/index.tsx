import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Box from "@mui/material/Box";
import { styles } from "./styles";
import { dataForSlider } from "../../constants/dataForSlider";
import Slide from "./Slide";


type Props = {}

const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
};

const Carousel = (props: Props) => {

    return (
        <Box sx={styles.container}>
            <Slider {...settings}>
                {
                    dataForSlider.map((film) => <Slide key={film.id} film={film} />)
                }
            </Slider>
        </Box>
    )
}

export default Carousel;