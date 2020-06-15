import React from 'react'
import { Global, css } from '@emotion/core'
import { ThemeProvider as EmotionProvider } from 'emotion-theming'

import MinecrafterFont from './Fonts/Minecrafter.ttf'
import MinecraftFont from './Fonts/Minecraft.ttf'
import Obsidian from './Background/obsidian.jpg'

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

          @font-face {
            font-family: 'Minecraft';
            src: url(${MinecraftFont});
          }

          * {
            box-sizing: border-box;
          }

          html,
          body {
            margin: 0;
            padding: 0;
          }

          body {
            background-color: ${theme.colors.background};
            background-image: url(${Obsidian});
            background-size: 72px;

            color: ${theme.colors.text};
            font-family: 'Minecraft';
            font-size: 40px;
          }
        `}
      />
      {children}
    </EmotionProvider>
  )
}
