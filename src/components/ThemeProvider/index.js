import { createTheme } from "@mui/material";

export const theme = createTheme({
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          fontFamily: 'Garet-Book',
          fontWeight: 'bold',
          color: 'white',
          fontSize: '1.6rem',
        },
      },
    },
  },
});
