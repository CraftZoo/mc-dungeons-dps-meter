/** @jsx jsx */
import { jsx, css } from '@emotion/core'

const h1 = css`
  color: pink;
`

export const App = () => (
  <div>
    <h1 css={h1}>Minecraft Dungeons DPS Meter</h1>
  </div>
)
