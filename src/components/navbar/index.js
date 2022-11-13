import { Box, Container, useMediaQuery, useTheme } from "@mui/material";
import React, { useState } from "react";
import "../../assets/css/navbar.css";
import Banner from "./Banner";
import CategoryButton from "./CategoryButton";
import CategoryList from "./CategoryList";
import CityList from "./CityList";
import MenuList from "./MenuList";

const Navbar = () => {
  const [showCategory, setShowCategory] = useState(false);
  const theme = useTheme();
  const isLarge = useMediaQuery(theme.breakpoints.down("lg"));
  const isMiddle = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Container disableGutters maxWidth={false} sx={{ width: "98%" }}>
      {isMiddle ? (
        <Box sx={{ marginBottom: "2%" }}>
          <CityList isLarge={isLarge} isMiddle={isMiddle} />
          <Banner showCategory={showCategory} isMiddle={isMiddle} />
        </Box>
      ) : (
        <>
          <Box
            display="flex"
            sx={{
              borderTop: "solid #EBEBEB 1px",
              height: "62px",
              width: "100%",
              alignItems: "center",
              marginBottom: "0.5%",
            }}
          >
            <CityList isLarge={isLarge} />
            <MenuList isLarge={isLarge} />
            <CategoryButton
              isLarge={isLarge}
              showCategory={showCategory}
              setShowCategory={setShowCategory}
            />
          </Box>
          <Box display="flex" sx={{ marginBottom: "2%", height: "auto" }}>
            <Banner showCategory={showCategory} />
            <CategoryList showCategory={showCategory} />
          </Box>
        </>
      )}
    </Container>
  );
};

export default Navbar;
