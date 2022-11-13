import Carousel from "react-grid-carousel";
import avacado from "../../assets/img/avacado.svg";
import flower from "../../assets/img/flower.svg";
import flowerPot from "../../assets/img/flowerPot.svg";
import heart from "../../assets/img/heart.svg";
import lipStick from "../../assets/img/lipStick.svg";
import lollipop from "../../assets/img/lollipop.svg";
import WoodenStool from "../../assets/img/WoodenStool.svg";
import CreateStars from "./CreateStars";
import CreatePrice from "./CreatePrice";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import {
  Button,
  Typography,
  Box,
  Container,
  LinearProgress,
  linearProgressClasses,
} from "@mui/material";

const CarouselAuctionDay = () => {
  
  const priceList = [
    {
      price: 1200000,
      discount: 0,
    },
    {
      price: 35000,
      discount: 0,
    },
    {
      price: 1200000,
      discount: 2000000,
    },
    {
      price: false,
      discount: 0,
    },
    {
      price: 55000,
      discount: 0,
    },
    {
      price: 15000,
      discount: 0,
    },
  ];
  const base = [
    {
      icon: heart,
      image: lollipop,
      title: "آب نبات بدون شکر",
      stars: 1,
      des: "آب نبات بدون شکر تهیه شده از عسل",
      price: priceList[5],
      sold: 20,
      notSold: 10,
      onFocus: false,
    },
    {
      icon: heart,
      image: avacado,
      title: "آواکادو ارگانیک",
      stars: 3,
      des: "آواکادو های رسیده و ارگانیک میوه سرای شیراز",
      price: priceList[4],
      sold: 10,
      notSold: 20,
      onFocus: false,
    },
    {
      icon: heart,
      image: WoodenStool,
      title: "چهارپایه چوبی",
      stars: 5,
      des: "چهارپایه چوبی با چوب گردو رنگ طبیعی خود چوب حفظ شده",
      price: priceList[3],
      sold: 20,
      notSold: 10,
      onFocus: false,
    },
    {
      icon: heart,
      image: flower,
      title: "سبد گل طبیعی",
      stars: 2,
      des: "یک سبد گل طبیعی به سلیقه شما به ارزش  ۲,۰۰۰,۰۰۰ تومان با تخفیف ویژه فقط امروز",
      price: priceList[2],
      sold: 20,
      notSold: 10,
      onFocus: false,
    },
    {
      icon: heart,
      image: lipStick,
      title: "رژلب گیاهی",
      stars: 4,
      des: "رژلبهای گیاهی کاملا ارگانیک از برند پاک سیما",
      price: priceList[1],
      sold: 20,
      notSold: 10,
      onFocus: false,
    },
    {
      icon: heart,
      image: flowerPot,
      title: "کاکتوس با گلدان سنگی",
      stars: 3,
      des: "",
      price: priceList[0],
      sold: 20,
      notSold: 10,
      onFocus: false,
    }
  ];
  const [list, setList] = useState(base);
  const e2p = (s) => s.toString().replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 5,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.secondary.main,
      // transform: [{ rotate: "90deg" }]
      direction: "rtl",
    },
  }));
  const responsiveSize = [
    {
      breakpoint: 1550,
      cols: 5,
      rows: 1,
      gap: 15,
      loop: true,
      showDots: true,
      // autoplay: 2000,
    },
    {
      breakpoint: 1300,
      cols: 4,
      rows: 1,
      gap: 15,
      loop: true,
      showDots: true,
      // autoplay: 2000,
    },
    {
      breakpoint: 960,
      cols: 3,
      rows: 1,
      gap: 15,
      loop: false,
      showDots: true,
      // autoplay: 2000,
    },
    {
      breakpoint: 767,
      cols: 1,
      rows: 1,
      gap: 10,
      loop: false,
      showDots: true,
      // autoplay: 2000,
    },
  ];

  const handleOnFocus = (id, enter) => {
    const newList = [...list];
    if (enter) {
      newList.map((el, index) => {
        if (index == id) {
          el.onFocus = true;
        } else {
          el.onFocus = false;
        }
      });
    } else {
      newList.map((el, index) => {
        el.onFocus = false;
      });
    }
    setList(newList);
  };
  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{
        width: "98%",
        marginTop: "90px",
        border: "solid #B04D50 2px",
        borderRadius: "4px",
        padding: "10px 0",
        minHeight: "320px",
        maxHeight: "520px",
      }}
    >
      <Box
        className="timeBox"
        bgcolor="common.white"
        display="flex"
        justifyContent="space-between"
      >
        <Box
          display="flex"
          sx={{
            backgroundColor: "secondary.main",
            borderRadius: "20px",
            padding: "0.5vw 1vw",
          }}
        >
          <Typography
            sx={{
              color: "common.white",
              margin: "0 0.5vw",
            }}
            className="carouselViewAll"
          >
            11 : 43 : 11
          </Typography>
          <Typography
            sx={{
              color: "common.white",
            }}
            className="carouselViewAll"
          >
            مانده تا پایان
          </Typography>
        </Box>
        <Typography color="text.primary" className="carouselLovely">
          حراجی روز
        </Typography>
      </Box>
      <Carousel
        containerStyle={{}}
        responsiveLayout={responsiveSize}
        cols={6}
        rows={1}
        gap={10}
        loop
        showDots
        autoplay={2000}
        // hideArrow={true}
      >
        {list.map((el, index) => (
          <Carousel.Item key={index}>
            <Box>
              <Box className="likeBox">
                <img width="100%" src={el.icon} />
              </Box>
              <Box
                className="imageBoxCarousel"
                sx={{ background: "url(" + el.image + ")" }}
              ></Box>
              <Box>
                <Typography
                  textAlign="center"
                  color="text.primary"
                  component="h2"
                  variant="h6"
                >
                  {el.title}
                </Typography>
              </Box>
              <Box
                sx={{
                  justifyContent: "center",
                  display: "grid",
                  m: "10px 0px",
                }}
              >
                <CreateStars on={el.stars} />
              </Box>
              <Box
                sx={{
                  textAlign: "center",
                  width: "98%",
                  // ml: "6%",
                  height: "40px",
                }}
              >
                <Typography variant="body2" component="h2">
                  {el.des}
                </Typography>
              </Box>
              <Box
                sx={{
                  textAlign: "center",
                  height: "45px",
                  width: "90%",
                  ml: "5%"
                }}
              >
                <CreatePrice
                  handleOnFocus={handleOnFocus}
                  obj={el.price}
                  index={index}
                  onFocus={el.onFocus}
                />
                <Button
                  variant="contained"
                  color="secondary"
                  fullWidth
                  sx={{
                    width: "90%",
                    m: "10px 0 10px 5%",
                    height: "40px",
                    display: el.onFocus ? "flex" : "none",
                  }}
                >
                  <Typography variant="body2" component="h3" marginRight="1vw">
                    اضافه به سبد خرید
                  </Typography>
                  <ShoppingCartIcon color="info" />
                </Button>
              </Box>

              <Box sx={{ m: "20px 0px 20px 5%", width: "90%" }}>
                <BorderLinearProgress
                  variant="determinate"
                  value={Math.floor((el.sold / (el.sold + el.notSold)) * 100)}
                  sx={{ direction: "rtl" }}
                />
                <Box display="flex" sx={{ justifyContent: "space-between" }}>
                  <Typography component="h2" variant="h6" color="text.primary">
                    {e2p(el.sold)} فروخته شده
                  </Typography>
                  <Typography component="h2" variant="h6" color="text.primary">
                    {e2p(el.notSold)} مانده
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default CarouselAuctionDay;
