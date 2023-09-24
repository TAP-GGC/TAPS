type NavItem = {
    name: string
    href: string
}
  
export type NavItemsNoChildren = NavItem[]

export type NavItemsWithChildren = ( 
        NavItem & { 
        children?: [NavItem, ...NavItem[]] 
    }
)[]