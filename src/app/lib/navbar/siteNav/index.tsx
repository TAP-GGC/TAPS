"use client"
import React from "react"
import Image from "next/image";
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import Toolbar from '@mui/material/Toolbar';
import { 
  AppBar, 
  Box, 
  Button, 
  Collapse, 
  Divider, 
  Drawer, 
  IconButton, 
  List, 
  ListItem, 
  ListItemButton, 
  ListItemIcon, 
  ListItemText, 
  Menu, 
  MenuItem, 
  Stack 
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { NavItemsWithChildren } from "@/app/types";
import { HasProperty } from "@/app/util/HasProperty";
import { NotNullable } from "@/app/util/NotNullable";
import * as logo from '@/app/assets/media/logos/TAPS Transparent.png'

type AppBarProps = {
  brand: string,
  homePage: string,
  items: NavItemsWithChildren,
}

interface WindowProps {
  window?: () => Window;
  children: React.ReactElement;
}

export default function Navbar(appBarProps: AppBarProps, windowProps: WindowProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  const [LGWindowOpen, setLGWindowOpen] = React.useState<string | undefined>()

  const [XSItemOpen, setXSItemOpen] = React.useState<[string, boolean]>(['', false])

  const [XSWindowOpen, setXSWindowOpen] = React.useState<boolean>(false)


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

  const handleXSWindowClose = () => {
    setXSWindowOpen(!XSWindowOpen)
  }

  const handleClick = (event: React.MouseEvent<HTMLElement>, element: any) => {
    setLGWindowOpen(element.name)
    setAnchorEl(event.currentTarget);
  };

  const handleSmNavClick = (element: any) => {
    setXSItemOpen([element.name, !XSItemOpen[1]])
  };

  const handleClose = () => {
    setAnchorEl(null)
    setLGWindowOpen(undefined)
  }

  const XSDrawer = (
    <List
      sx={{
        display: { xs: 'flex', md: 'none' },
        flexDirection: 'column',
        bgcolor: 'background.default',
        height: '100%'
      }}
    >
      <ListItemIcon
        sx={{
          p: 2
        }}
      >
        <Image src={logo} width={150} alt="TAPS Logo"/>
      </ListItemIcon>       
      {
        appBarProps.items.map((link) => {
          return (
            <Box
              key={link.name}
            >
              <ListItem 
              disableGutters 
              disablePadding 
              divider
            >
              <ListItemButton 
                onClick={() => handleSmNavClick(link)}
                href={link.href}
              >
                <ListItemText>{ link.name }</ListItemText>
              { 
                HasProperty(link, "children") ? 
                XSItemOpen[0] === link.name  ? <ExpandMore/> : <ExpandLess/> 
                : ''
              }
              </ListItemButton>
            </ListItem>
              <Collapse in={XSItemOpen[0] === link.name} timeout={'auto'} unmountOnExit>
                <List 
                  disablePadding
                  dense
                >
                  {
                    HasProperty(link, "children") && NotNullable(link.children) ?
                    link.children?.map((subListLink) => {
                      return (
                        <ListItem 
                          key={subListLink.name}
                          disableGutters 
                          disablePadding 
                        >
                          <ListItemButton 
                            href={subListLink.href}
                            sx={{
                              px: 5
                            }}
                          >
                            <ListItemText>{ subListLink.name }</ListItemText>
                          </ListItemButton>
                        </ListItem>
                      )
                    }) : ''
                  }
                </List>
              </Collapse>
            </Box>
          )
        })
      }
    </List>
  )

  return (
    <div>
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
              onClick={handleXSWindowClose}
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
                        onMouseOver={ (event) => handleClick(event, link) }
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
                          open={ LGWindowOpen === link.name }
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
      <nav>
        <Drawer
          variant="temporary"
          open={XSWindowOpen}
          onClose={handleXSWindowClose}
          sx={{
            display: { xs: 'flex', md: 'none' },
          }}
        >
          { XSDrawer }
        </Drawer>
      </nav>
    </div> 
  )
}