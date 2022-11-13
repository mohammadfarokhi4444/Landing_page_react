import { Box, Grid, Container, Typography } from "@mui/material";
import cart from "../../assets/img/cart.svg";
import herbalShop from "../../assets/img/herbalShop.svg";
import moneyBack from "../../assets/img/moneyBack.svg";
import productAuthenticity from "../../assets/img/productAuthenticity.svg";

const Services = () => {
  const list = [
    {
      icon: productAuthenticity,
      title: "ضمانت اصالت کالا",
      des: "مهراشاپ اصالت کالا را برای شما عزیزان تضمین می کند.",
    },
    {
      icon: moneyBack,
      title: "تضمین بازگشت پول",
      des: "در صورت وجود مشکل در کالا، فوری بازگشت پول انجام خواهد شد.",
    },
    {
      icon: herbalShop,
      title: "نخستین مرکز فروشگاههای گیاهی",
      des: "مهراشاپ؛ یک فروشگاه سبز، ارگانیک و بدون ستم است.",
    },
    {
      icon: cart,
      title: "خرید از سراسر دنیا",
      des: "خرید  محصولات پاک از فروشگاههای معتبر دنیا را در مهراشاپ تجربه کنید.",
    },
  ];
  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{ width: "98%", marginTop: "6%" }}
    >
      <Grid container spacing={2} className="servicesGridContainer">
        {list.map((el, index) => {
          return (
            <Grid
              key={index}
              sx={{
                justifyContent: "center",
                display: "grid",
                height: "auto",
              }}
              item
              xs={12}
              sm={6}
              md={3}
            >
              <Box className="inline">
                <Box className="textRight servicesBoxText">
                  <Typography className="servicesTextTitle" component={"h1"}>
                    {el.title}
                  </Typography>
                  <Typography className="servicesTextDes" component={"h1"}>
                    {el.des}
                  </Typography>
                </Box>
                <img
                  className="servicesIcon"
                  src={el.icon}
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

export default Services;
