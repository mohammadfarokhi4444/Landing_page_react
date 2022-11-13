import { Box, Typography } from "@mui/material";
import cart from "../../assets/img/cartIcon.svg";
import user from "../../assets/img/user.svg";
import heart from "../../assets/img/heartIcon.svg";

const Icons = ({ isSmall }) => {
  const e2p = (s) => s.toString().replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);
  const notif = {
    user: 0,
    heart: 2,
    cart: 3,
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Box sx={{ marginRight: isSmall ? "10px" : "20px" }}>
        {notif.cart ? (
          <Box className="stiky" sx={{ backgroundColor: "primary.main" }}>
            <Typography color="common.white" variant="body1" component={"span"}>
              {e2p(notif.cart)}
            </Typography>
          </Box>
        ) : (
          <></>
        )}
        <img src={cart} alt="" />
      </Box>
      <Box sx={{marginRight: isSmall ? "10px" :  "20px" }}>
        {notif.heart ? (
          <Box className="stiky" sx={{ backgroundColor: "primary.main" }}>
            <Typography color="common.white" variant="body1" component={"span"}>
              {e2p(notif.heart)}
            </Typography>
          </Box>
        ) : (
          <></>
        )}
        <img src={heart} alt="" />
      </Box>
      <Box>
        {notif.user ? (
          <Box className="stiky" sx={{ backgroundColor: "primary.main" }}>
            <Typography color="common.white" variant="body1" component={"span"}>
              {e2p(notif.user)}
            </Typography>
          </Box>
        ) : (
          <></>
        )}
        <img src={user} alt="" />
      </Box>
    </Box>
  );
};

export default Icons;
