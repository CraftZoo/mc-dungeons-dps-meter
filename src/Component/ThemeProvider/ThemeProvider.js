import React from 'react'
import { ThemeProvider as EmotionProvider } from 'emotion-theming'

export const ThemeProvider = ({ children }) => {
  const theme = {
    colors: {
      background: '#4c6491',
      text: '#fff',
      shadow: '#717171',
      border: '#000',
      players: [
        { classic: '#3535ad', dark: '#000054' },
        { classic: '#229d73', dark: '#11503b' },
        { classic: '#d94a24', dark: '#6f2612' },
        { classic: '#ff6bac', dark: '#823758' },
      ],
    },
  }

  return <EmotionProvider theme={theme}>{children}</EmotionProvider>
}
