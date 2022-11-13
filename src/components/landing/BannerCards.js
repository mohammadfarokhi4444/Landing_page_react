import { Box,Container, Button, Grid, Typography } from "@mui/material";
import bannerLeft from "../../assets/img/bannerLeft.svg";
import bannerRight from "../../assets/img/bannerRight.svg";
import bannerCenter from "../../assets/img/bannerCenter.svg";

const BannerCards = () => {
  const list = [
    {
      image: bannerLeft,
      text: (
        <Box>
          <Typography
            className="bannerTextLeft1"
            color={"text.primary"}
            sx={{ marginTop: "1.5vw" }}
            component={"h1"}
          >
            کاکتوس های
          </Typography>
          <Typography
            color={"text.primary"}
            sx={{ marginTop: "0.4vw" }}
            className="bannerTextLeft2"
            component={"h1"}
          >
            ست شده و زیبا
          </Typography>
          <Button>
          <Typography
            className="bannerTextLeft3"
            component={"h1"}
            sx={{
              textDecoration: "underline",
              marginTop: "1vw",
              textUnderlinePosition: "under",
              color: "text.primaryChannel",
            }}
          >
            خرید کنید
          </Typography>
          </Button>
        </Box>
      ),
    },
    {
      image: bannerCenter,
      text: (
        <Box>
          <Typography
            color={"text.primary"}
            className="bannerTextCenter1"
            component={"h1"}
            sx={{ marginTop: "7px" }}
          >
            انواع میوه های فصل
          </Typography>
          <Typography
            color={"text.primary"}
            className="bannerTextCenter2"
            component={"h1"}
            sx={{ marginTop: "0.5vw" }}
          >
            تا ۵۰٪ تخفیف
          </Typography>
          <Typography
            color={"text.disabled"}
            className="bannerTextCenter3"
            component={"h1"}
            sx={{ marginTop: "0.5vw" }}
          >
            ارگانیک و تازه
          </Typography>
          <Button>
            <Typography
              className="bannerTextCenter4"
              component={"h2"}
              sx={{
                textDecoration: "underline",
                marginTop: "0.8vw",
                textUnderlinePosition: "under",
                color: "text.primaryChannel",
              }}
            >
              خرید کنید
            </Typography>
          </Button>
        </Box>
      ),
    },
    {
      image: bannerRight,
      text: (
        <Box>
          <Typography
            color={"common.white"}
            className="bannerTextRight1"
            component={"h1"}
          >
            از سراسر دنیا خرید کنید
          </Typography>
          <Typography
            color={"common.white"}
            className="bannerTextRight2"
            component={"h1"}
            sx={{ marginTop: "0.7vw" }}
          >
            کالاهای دیجیتال اصل در فروشگاه مهراشاپ
          </Typography>
          <Button>
            <Typography
              color={"text.primary"}
              className="bannerTextRight3"
              component={"h2"}
              sx={{
                textDecoration: "underline",
                marginTop: "1.3vw",
                textUnderlinePosition: "under",
                color: "common.white",
              }}
            >
              خرید کنید
            </Typography>
          </Button>
        </Box>
      ),
    },
  ];
  return (
    <Container disableGutters maxWidth={false} sx={{width:"98%"}}>
      <Grid container spacing={2} className="bannerGridContainer">
        {list.map((el, index) => {
          return (
            <Grid key={index}
              item
              xs={12}
              md={4}
            >
              <Box className="textBannerCardBox">
                <Box className="textBannerCardText">{el.text}</Box>
                <img
                  className="textBannerCardImage"
                  src={el.image}
                  alt=""
                  loading="lazzy"
                />
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default BannerCards;
