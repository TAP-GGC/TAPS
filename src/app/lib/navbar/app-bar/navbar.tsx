"use client"
import Link from "next/link";
import React from "react"
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import { AppBar, Box, Button, ButtonBase, Divider, IconButton, Stack, styled } from "@mui/material";
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
        <AppBar 
          position={'static'} 
          elevation={ 0 }
          sx={{
            height: '50px',
            justifyContent: 'center'
          }}
        >
          <Toolbar
            sx={{
              display: 'flex',
              bgcolor: 'primary.dark',
              color: 'white',
              fontSize: 14,
              justifyContent: 'space-between',
              alignContent: 'center',
            }}
          >
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
                display: 'flex',
                alignItems: 'center'
              }}> 
              <Box
                sx={{
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
                  display: 'flex',
                  color: 'inherit',
                  textDecoration: 'none',
                  fontSize: 'inherit',
                  fontWeight: 200,
                  letterSpacing: '0.3rem',
                  alignItems: 'center',
                  gap: '10px'
                }}>
                { appBarProps.brand }
              </Typography>
            </Box>
            <Stack 
              direction="row"
              divider={<Divider orientation="horizontal" flexItem />}
              spacing={4}
              color={ 'white '}
              display={{ xs: 'none', md: 'flex' }}
            >
              { 
                appBarProps.items.map((link) => {
                  return (
                    <Button 
                      size="small"
                      sx={{
                        color: 'white',
                        fontSize:'inherit',
                        fontVariant: 'all-small-caps',
                        letterSpacing: '.1em'
                      }}
                      href={ link.href }
                      key={ link.name }>
                      { link.name }
                    </Button>
                  )
                })
              }
            </Stack>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <nav>
        
      </nav>
    </Box>  
  )
}