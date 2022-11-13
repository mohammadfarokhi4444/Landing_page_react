import {
  Button,
  Container,
  Grid,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import "../../assets/css/header.css";
import logo from "../../assets/img/logo.svg";
import menu from "../../assets/img/menu.svg";
import Icons from "./Icons";
import SearchBox from "./SearchBox";
import { useState } from "react";
import DrawerMenu from "./DrawerMenu";

const Header = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const isSmall = useMediaQuery("(max-width:480px)");

  return (
    <Container disableGutters maxWidth={false} className="headerContainer">
      <Grid container sx={{ padding: "10px 0px", placeItems: "center" }}>
        <Grid
          item
          md={2}
          xs={isSmall ? 6 : 7}
          sx={{
            alignItems: "center",
            display: "flex",
            // paddingLeft: isSmall ? "13px" : "30px",
          }}
        >
          <Icons isSmall={isSmall} />
        </Grid>
        {/* {!isMatch && <Grid item xs={1}></Grid>} */}
        {!isMatch && (
          <Grid
            item
            md={8}
            sx={{
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
              direction: "rtl",
            }}
          >
            <SearchBox />
          </Grid>
        )}
        <Grid
          display="flex"
          item
          md={2}
          xs={isSmall ? 6 : 5}
          sx={{ textAlign: "center", alignItems: "center" }}
        >
          <img className="logoIcon" src={logo} alt="" />
          <Button onClick={()=>setOpen(!open)}>
            <img className="menuMobile" src={menu} alt="" />
          </Button>
        </Grid>
        {isMatch && (
          <Grid
            item
            xs={12}
            sx={{
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
              direction: "rtl",
              padding: "20px 0px",
            }}
          >
            <SearchBox isSmall={isSmall} />
          </Grid>
        )}
      </Grid>
      <DrawerMenu setOpen={setOpen} open={open}/>
    </Container>
  );
};

export default Header;
