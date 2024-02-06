import { createTheme } from "@mui/material";

export const theme = createTheme({
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          fontFamily: 'Skeina',
          fontWeight: 'bold',
          color: 'black',
        },
      },
    },
  },
});
