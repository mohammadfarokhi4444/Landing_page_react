import {
  Box,
  useTheme,
  useMediaQuery,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import logo from "../../assets/img/footer/logo.svg";
import facebook from "../../assets/img/footer/facebook.svg";
import insta from "../../assets/img/footer/insta.svg";
import youtube from "../../assets/img/footer/youtube.svg";
import phone from "../../assets/img/footer/phone.svg";
import time from "../../assets/img/footer/time.svg";
import mail from "../../assets/img/footer/mail.svg";
import trust from "../../assets/img/footer/trust.svg";
import digi from "../../assets/img/footer/digi.svg";

const SooterCenter = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const sellersRules = [
    {
      name: "قوانین ثبت نام",
    },
    {
      name: "ثبت فروشگاه",
    },
    {
      name: "قوانین محصولات",
    },
    {
      name: "حمل و نقل کالا",
    },
    {
      name: "روابط عمومی فروشندگان",
    },
    {
      name: "تماس با مدیریت",
    },
  ];
  const aboutShop = [
    {
      name: "ارزش های مهرشاپ",
    },
    {
      name: "محصولات ما",
    },
    {
      name: "همکاری با مهرشاپ",
    },
    {
      name: "استخدام",
    },
    {
      name: "انتقادات و پیشنهادات",
    },
    {
      name: "پرسشهای رایج",
    },
  ];
  const rulesList = [
    {
      name: "قوانین ارسال و تحویل",
    },
    {
      name: "بازگشت محصول",
    },
    {
      name: "خرابی محصولات",
    },
    {
      name: "قوانین محصولات خوراکی",
    },
    {
      name: "لغو خرید",
    },
    {
      name: "عضویت در محراشاپ",
    },
  ];
  const contactUsList = [
    {
      title: "ارتباط با ما",
      des: "",
      icon: "",
    },
    {
      title: "",
      des: "0930 499 4959",
      icon: phone,
    },
    {
      title: "",
      des: "شنبه تا چهارشنبه: 7 صبح تا 5 عصر",
      icon: time,
    },
    {
      title: "",
      des: " پنجشنبه: 8 صبح تا 2 بعدازظهر",
      icon: "",
    },
    {
      title: "",
      des: "info@mehrashop.com",
      icon: mail,
    },
  ];
  return (
    <Grid container sx={{ textAlign: "center", m: "3vw 0" }}>
      <Grid
        item
        md={2}
        xs={12}
        display="flex"
        alignItems="flex-start"
        sx={{ mt: "3%" }}
      >
        <img alt="" src={digi} width="50%" height="60px" />
        <img alt="" src={trust} width="50%" height="70px" />
      </Grid>
      <Grid
        item
        md={2}
        sm={3}
        xs={5}
        sx={{
          textAlign: "right",
          marginTop: "3vw",
          paddingRight: "1vw",
          display: "grid",
          justifyContent: "end",
        }}
      >
        <Typography
          color="common.white"
          variant={isMatch ? "h6" : "h4"}
          component={"h2"}
          sx={{ mb: 1 }}
        >
          درباره مهرشاپ
        </Typography>
        {aboutShop.map((el, index) => (
          <Link
            underline="hover"
            sx={{ display: "flex", justifyContent: "flex-end" }}
            key={index}
          >
            <Typography
              color="common.white"
              variant={isMatch ? "body2" : "body4"}
              component={"h2"}
            >
              {el.name}
            </Typography>
          </Link>
        ))}
      </Grid>
      <Grid
        item
        md={2}
        sm={3}
        xs={5}
        sx={{
          textAlign: "right",
          marginTop: "3vw",
          paddingRight: "1vw",
          display: "grid",
          justifyContent: "end",
        }}
      >
        <Typography
          color="common.white"
          variant={isMatch ? "h6" : "h4"}
          component={"h2"}
          sx={{ mb: 1 }}
        >
          فروشندگان
        </Typography>
        {sellersRules.map((el, index) => (
          <Link
            underline="hover"
            sx={{ display: "flex", justifyContent: "flex-end" }}
            key={index}
          >
            <Typography
              color="common.white"
              variant={isMatch ? "body2" : "body4"}
              component={"h2"}
            >
              {el.name}
            </Typography>
          </Link>
        ))}
      </Grid>
      <Grid
        item
        md={2}
        sm={3}
        xs={5}
        sx={{
          textAlign: "right",
          marginTop: isMatch ? "10vw" : "3vw",
          paddingRight: "1vw",
          display: "grid",
          justifyContent: "end",
        }}
      >
        <Typography
          color="common.white"
          variant={isMatch ? "h6" : "h4"}
          component={"h2"}
          sx={{ mb: 1 }}
        >
          قوانین مهراشاپ
        </Typography>
        {rulesList.map((el, index) => (
          <Link
            underline="hover"
            sx={{ display: "flex", justifyContent: "flex-end" }}
            key={index}
          >
            <Typography
              color="common.white"
              variant={isMatch ? "body2" : "body4"}
              component={"h2"}
            >
              {el.name}
            </Typography>
          </Link>
        ))}
      </Grid>
      <Grid
        item
        md={2}
        sm={3}
        xs={5}
        sx={{
          textAlign: "right",
          marginTop: isMatch ? "10vw" : "3vw",
          paddingRight: "1vw",
        }}
      >
        {contactUsList.map((el, index) => (
          <Box key={index} display="grid">
            <Typography
              color="common.white"
              component={"h6"}
              variant={isMatch ? "h6" : "h4"}
              className="contactTitle"
            >
              {el.title}
            </Typography>
            <Box display="flex" sx={{ justifyContent: "end" }}>
              <Typography
                color="common.white"
                component={"h1"}
                variant="body2"
                className="contactDes"
              >
                {el.des}
              </Typography>
              <img
                width="8%"
                style={{ marginRight: "2vw" }}
                src={el.icon}
                alt=""
              />
            </Box>
          </Box>
        ))}
      </Grid>
      <Grid item md={2} xs={12} sx={{ mt: isMatch ? "10vw" : 0 }}>
        <img src={logo} alt="" />
        <Box sx={{ width: "100%", textAlign: "right" }}>
          <Typography
            color="common.white"
            className="footerCenterTypoShop"
            variant="body2"
          >
            مهراشاپ یک فروشگاه اینترنتی ارگانیک و سلامت محور
          </Typography>
          <Typography
            color="common.white"
            className="footerCenterTypoShopMore"
            variant="body2"
            sx={{
              textDecoration: "underline",
              textUnderlinePosition: "under",
            }}
          >
            بیشتر بدانید...
          </Typography>
        </Box>
        <Box
          display="flex"
          sx={{
            marginLeft: "30px",
            height: "2vw",
            width: "70%",
            justifyContent: "space-between",
            marginTop: "2vw",
          }}
        >
          <img src={facebook} alt="" />
          <img src={insta} alt="" />
          <img src={youtube} alt="" />
        </Box>
      </Grid>
    </Grid>
  );
};

export default SooterCenter;
