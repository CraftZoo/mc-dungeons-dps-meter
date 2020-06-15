/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { useTheme } from 'emotion-theming'

export const Title = ({ children, ...props }) => {
  const theme = useTheme()

  return (
    <h1
      css={css`
        margin: 48px 72px 40px;
        font-family: 'Minecrafter';
        font-size: 80px;
        font-weight: normal;
        text-shadow: 4px 4px ${theme.colors.shadow};
      `}
      {...props}
    >
      {children.toUpperCase()}
    </h1>
  )
}
