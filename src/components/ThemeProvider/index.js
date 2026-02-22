import { createTheme } from "@mui/material";

export const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: '1.5rem',
          textTransform: 'capitalize',
        },
        containedPrimary: {
          backgroundColor: '#CDCDCD',
          color: '#2d2d2d',
          '&:hover': {
            backgroundColor: '#b0b0b0',
          },
          '&:focus-visible': {
            outline: '2px solid #2d2d2d',
            outlineOffset: '2px',
          },
          '&:active': {
            backgroundColor: '#9a9a9a',
          },
        },
      },
    },
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
          backgroundColor: 'gray',
        }
      },
    }
  },
});
