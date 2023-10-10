"use client"
import { PaletteMode } from '@mui/material';
import { createTheme } from '@mui/material/styles';

export const theme = (mode: PaletteMode) => createTheme({
    palette: { 
      mode,
      ...(mode === 'light' ?
        {
          primary: {
            light: '#50AB83',
            main: '#003224',
            dark: '#001f16',
            contrastText: '#000'
          },
          secondary: {
            light: '#C74242',
            main: '#6B0000',
            dark: '#490000',
            contrastText: '#000'
          },
          background: {
            paper:'#fffe'
          }
        }
      : {   
        primary: {
          light: '#50AB83',
          main: '#00543D',
          dark: '#003224',
          contrastText: '#fff'
        },
        secondary: {
          light: '#C74242',
          main: '#6B0000',
          dark: '#490000',
          contrastText: '#eee'
        },
        background: {
          paper: '#111'
        }
      })
    },
    typography: {
        fontFamily: 'Inter',
        fontSize: 14
    },
  });
  