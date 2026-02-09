import { createTheme } from "@mui/material";

export const theme = createTheme({
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          fontFamily: 'SF Light',
          textTransform: 'capitalize',
          color: 'white',
          fontSize: '1.6rem',
          "&.Mui-selected": {
            color: "white",
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          height: '100%',
        },
        scroller: {
          display: 'flex',
        },
        indicator: {
          backgroundColor: 'white',
        }
      },
    }
  },
});
