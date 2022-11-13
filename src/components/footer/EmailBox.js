import { Paper, InputBase, Button } from "@mui/material";

export default function EmailBox({isSmall}) {

  return (
    <Paper
      component="form"
      sx={{
        padding: "0.5vw 0.5vw",
        display: "flex",
        height:isSmall ? "30px" : "35px",
        alignItems: "center",
        minWidth:isSmall ? "280px" : "500px",
        width: "50%",
      }}
    >
      <Button
        sx={{
          height: "100%",
          width: "30%",
          color: "common.white",
          minWidth: "50px",
          backgroundColor: "primary.light",
          "&.MuiButtonBase-root:hover": {
            bgcolor: "primary.dark",
          },
        }}
      >
        عضویت
      </Button>
      <InputBase
        sx={{ mr: 1, flex: 1, fontSize:isSmall ? "10px" : "16px", direction: "rtl" }}
        placeholder="امیل خود را وارد کنید ..."
      />
    </Paper>
  );
}
