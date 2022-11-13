import {
  Box,
  Container,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import "../../assets/css/footer.css";
import FooterTop from "./FooterTop";
import FooterCenter from "./FooterCenter";

const Footer = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Container disableGutters maxWidth={false} className="footerContainer">
      <Box
        display="grid"
        sx={{
          width: "100%",
          // height: "36vh",
          alignItems: "end",
          justifyItems: "center",
        }}
      >
        <FooterTop />
      </Box>
      <Box display="grid" sx={{ width: "100%" }}>
        <FooterCenter />
      </Box>
      <Box display="grid" sx={{ width: "100%" }}></Box>
      <Box
        display={isSmall ? "grid" : "flex"}
        justifyContent={isSmall ? "center" : "space-between"}
        sx={{ pl: "2%", pr: "2%", pt: "2%" }}
      >
        <Typography color="common.white" variant={"body2"}>
          © 2022 MehraShop. with love and service.
        </Typography>
        <Typography color="common.white" variant={"body2"}>
          تمامی حقوق برای شرکت مادیار مهر مانا محفوظ می باشد
        </Typography>
      </Box>
    </Container>
  );
};

export default Footer;
