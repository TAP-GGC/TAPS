"use client"
import React from "react"
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import { AppBar, Box, Button, Divider, IconButton, Menu, MenuItem, MenuList, Popover, Popper, Stack } from "@mui/material";
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import { NavItemsWithChildren } from "@/app/types";
import { HasProperty } from "@/app/util/HasProperty";
import { NotNullable } from "@/app/util/NotNullable";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

type AppBarProps = {
  brand: string,
  homePage: string,
  items: NavItemsWithChildren,
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
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const [open, setOpen] = React.useState<string | undefined>()

  const handleClick = (event: React.MouseEvent<HTMLElement>, element: any) => {
    setOpen(element.name)
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null)
    setOpen(undefined)
  }

  return (
    <Box>        
      <CssBaseline />
      <HideOnScroll {...windowProps}>
        <AppBar 
          enableColorOnDark
          position={'static'} 
          elevation={ 0 }
          sx={{
            height: '50px',
            justifyContent: 'center',
          }}
        >
          <Toolbar
            sx={{
              display: 'flex',
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
            <Stack 
              direction={"row"}
              divider={<Divider orientation="horizontal" flexItem />}
              spacing={4}
              color={ 'white '}
              display={{ xs: 'none', md: 'flex' }}
            >
              { 
                appBarProps.items.map((link) => {
                  return (
                    <Stack
                      key={appBarProps.items.indexOf(link)}
                    >
                      <Button 
                        onClick={ (event) => handleClick(event, link) }
                        size="small"
                        sx={{
                          color: 'white',
                          fontSize:'inherit',
                          fontVariant: 'all-small-caps',
                          letterSpacing: '.1em'
                        }}
                        href={ link.href }
                        key={ link.name }
                        endIcon= { 
                          HasProperty(link, "children") && NotNullable(link.children) ? <KeyboardArrowDownIcon /> : '' 
                        }
                      >
                        { link.name }
                      </Button>
                      {
                        HasProperty(link, "children") && NotNullable(link.children) ?
                        <Menu 
                          open={ open === link.name }
                          onClose={ handleClose }
                          anchorEl={ anchorEl }
                        >
                          {
                            link.children?.map((subListLink) => {
                              return (
                                <MenuItem
                                  key={ link.children?.indexOf(subListLink) }
                                  onClick={ handleClose }
                                >
                                  { subListLink.name }
                                </MenuItem>
                              )
                            })
                          }
                        </Menu> : ''
                      }
                    </Stack>
                  )
                })
              }
            </Stack>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </Box>  
  )
}