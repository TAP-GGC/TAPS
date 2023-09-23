import React from "react"
import { AppBar, Box, Button, Switch, Container, IconButton } from "@mui/material";
import Toolbar from '@mui/material/Toolbar';
import DragHandleIcon from '@mui/icons-material/DragHandle';


type PageBarProps = {
    items: { name: string, href: string }[],
    logo?: React.ReactElement<typeof Image>
}

export const PageBar = (props: PageBarProps) => {
    return (
        <AppBar 
          position={'sticky'}
          elevation={ 0 }
          sx={{
              bgcolor: 'white',
              borderBottom: '1px solid #fafafa',
          }}
        >
          <Toolbar
            sx={{
                bgcolor: 'background.paper',
                opacity: .98,
                justifyContent: 'space-between'
            }}
          >
            <Box
              display={{ xs: 'none', sm: 'flex' }}
            >
              { props.logo }
            </Box>
            <Container
              sx={{
                flexGrow: 2,
                display: { xs: 'none', sm: 'flex' },
              }} 
            >
            { 
              props.items.map((link) => {
                  return (
                  <Button 
                    sx={{
                      color: 'primary.contrastText',
                      fontSize: 13,
                    }}  
                    href={ link.href }
                  >
                      { link.name }
                  </Button>
                  )
              })
            }
            </Container>
            <Box>
              <Switch/>
            </Box>
            <IconButton
              color="inherit"
              sx={{
                display: { xs: 'flex', sm: 'none' }
              }}
            >
              <DragHandleIcon/>  
            </IconButton> 
          </Toolbar>
        </AppBar>
  )
}
  


export default PageBar;