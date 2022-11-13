import Carousel from "react-grid-carousel";
import laptop from "../../assets/img/laptop.svg";
import home from "../../assets/img/home.svg";
import clothes from "../../assets/img/clothes.svg";
import food from "../../assets/img/food.svg";
import CreateText from "./CreateText";

import { Button, Typography, Box, Container, ButtonBase } from "@mui/material";

const CarouselCategories = () => {
  const MyDot = ({ isActive }) => (
    <span
      style={{
        marginTop: "20px",
        display: "inline-block",
        borderRadius: "50px",
        height: isActive ? "10px" : "8px",
        width: isActive ? "10px" : "8px",
        border: isActive ? "solid  #41544A 1px" : "none",
        background: isActive ? "#FFFFFF" : "#41544A",
      }}
    ></span>
  );
  const responsiveSize = [
    {
      breakpoint: 1200,
      cols: 3,
      rows: 1,
      gap: 10,
      loop: true,
      showDots: true,
      dot: MyDot,
      autoplay: 2000,
    },
    {
      breakpoint: 960,
      cols: 2,
      rows: 1,
      gap: 10,
      loop: true,
      showDots: true,
      autoplay: 2000,
      dot: MyDot,
    },
    {
      breakpoint: 300,
      cols: 1,
      rows: 1,
      gap: 10,
      loop: true,
      showDots: true,
      autoplay: 2000,
      dot: MyDot,
    },
  ];
  const listText = [
    [
      { title: "کامپیوتر رومیزی", select: false },
      { title: "لپ تاپ", select: false },
      { title: "تبلت", select: true },
      { title: "موبایل", select: false },
      { title: "هارد و مموری", select: false },
      { title: "لوازم جانبی", select: false },
    ],
    [
      { title: "صوتی تصویری", select: false },
      { title: "دکوراسیون", select: false },
      { title: "نور و روشنایی", select: false },
      { title: "اشپزخانه", select: false },
      { title: "حیوانات خانگی", select: true },
      { title: "فرش و دستبافت", select: false },
    ],
    [
      { title: "لباس زنانه", select: true },
      { title: "اکسسوری زنانه", select: false },
      { title: "لباس مردانه", select: false },
      { title: "زیورالات زنانه", select: false },
      { title: "پوساک کودک", select: false },
      { title: "عینک آفتابی", select: false },
    ],
    [
      { title: "دسر و کیک", select: false },
      { title: "ساندویچ", select: false },
      { title: "پیتزا", select: false },
      { title: "سالادها", select: false },
      { title: "چلو و خورش ها", select: false },
      { title: "نوشیدنی ها", select: true },
    ],
  ];
  const list = [
    {
      title: "خوراکهای گیاهی",
      des: <CreateText list={listText[3]} />,
      image: food,
      button: "",
    },
    {
      title: "مد و پوشاک",
      des: <CreateText list={listText[2]} />,
      image: clothes,
      button: "",
    },
    {
      title: "خانه و آشپزخانه",
      des: <CreateText list={listText[1]} />,
      image: home,
      button: "",
    },
    {
      title: "الکترونیک",
      des: <CreateText list={listText[0]} />,
      image: laptop,
      button: "",
    },
    {
      title: "خوراکهای گیاهی",
      des: <CreateText list={listText[3]} />,
      image: food,
      button: "",
    },
    {
      title: "مد و پوشاک",
      des: <CreateText list={listText[2]} />,
      image: clothes,
      button: "",
    },
    {
      title: "خانه و آشپزخانه",
      des: <CreateText list={listText[1]} />,
      image: home,
      button: "",
    },
    {
      title: "الکترونیک",
      des: <CreateText list={listText[0]} />,
      image: laptop,
      button: "",
    },
    {
      title: "خوراکهای گیاهی",
      des: <CreateText list={listText[3]} />,
      image: food,
      button: "",
    },
    {
      title: "مد و پوشاک",
      des: <CreateText list={listText[2]} />,
      image: clothes,
      button: "",
    },
    {
      title: "خانه و آشپزخانه",
      des: <CreateText list={listText[1]} />,
      image: home,
      button: "",
    },
    {
      title: "الکترونیک",
      des: <CreateText list={listText[0]} />,
      image: laptop,
      button: "",
    },
  ];
  return (
    <Container disableGutters maxWidth={false} sx={{ marginTop: "4%",width:"98%" }}>
      <Box display="flex" justifyContent="space-between" margin="1vw 1.8vw">
        <Button>
          <Typography
            sx={{
              textDecoration: "underline",
              textUnderlinePosition: "under",
              color: "text.primary",
            }}
            className="carouselViewAll"
          >
            مشاهده همه
          </Typography>
        </Button>
        <Typography color="text.primary" className="carouselLovely">
          دوست داشتنی ترین دسته بندی ها
        </Typography>
      </Box>
      <Carousel
        responsiveLayout={responsiveSize}
        cols={4}
        rows={1}
        gap={10}
        loop
        showDots
        dot={MyDot}
        autoplay={2000}
        hideArrow={true}	
      >
        {list.map((el, index) => (
          <Carousel.Item key={index}>
            <Box
              display="flex"
              sx={{ border: "solid #EBEBEB 1px", padding: "0.5vw" }}
            >
              <img width="47%" style={{ marginTop: "7vw" }} src={el.image} />
              <Box
                display="grid"
                sx={{ justifyItems: "flex-end", width: "100%" }}
              >
                <Typography color="text.primary" className="catTitleText">
                  {el.title}
                </Typography>
                <Box>{el.des}</Box>
                <Button>
                  <Typography
                    sx={{
                      textDecoration: "underline",
                      textUnderlinePosition: "under",
                      color: "secondary.main",
                    }}
                    className="carouselViewMore"
                  >
                    مشاهده بیشتر
                  </Typography>
                </Button>
              </Box>
            </Box>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default CarouselCategories;
