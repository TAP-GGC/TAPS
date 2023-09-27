import { NavItemsWithChildren, NavItemsNoChildren } from "@/app/types"

export const siteNavItems: NavItemsWithChildren = [
  { 
    name: 'Calendar', 
    href: '',
  }, 
  { 
    name: 'Events', 
    href: '',
    children: [
      {
        name: 'Upcoming Events',
        href: ''
      },
      {
        name: 'Past Events',
        href: ''
      }
    ]
  }, 
  { 
    name: 'Gallery', 
    href: '' 
  }, 
  { 
    name: 'Contact', 
    href: '' 
  }, 
]
  
export const pageNavItems: NavItemsNoChildren = [
  { 
    name: 'About Us', 
    href: '' 
  }, 
  { 
    name: 'Our Mission', 
    href: '' 
  }, 
  { 
    name: 'ITEC 4500', 
    href: '' 
  }, 
]