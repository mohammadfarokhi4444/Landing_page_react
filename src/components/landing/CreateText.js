import { Box, Typography } from "@mui/material";
import ellipseBlack from "../../assets/img/ellipseBlack.svg";
import ellipseRed from "../../assets/img/ellipseRed.svg";

const CreateText = ({ list }) => {
  return (
    <Box>
      {list.map((el, index) => (
        <Box
          key={index}
          display="flex"
          alignItems="center"
          justifyContent= "flex-end"
          sx={{  width: "100%" }}
        >
          <Typography sx={{marginRight:"0.5vw"}}
            color={el.select ? "secondary.main" : "text.secondary"}
            className="createTextTypo"
            component={"h1"}
          >
            {el.title}
          </Typography>
          <img src={el.select ? ellipseRed : ellipseBlack} />
        </Box>
      ))}
    </Box>
  );
};

export default CreateText;
