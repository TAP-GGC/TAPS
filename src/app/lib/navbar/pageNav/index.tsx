import { AppBar, Button, Container, Divider, IconButton } from "@mui/material";
import Toolbar from '@mui/material/Toolbar';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import { NavItemsNoChildren } from "@/app/types";
import { ColorModeSwitch } from "../..";


type PageBarProps = {
    items: NavItemsNoChildren,
    enableColorModeSwitch?: boolean
}

export const PageBar = (props: PageBarProps) => {

  return (
    <AppBar 
      elevation={0}
      position={'sticky'}
      sx={{
          bgcolor: 'white',
      }}
    >
      <Toolbar
        sx={{
            bgcolor: 'background.paper',
            opacity: .98,
        }}
      >
        <Container
          sx={{
            flexGrow: 2,
            display: { xs: 'none', sm: 'flex' },
            gap: 3
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
        { 
          props.enableColorModeSwitch ? <ColorModeSwitch/> : ''
        }
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