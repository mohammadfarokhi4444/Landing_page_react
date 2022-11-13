import {
  Box,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Button,
} from "@mui/material";
import location from "../../assets/img/location.svg";
import { useState } from "react";
import cities from "./cities.json";

const CityList = ({ isLarge, isMiddle }) => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("انتخاب استان و شهر");
  const list = () => (
    <Box
      sx={{ width: "auto", height: "500px" }}
      role="presentation"
      onClick={(e) => {
        setName(e.target.textContent);
        setOpen(false);
      }}
      onKeyDown={() => setOpen(false)}
    >
      <List>
        {cities.map((el, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemText primary={el.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <Box
      display="flex"
      sx={{
        width: isMiddle ? "100%" : isLarge ? "10%" : "14%",
        alignItems: "center",
      }}
    >
      <Button
        fullWidth
        onClick={() => setOpen(!open)}
        sx={isMiddle ? { justifyContent: "flex-end" } : {}}
      >
        <Typography
          sx={{ padding: "2px 10px 0px 10px" }}
          color="text.primary"
          variant={isMiddle ? "body3" : isLarge ? "subtitile2" : "body2"}
          component={"h1"}
        >
          {name}
        </Typography>
        <img src={location} alt="" />
      </Button>
      <Drawer anchor={"bottom"} open={open} onClose={() => setOpen(false)}>
        {list()}
      </Drawer>
    </Box>
  );
};

export default CityList;
