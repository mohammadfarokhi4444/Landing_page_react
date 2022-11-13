import {
  Typography,
  useMediaQuery,
  OutlinedInput,
  useTheme,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";
import categories from "../navbar/categories.json";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function Categories({ setPersonName, personName }) {
  const theme = useTheme();
  const isMiddle = useMediaQuery(theme.breakpoints.down("sm"));

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  return (
    <FormControl variant="outlined" sx={{ width: isMiddle ? 30 : 170 }}>
      <Select
        sx={{
          boxShadow: "none",
          ".MuiOutlinedInput-notchedOutline": { border: 0 },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: 0,
          },
        }}
        multiple={false}
        displayEmpty
        value={isMiddle ? "" : personName}
        onChange={handleChange}
        input={<OutlinedInput />}
        renderValue={(selected) => {
          if (selected.length === 0) {
            return (
              <>
                {!isMiddle ? (
                  <Typography variant="subtitile1" component="span">
                    همه دسته بندی ها
                  </Typography>
                ) : (
                  <></>
                )}
              </>
            );
          }

          return selected.join(", ");
        }}
        MenuProps={MenuProps}
        // inputProps={{ "aria-label": "Without label" }}
      >
        <MenuItem disabled value="">
          <em>همه دسته بندی ها</em>
        </MenuItem>
        {categories.map((el, index) => (
          <MenuItem
            key={index}
            value={el.name}
            style={getStyles(el.name, personName, theme)}
          >
            {el.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
