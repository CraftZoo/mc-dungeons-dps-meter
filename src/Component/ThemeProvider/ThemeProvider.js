import React from 'react'
import { Global, css } from '@emotion/core'
import { ThemeProvider as EmotionProvider } from 'emotion-theming'

import MinecrafterFont from './Minecrafter.ttf'

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

  return (
    <EmotionProvider theme={theme}>
      <Global
        styles={css`
          @font-face {
            font-family: 'Minecrafter';
            src: url(${MinecrafterFont});
          }

          html,
          body {
            margin: 0;
            padding: 0;
            font-family: 'Minecrafter';
            font-size: 40px;
          }
        `}
      />
      {children}
    </EmotionProvider>
  )
}
