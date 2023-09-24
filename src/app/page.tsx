"use client"
import { PageBar, Navbar } from './lib'
import Image from 'next/image'
import * as logo from './assets/media/logos/LOGOtransparent.png'
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';

import { siteNavItems, pageNavItems } from './data';
import { Divider, Stack } from '@mui/material';

export default function Home() {
  const print = () => window.print()
  return (
    <Box
    component="main"
    sx={{
      bgcolor: 'background.paper',
      color: 'primary.contrastText'
    }}>
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
              return <Box key={e}>awddddddddddddddddddddddddddaaawddd
              dddawddddddddddddddddddddddddddaadddawddddddddddddddddddddddddddaaawddd
              dddawddddddddddddddddddddddddddaaddd
              dddddddddd
              dddddddddd
              dddddddddd
              dddddddddd
              dddddddddd
              dddddddddd
              dddawddddddddddddddddddddddddddaaddd
              dddddddddd
              dddddddddd
              dddddddddd
              dddddddddd
              dddddddddd
              dddddddddd</Box>
            })
          }
        </Stack>
      </Container>
    </Box>
  )
}
