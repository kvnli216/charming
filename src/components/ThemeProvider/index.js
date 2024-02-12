import { createTheme } from "@mui/material";

export const theme = createTheme({
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          fontFamily: 'Garet-Book',
          fontWeight: 'bold',
          color: 'black',
          fontSize: '1.6rem',
        },
      },
    },
  },
});
