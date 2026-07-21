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
          backgroundColor: '#f2ad8a',
          color: '#2d2d2d',
          transition: 'background-color 150ms ease-in-out, box-shadow 150ms ease-in-out',
          '&:hover': {
            backgroundColor: '#c96d4a',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.25)',
          },
          '&:focus-visible': {
            outline: '2px solid #2d2d2d',
            outlineOffset: '2px',
          },
          '&:active': {
            backgroundColor: '#a85a3a',
            boxShadow: 'none',
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
