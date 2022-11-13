import { Paper, InputBase, Divider, Button } from "@mui/material";
import searchIcon from "../../assets/img/search.svg";
import Categories from "./Categories";
import { useState } from "react";

export default function SearchBox({ isSmall }) {
  const [personName, setPersonName] = useState([]);

  return (
    <Paper
      component="form"
      sx={{
        display: "flex",
        height: isSmall ? "40px" : "50px",
        alignItems: "center",
        width: "90%",
      }}
    >
      <Categories personName={personName} setPersonName={setPersonName} />
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <InputBase
        sx={{ ml: 1, flex: 1, fontSize: isSmall ? "10px" : "16px" }}
        placeholder={
          personName && personName[0]
            ? `جستجو در ${personName[0]}`
            : "کالای مورد نظر خود را جستجو کنید"
        }
      />
      <Button
        sx={{
          height: "100%",
          minWidth: isSmall ? "30px" : "50px",
          backgroundColor: "primary.main",
          "&.MuiButtonBase-root:hover": {
            bgcolor: "primary.light",
          },
        }}
      >
        <img src={searchIcon} width="70%" />
      </Button>
    </Paper>
  );
}
