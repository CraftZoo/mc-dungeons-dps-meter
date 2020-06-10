/** @jsx jsx */
import { jsx } from '@emotion/core'
import { useTheme } from 'emotion-theming'

export const App = () => {
  const theme = useTheme()

  return (
    <div>
      <h1 css={{ color: theme.colors.background }}>
        Minecraft Dungeons DPS Meter
      </h1>
    </div>
  )
}
