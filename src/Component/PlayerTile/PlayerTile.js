import React from 'react'
import { useTheme } from 'emotion-theming'
import styled from '@emotion/styled'

export const PlayerTile = ({
  number,
  name,
  place,
  dps,
  totalDamage,
  percentageDamage,
}) => {
  const theme = useTheme()

  const borderRadius = '4px'
  const borderWidth = '4px'
  const Tile = styled.tr`
    background-color: ${theme.colors.players[number].classic};

    td {
      padding: 10px 30px 0;
      height: 72px;
      border: ${theme.colors.border} solid;
      border-width: ${borderWidth} 0;

      &:first-of-type {
        border-top-left-radius: ${borderRadius};
        border-bottom-left-radius: ${borderRadius};
        border-left-width: ${borderWidth};
      }

      &:last-of-type {
        border-top-right-radius: ${borderRadius};
        border-bottom-right-radius: ${borderRadius};
        border-right-width: ${borderWidth};
      }
    }
  `

  const Name = styled.td`
    min-width: 50%;
  `

  const Item = styled.td`
    text-align: right;
  `

  return (
    <Tile>
      <Name>
        {place} - {name}
      </Name>
      <Item>{dps}</Item>
      <Item>{totalDamage}</Item>
      <Item>{percentageDamage}</Item>
    </Tile>
  )
}
