"use client"
import { PageBar, Navbar } from './lib'
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';

import { siteNavItems, pageNavItems } from './data';
import { Stack } from '@mui/material';

export default function Home() {
  return (
    <Box
      component="main"
      sx={{
        bgcolor: 'background.paper',
        color: 'primary.contrastText'
      }}
    >
      <Navbar 
        homePage={ '/' } 
        brand={ "TAPS" }
        items={ siteNavItems }
      />
      <PageBar
        items={ pageNavItems }
        enableColorModeSwitch={ true }
      />
      <Toolbar />
      <Container>
        <Stack spacing={ 8 }>
          {
            [...new Array(55)].map((e) => {
              return (<Box key={e}>asdijasodjasidaoidjaoidajdioasjdioajdaiosdhasiudahbdiaobdasibdasiohbd</Box>)
            })
          }
        </Stack>
      </Container>
    </Box>
  )
}
