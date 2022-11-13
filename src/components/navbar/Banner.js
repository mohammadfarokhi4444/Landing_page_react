import { Box, Button, Typography, useMediaQuery, useTheme } from "@mui/material";

const Banner = ({ showCategory, isMiddle }) => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box
      display="flex"
      sx={{ justifyContent: "center", alignItems: "center" }}
      width={!isMiddle && showCategory ? "82%" : "100%"}
      className={isMiddle ? "bannerImageMobile" : "bannerImage"}
    >
      <Box width="90%" sx={{ display:"grid", direction: "rtl" }}>
        <Box >
          <Typography className="bavverTypo1" color="text.primaryChannel">
            بشقاب مهربانی
          </Typography>
        </Box>
        <Box  >
          <Typography className="bavverTypo2" color="text.primaryChannel">
            خوراک تازه گیاهی
          </Typography>
        </Box>
        <Box  >
          <Typography className="bavverTypo3" color="primary.light">
            هر روز با مواد اولیه سالم
          </Typography>
        </Box>
        <Box  sx={{width:"40%",display:isSmall? "none": "flex",}}>
          <Typography className="bavverTypo4" color="text.primaryChannel">
            خوراکهای ایرانی و بین المللی گیاهی، خام گیاهی و وگن با مواد اولیه
            سالم و ارگانیک هر روز درب منزل شما. اکنون در شیراز
          </Typography>
        </Box>
        <Button className="bannerButton" variant="contained" sx={{
          color:"common.white",
          backgroundColor: "primary.dark",
          "&.MuiButtonBase-root:hover": {
            bgcolor: "primary.light",
          },
        }}>اکنون خرید کنید</Button>
      </Box>
      {/* <img className="bannerImage" src={banner} alt="" /> */}
    </Box>
  );
};

export default Banner;
