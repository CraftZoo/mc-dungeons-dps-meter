/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { useTheme } from 'emotion-theming'

export const Title = ({ children, ...props }) => {
  const theme = useTheme()

  return (
    <h1
      css={css`
        margin: 32px 48px 24px;
        font-family: 'Minecrafter';
        font-size: 54px;
        font-weight: normal;
        text-shadow: 4px 4px 10px rgba(0, 0, 0, 0.75),
          4px 4px ${theme.colors.shadow}, 4px 4px 20px rgba(0, 0, 0, 0.75);
      `}
      {...props}
    >
      {children.toUpperCase()}
    </h1>
  )
}
