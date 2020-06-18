import React from 'react'
import { Global, css } from '@emotion/core'
import { ThemeProvider as EmotionProvider } from 'emotion-theming'

import MinecrafterFont from './Fonts/Minecrafter.ttf'
import MinecraftFont from './Fonts/Minecraft.ttf'
import Dirt from './Background/dirt.jpg'

export const ThemeProvider = ({ children }) => {
  const theme = {
    colors: {
      background: '#4c6491',
      text: '#fff',
      shadow: '#717171',
      border: '#000',
      players: [
        {
          primary: '#d4145a',
          dark: '#401225',
          border: {
            top: '#ff4795',
            bottom: '#a50039',
          },
        },
        {
          primary: '#006837',
          dark: '#002511',
          border: {
            top: '#008b42',
            bottom: '#003e37',
          },
        },
        {
          primary: '#c56724',
          dark: '#311a09',
          border: {
            top: '#e88a1C',
            bottom: '#c1472d',
          },
        },
        {
          primary: '#2e3192',
          dark: '#0c0c25',
          border: {
            top: '#2f4ba7',
            bottom: '#1b1464',
          },
        },
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

          html {
            height: 100%;
          }

          html,
          body {
            margin: 0;
            padding: 0;
          }

          body {
            background-image: linear-gradient(
                to bottom,
                rgba(40, 10, 40, 0.85) 0%,
                rgba(0, 0, 0, 0.7) 50%
              ),
              url(${Dirt});

            color: ${theme.colors.text};
            font-family: 'Minecraft';
            font-size: 40px;

            user-select: none;
          }
        `}
      />
      {children}
    </EmotionProvider>
  )
}
