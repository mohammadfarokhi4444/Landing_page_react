import { Box, Button, Typography } from "@mui/material";
import { useRef, useEffect } from "react";

const CreatePrice = ({ obj, handleOnFocus, index, onFocus }) => {
  const convertToCurrency = (x) => {
    x = Number(x);
    x = x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return x.replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);
  };
  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          handleOnFocus(index, false);
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("scroll", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  return (
    <Button
      ref={wrapperRef}
      fullWidth
      onMouseEnter={() => handleOnFocus(index, true)}
      sx={{
        width: "90%",
        m: "10px 0 10px 10%",
        direction: "rtl",
        justifyContent: "space-between",
        height: "3vw",
        display: onFocus ? "none" : "flex",
      }}
    >
      <Typography color="secondary.main" variant="body1" component="h2">
        {convertToCurrency(obj.price)} تومان
      </Typography>
      <Typography
        sx={{ textDecoration: "line-through", justifyContent: "flex-end" }}
        color="text.secondary"
        variant="body2"
        component="h2"
      >
        {obj.discount ? convertToCurrency(obj.discount) : ""}
      </Typography>
    </Button>
  );
};

export default CreatePrice;
