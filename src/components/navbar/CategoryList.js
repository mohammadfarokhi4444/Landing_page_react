import { Box, Typography, Button, Divider } from "@mui/material";
import categories from "./categories.json";
import childrenIcon from "../../assets/img/selection.svg";
import { useState } from "react";

const CategoryList = ({ showCategory }) => {
  const [selected, setSelected] = useState(null);
  const handleClick = (value) => {
    setSelected(value);
  };
  return (
    <Box
      display={showCategory ? "grid" : "none"}
      sx={{
        width: "17%",
        height: "auto",
        border: "solid #EBEBEB 1px",
        marginLeft:"1%"
      }}
    >
      {categories.map((el, index) => (
        <Box key={index}>
          <Button
            onClick={() => handleClick(index)}
            fullWidth
            sx={{
              padding: "15px",
            }}
          >
            <Box width="20%">
              {el.children && el.children[0] && (
                <img
                  src={childrenIcon}
                  className={
                    index == selected ? "childrenIconSelect" : "childrenIcon"
                  }
                />
              )}
            </Box>
            <Box width="70%">
              <Typography
                color={index == selected ? "primary.main" : "text.primary"}
                variant="body2"
                component={"h1"}
              >
                {el.name}
              </Typography>
            </Box>
            <Box width="10%">
              <img
                className={index == selected ? "iconSelected" : ""}
                alt=""
                src={require(`../../assets/img/categories/${el.icon}.svg`)}
              />
            </Box>
          </Button>
          <Divider />
        </Box>
      ))}
      <Button
        onClick={() => handleClick(10)}
        fullWidth
        sx={{
          padding: "15px",
        }}
      >
        <Box width="20%"></Box>
        <Box width="70%">
          <Typography
            color={10 == selected ? "primary.main" : "text.primary"}
            variant="body2"
            component={"h1"}
          >
            همه دسته بندی ها
          </Typography>
        </Box>
        <Box width="10%">
          <img
            alt=""
            className={10 == selected ? "iconSelected" : ""}
            src={require("../../assets/img/categories/11.svg").default}
          />
        </Box>
      </Button>
    </Box>
  );
};

export default CategoryList;
