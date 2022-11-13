import { Box, Button, Typography } from "@mui/material";
import menu from "../../assets/img/menu.svg";
import selection from "../../assets/img/selection.svg";

const CategoryButton = ({ setShowCategory, showCategory, isLarge }) => {
  const handleClick = () => {
    setShowCategory(!showCategory);
  };

  return (
    <Box
      display="flex"
      bgcolor="primary.light"
      sx={{
        width: "17%",
        height: "100%",
        alignItems: "center",
        justifyContent: "space-between",
        border: "solid #849D6A 1px",
      }}
    >
      <Button onClick={handleClick} className="selectionButton">
        <img
          className={showCategory ? "openSelectionIcon" : "closeSelectionIcon"}
          src={selection}
          alt=""
        />
      </Button>

      {!isLarge && (
        <Typography variant="h6" component={"h6"} color="common.white">
          دسته بندی ها
        </Typography>
      )}

      <img className="menuIcon" src={menu} alt="" />
    </Box>
  );
};

export default CategoryButton;
