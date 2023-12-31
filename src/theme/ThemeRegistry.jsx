'use client';
import * as React from 'react';
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import NextAppDirEmotionCacheProvider from './EmotionCache';

let lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      light: '#257FB5',
      main: '#257FB5',
      dark: '#257FB5',
      contrastText: '#fff',
    },
    secondary: {
      dark: '#69CCCD',
      main: '#69CCCD',
      light: '#69CCCD',
      contrastText: '#fff',
    },
    error: {
      main: '#f44336',
      contrastText: '#fff',
    },
    warning: {
      main: '#ff9800',
      contrastText: '#fff',
    },
    info: {
      main: '#2196f3',
      contrastText: '#fff',
    },
    success: {
      main: '#4caf50',
      contrastText: '#fff',
    },
    neutral: {
      main: '#ddd',
      contrastText: "#000",
    },
    text: {
      primary: '#333',
      secondary: '#777',
    },
    background: {
      paper: '#fff',
      default: '#f5f5f5',
    },
  },
  typography: {
    fontFamily: 'Montserrat, sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 600,
    },
  },
  spacing: factor => `${0.25 * factor}rem`,
  components: {
    MuiDivider: {
      defaultProps: {
        variant: 'middle',
      },
      styleOverrides: {
        borderColor: '#dddddd', 
        backgroundColor: '#dddddd', 
        
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          '&[data-selected=true]': {
            backgroundColor: '#EE9B00',
          },
          '& .MuiListItemIcon-root &[data-selected=true]': {
            color: '#000',
          },
          '& .MuiListItemText-root &[data-selected=true]': {
            color: '#000',
          },
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: '#673ab7', // Purple color for app bar
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          background: '#673ab7', // Purple color for drawer background
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: '#333',
          color: '#fff',
          padding: '0.25rem .5rem',
          fontSize: '0.80rem',
        },
      },
    }
  },
  CircularProgress: {
    defaultProps: {
      color: 'secondary',
      size: 'small',
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#0044eb', // Purple color for primary elements
      contrastText: '#fff',
    },
    secondary: {
      main: '#ff4081', // Pink color for secondary elements
      contrastText: '#fff',
    },
    text: {
      primary: '#fff',
      secondary: '#bbb',
    },
    background: {
      paper: '#333', // Dark background color
      default: '#222', // Dark default background color
    },
  },
  typography: {
    fontFamily: 'Poppins, sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      color: '#673ab7',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
      color: '#673ab7',
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 600,
      color: '#673ab7',
    },
  },
  spacing: factor => `${0.25 * factor}rem`,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: '#673ab7', // Purple color for app bar
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          background: '#673ab7', // Purple color for drawer background
        },
      },
    },
    // Customize other components as needed
  },
});

const themeWithResponsiveFont = responsiveFontSizes(lightTheme);

export default function ThemeRegistry({ children }) {
  return (
    <NextAppDirEmotionCacheProvider options={{ key: 'mui' }}>
      <ThemeProvider theme={themeWithResponsiveFont}>
        <CssBaseline />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700&display=swap"
        />
        {children}
      </ThemeProvider>
    </NextAppDirEmotionCacheProvider>
  );
}