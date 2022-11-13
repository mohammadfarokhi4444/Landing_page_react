import { Box, Tabs, Tab, Typography } from "@mui/material";
import { useState } from "react";
import menus from "./menus.json";

const MenuList = ({ isLarge }) => {
  const [value, setValue] = useState(6);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box
      sx={{
        width: isLarge ? "73%" : "69%",
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      <Tabs
        TabIndicatorProps={{
          style: {
            marginBottom: "48px",
          },
        }}
        value={value}
        centered
        onChange={handleChange}
        textColor="primary"
        indicatorColor="primary"
      >
        {menus.map((item, index) => (
          <Tab
            sx={{ minWidth: "20px", padding: "14px" }}
            key={index}
            label={
              <Typography variant="body2" component={"h1"}>
                {item.label}
              </Typography>
            }
          ></Tab>
        ))}
      </Tabs>
    </Box>
  );
};

export default MenuList;
