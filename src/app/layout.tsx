"use client"
import './globals.css'
import { useMemo, useState, useEffect } from 'react'
import type { Metadata } from 'next'
import { ThemeProvider, useMediaQuery } from '@mui/material'
import { theme } from './theme/Theme'
import { PaletteMode } from '@mui/material';
import { ThemeContext } from './util/Context'

export const metadata: Metadata = {
  title: 'TAPS',
  description: 'TAPS Club @ GGC Website',
  applicationName: 'TAPS Website',
  authors: [{ name: 'Khamilah Nixon' }, { name: 'ReAnn Hollins' }],
  generator: 'Next.js',
  keywords: ['nextjs','react','taps','GGC','technology','ambassador','program'],
  referrer: 'origin',
  viewport: "width=device-width, initial-scale=1",
  creator: "GGC TAPS Officers",
}

export default function RootLayout({children}: {children: React.ReactNode}) {
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
      <ThemeProvider theme={ themeCreator }>
        <html lang="en" className='scroll-smooth'>
          <body>{children}</body>
        </html>
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}
