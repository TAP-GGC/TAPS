import { createContext } from 'react'

export const ThemeContext = createContext({ toggleColorMode: () => {}, enabled: false });