"use client"
import Link from "next/link";
import React from "react"
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import { AppBar, Box, Button, IconButton, Menu, MenuItem, SvgIcon } from "@mui/material";
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';

type AppBarProps = {
  brand: string,
  homePage: string,
  items: { name: string, href: string }[],
  logo?: React.ReactElement<typeof Image>
}


interface WindowProps {
  window?: () => Window;
  children: React.ReactElement;
}

function HideOnScroll(windowProps: WindowProps) {
  const { children, window } = windowProps;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function Navbar(appBarProps: AppBarProps, windowProps: WindowProps) {
  return (
    <Box>        
      <CssBaseline />
      <HideOnScroll {...windowProps}>
        <AppBar position={'static'}>
          <Toolbar
            variant="dense"
            sx={{
              display: 'flex',
              bgcolor: '#003224',
              justifyContent: 'space-between'
            }}>
            <IconButton
              color="inherit"
              sx={{
                display: { xs: 'flex', md: 'none' }
              }}
            >
              <MenuIcon/>  
            </IconButton> 
            <Box
              sx={{
                mr: 2,
                display: 'flex',
                alignItems: 'center'
              }}> 
              <Box
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                }}
              >
              </Box>
              <Typography 
                variant="h6" 
                component="a"
                noWrap
                href={ appBarProps.homePage }
                sx={{
                  mr: 2,
                  display: 'flex',
                  color: 'inherit',
                  textDecoration: 'none',
                  fontSize: '14px',
                  fontWeight: '200px',
                  fontFamily: 'monospace',
                  letterSpacing: '0.2rem',
                  alignItems: 'center',
                  gap: '10px'
                }}>
                { appBarProps.brand }
              </Typography>
            </Box>
            <Box 
              sx={{
                color: 'white',
                display: { xs: 'none', md: 'flex' },
                gap: '20px'
              }}>
              { 
                appBarProps.items.map((link) => {
                  return (
                    <Button 
                      sx={{
                        color: 'white',
                        fontSize:'14px',
                        fontVariant: 'all-small-caps'
                      }}
                      href={ link.href }
                      key={ link.name }>
                      { link.name }
                    </Button>
                  )
                })
              }
            </Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <nav>
        
      </nav>
    </Box>  
  )
}