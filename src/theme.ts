import { createTheme, responsiveFontSizes } from "@mui/material";

import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";

let theme = createTheme({
  palette: {
    primary: {
      main: "#070F2B",
    },
    secondary: {
      main: "#7886C7",
    },
  },
  typography: {
    fontFamily: '"Poppins"',
  },
});

theme = responsiveFontSizes(theme);
export default theme;
