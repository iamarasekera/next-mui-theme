'use client';
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import theme from '@/styles/theme';
import { ThemeProvider } from '@mui/material/styles';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
       <ThemeProvider theme={theme}>
      <body className={inter.className}>{children}</body>
      </ThemeProvider>
    </html>
  )
}
