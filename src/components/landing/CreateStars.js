import { Typography, Box } from "@mui/material";
import starRed from "../../assets/img/starRed.svg";
import starWhite from "../../assets/img/starWhite.svg";

const CreateStars = ({ on }) => {
  return (
    <Box display="flex">
      {new Array(5).fill("").map((el, index) => (
          <img key={index} src={index<on ? starRed : starWhite} alt="" />
      ))}
    </Box>
  );
};

export default CreateStars;
