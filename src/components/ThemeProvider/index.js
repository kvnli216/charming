import { createTheme } from "@mui/material";

export const theme = createTheme({
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          fontFamily: 'Cralika',
          fontWeight: 'bold',
          color: 'black',
        },
      },
    },
  },
});
