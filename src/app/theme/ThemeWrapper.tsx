"use client"
import { ThemeProvider,PaletteMode, useMediaQuery } from '@mui/material'
import { ThemeContext } from '../util/context'
import { theme } from './theme'
import { ReactNode, useMemo, useState, useEffect } from 'react'

type Props = {
    children: ReactNode
}

export default function ThemeWrapper(props: Props) {
    const [mode, setMode] = useState<PaletteMode>('light');
  
    const prefersDarkMode = useMediaQuery(`(prefers-color-scheme: ${mode})`);
  
    useEffect(() => {
      setMode(prefersDarkMode ? 'dark' : 'light')
    }, [prefersDarkMode])
  
    const colorMode = useMemo(
      () => ({
        toggleColorMode: () => {
          setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
        },
        enabled: mode === 'dark'
      }),
      [],
    );
  
    const themeCreator = useMemo(() => theme(mode), [mode])

    return (
        <ThemeContext.Provider value={colorMode}>
            <ThemeProvider theme={themeCreator}>
                {props.children}
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}