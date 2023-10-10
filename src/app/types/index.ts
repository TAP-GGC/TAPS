export type NavItem = {
    name: string
    href: string
}

export type NavItemWithChild = (
    NavItem & {
        children?: [NavItem, ...NavItem[]]
    }
)