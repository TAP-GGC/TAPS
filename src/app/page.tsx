"use client"
import { PageBar, Navbar } from './lib'
import Image from 'next/image'
import * as logo from './assets/LOGOtransparent.png'
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import { Button } from "@mui/material";


const siteNavItems = [
  { name: 'Upcoming Events', href: '' }, 
  { name: 'Past Events', href: '' }, 
  { name: 'Gallery', href: '' }, 
  { name: 'Contact Us', href: '' }, 
]

const pageNavItems = [
  { name: 'Course', href: '' }, 
  { name: 'About Us', href: '' }, 
]

export default function Home() {

  return (
    <main>
      <Navbar 
        homePage={ '/' } 
        brand={ "TAPS" }
        logo={ <Image src={ logo } width={ 30 } height={ 30 } alt="Grizzly bear line art"/> }
        items={ siteNavItems }
      />
      <PageBar
        items={ pageNavItems }
      />
      <Toolbar />
      <Container>
        <Box sx={{ my: 2 }}>
          
          {[...new Array(52)]
            .map(
              () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
            )
            .join('\n')}
        </Box>
      </Container>
    </main>
  )
}
