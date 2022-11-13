import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import email from "../../assets/img/footer/email.svg";
import EmailBox from "./EmailBox";

const FooterTop = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box
      display="grid"
      sx={{
        width: "90%",
        height: "28vh",
        alignItems: "start",
        justifyItems: "center",
        textAlign: "center",
      }}
    >
      <Box>
        <img src={email} alt="" />
      </Box>
      <Typography
        color="common.white"
        variant={isMatch ? "h6" : "h4"}
        className="footerTopNews"
      >
        در خبرنامه مهراشاپ عضو شوید
      </Typography>
      <Typography
        color="common.white"
        variant={isSmall ? "subtitile2" : isMatch ? "h5" : "h6"}
        className="footerTopLogin"
      >
        ایمیل خود را ثبت کنید تا از آخرین تخفیف ها و محصولات حراجی در مهراشاپ با
        خبر شوید
      </Typography>
      <EmailBox isSmall={isSmall} />
    </Box>
  );
};

export default FooterTop;
