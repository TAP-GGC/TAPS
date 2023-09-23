"use client"
import * as React from 'react';
import { createTheme } from '@mui/material/styles';
import colors from './colors';

const mode = 'dark'

export const theme = createTheme({
    palette: { 
      mode: mode,
      ...(mode === 'light' ?
        {
          primary: {
            light: '#50AB83',
            main: '#00543D',
            dark: '#003224',
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
          contrastText: '#bbb'
        },
        secondary: {
          light: '#C74242',
          main: '#6B0000',
          dark: '#490000',
          contrastText: '#eee'
        },
        background: {
          paper: '#121a16'
        }
      })
    },
    typography: {
        fontFamily: 'Inter',
        fontSize: 14
    },
    components: {
      // Name of the component
      MuiButtonBase: {
        defaultProps: {
        },
      },
    },
  });
  