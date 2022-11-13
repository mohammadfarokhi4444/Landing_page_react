import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
} from "@mui/material";
import menus from "../navbar/menus.json";
import categories from "../navbar/categories.json";

const DrawerMenu = ({ setOpen, open }) => {
  const list = () => (
    <Box
      sx={{ width: "220px" }}
      role="presentation"
      onClick={(e) => {
        setOpen(false);
      }}
      onKeyDown={() => setOpen(false)}
    >
      <List>
        {menus
          .slice(0)
          .reverse()
          .map((el, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton>
                <ListItemText
                  primary={el.label}
                  style={{ textAlign: "right" }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        <Divider />
        {categories.map((el, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemText primary={el.name} style={{ textAlign: "right" }} />
              <img
                className={"iconDrawer"}
                alt=""
                src={require(`../../assets/img/categories/${el.icon}.svg`)}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Drawer anchor={"right"} open={open} onClose={() => setOpen(false)}>
      {list()}
    </Drawer>
  );
};

export default DrawerMenu;
