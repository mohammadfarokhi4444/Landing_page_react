import MainPage from "../src/pages/index";
import { ThemeProvider } from "@mui/material";
import Theme from "./assets/theme";

const App = () => {
  return (
    <ThemeProvider theme={Theme.main}>
      <MainPage />
    </ThemeProvider>
  );
};

export default App;
