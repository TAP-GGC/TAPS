import { SiteNavigationBar, NavLinks } from './lib'

export default function Home() {
  return (
    <main>
      <SiteNavigationBar homePage={ '/' } brand={ "TAPS Club @ GGC" }>
        <NavLinks link={ '' }>Upcoming Events</NavLinks>
        <NavLinks link={ '' }>Past Events</NavLinks>
        <NavLinks link={ '' }>Gallery</NavLinks>
        <NavLinks link={ '' }>Contact Us</NavLinks>
      </SiteNavigationBar>
    </main>
  )
}
