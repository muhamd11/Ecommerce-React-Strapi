// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./slider.css";

// import required modules
import { Pagination } from "swiper/modules";
import { useTheme } from "@emotion/react";
import { Box, Button, Stack, Typography } from "@mui/material";

const mySlider = [
  { text: "MEN", link: "src/images/banner-15.jpg" },
  { text: "WOMEN", link: "src/images/banner-25.jpg" },
];

export default function Slider() {
  const theme = useTheme();
  return (
    <>
      <Swiper
        loop={true}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {mySlider.map((item) => {
          return (
            <SwiperSlide key={item.link} className="parent-slider">
              <img src={item.link} alt="" />
              <Box
                sx={{
                  [theme.breakpoints.up("sm")]: {
                    position: "absolute",
                    left: "10%",
                    textAlign: "left",
                  },

                  [theme.breakpoints.down("sm")]: {
                    pt: 4,
                    pb: 6,
                  },
                }}
              >
                <Typography
                  sx={{
                    color: "#222",
                  }}
                  variant="h5"
                >
                  LIFESTYLE COLLECTION
                </Typography>

                <Typography
                  sx={{
                    color: "#222",
                    fontWeight: 500,
                    my: 1,
                  }}
                  variant="h3"
                >
                  {item.text}
                </Typography>

                <Stack
                  sx={{
                    justifyContent: { xs: "center", sm: "left" },
                  }}
                  direction={"row"}
                  alignItems={"center"}
                >
                  <Typography color={"#333"} mr={1} variant="h4">
                    SALE UP TO
                  </Typography>
                  <Typography color={"#D23F57"} variant="h4">
                    30% OFF
                  </Typography>
                </Stack>
                <Typography
                  sx={{
                    color: "#000",
                    fontWeight: 300,
                    my: 1,
                  }}
                  variant="body1"
                >
                  Get Free Shipping on orders over $99.00
                </Typography>

                <Button
                  sx={{
                    px: 5,
                    py: 1,
                    mt: 2,
                    backgroundColor: "#222",
                    boxShadow: "0px 4px 16px rgba(43, 52, 69, 0.1)",
                    color: "#fff",
                    borderRadius: "1px",
                    "&:hover": {
                      bgcolor: "#151515",
                      boxShadow: "0px 4px 16px rgba(43, 52, 69, 0.1)",
                    },
                  }}
                  variant="contained"
                >
                  shop now
                </Button>
              </Box>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
