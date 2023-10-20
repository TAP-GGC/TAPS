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
  Stack 
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { NavItem, NavItemWithChild } from "@/app/types";
import { HasProperty } from "@/app/util/HasProperty";
import { NotNullable } from "@/app/util/NotNullable";
import { Dropdown } from "@/app/lib/index";
import * as logo from '@/app/assets/media/logos/TAPS Transparent.png'

type AppBarProps = {
  brand: string,
  homePage: string,
  items: NavItemWithChild[],
}

interface WindowProps {
  window?: () => Window;
  children: React.ReactElement;
}

export default function Navbar(appBarProps: AppBarProps, windowProps: WindowProps) {
  const [LGWindowOpen, setLGWindowOpen] = React.useState<string | undefined>()
  const [XSItemOpen, setXSItemOpen] = React.useState<[string, boolean]>(['', false])
  const [XSWindowOpen, setXSWindowOpen] = React.useState<boolean>(false)
  
  const LGDropdownRootRef = React.useRef<HTMLButtonElement>(null)

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

  const handleXSNavClick = (element: any) => {
    setXSItemOpen([element.name, !XSItemOpen[1]])
  };

  const handleClick = (element: any) => {
    setLGWindowOpen(element.name)
  };

  const handleClose = () => {
    setLGWindowOpen(undefined)
  }

  const navDropdownIcon = (link: NavItemWithChild) => {
    if (HasProperty(link, "children") && NotNullable(link.children)) {
      if (LGWindowOpen) {
        return <ExpandLess />
      }
      return <ExpandMore />
    } 
    return ''
  }

  const XSDrawer = (
    <List
      sx={{
        display: { xs: 'flex', md: 'none' },
        flexDirection: 'column',
        bgcolor: 'background.default',
        height: '100%',
        p: 4
      }}
    >
      <ListItemIcon
        sx={{
          px: 2,
          py: 2.5,
        }}
      >
        <Image src={logo} width={200} alt="TAPS Logo"/>
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
                  onClick={() => handleXSNavClick(link)}
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
              <Collapse 
                in={XSItemOpen[0] === link.name} 
                timeout={'auto'} 
              >
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

  const dropdownMenu = (link: NavItemWithChild) => (
    HasProperty(link, "children") && NotNullable(link.children) ?
        <Dropdown
          open = { LGWindowOpen === link.name }
        > 
          <List>
          {
            link.children?.map((subListLink: NavItem) => {
              return (
                <ListItemButton
                  key={ link.children?.indexOf(subListLink) }
                  onClick={ handleClose }
                >
                  <ListItemText>
                    { subListLink.name }
                  </ListItemText>
                </ListItemButton>
              )
            })
          }
          </List>
        </Dropdown> : ''
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
                    <Box 
                      component={'div'} 
                      onMouseLeave={ () => handleClose() }
                      key={ appBarProps.items.indexOf(link) }
                    >
                      <Button 
                        ref={LGDropdownRootRef}
                        onClick={ () => handleClick(link) }
                        size="small"
                        sx={{
                          color: 'white',
                          fontSize:'inherit',
                          fontVariant: 'all-small-caps',
                          letterSpacing: '.1em'
                        }}
                        href={ link.href }
                        key={ link.name }
                        endIcon= { navDropdownIcon(link) }
                      >
                        { link.name }
                      </Button>
                      { dropdownMenu(link) }
                    </Box>
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