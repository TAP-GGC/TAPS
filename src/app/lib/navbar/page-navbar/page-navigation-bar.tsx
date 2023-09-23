import React from "react"
import { AppBar, Box, Button, Container } from "@mui/material";
import Toolbar from '@mui/material/Toolbar';


type PageBarProps = {
    items: { name: string, href: string }[],
}

export const PageBar = (props: PageBarProps) => {
    return (
        <AppBar position={'sticky'}>
          <Toolbar
            disableGutters
            sx={{
                bgcolor: 'white',
            }}>
            <Container 
              sx={{
                color: 'white',
                display: 'flex',
                gap: '5%'
              }}>
                { 
                    props.items.map((link) => {
                        return (
                        <Button 
                            sx={{
                            color: 'black'
                            }}
                            href={ link.href }>
                            { link.name }
                        </Button>
                        )
                    })
                }
            </Container>
          </Toolbar>
        </AppBar>
  )
}
  


export default PageBar;