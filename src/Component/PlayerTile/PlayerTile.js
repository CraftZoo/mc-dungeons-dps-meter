import React, { useRef } from 'react'
import { useTheme } from 'emotion-theming'
import styled from '@emotion/styled'
import { useDimensions, usePosition } from 'Util/Hook'

export const PlayerTile = ({
  number,
  name,
  place,
  dps,
  totalDamage,
  percentageDamage,
  progress,
}) => {
  const theme = useTheme()

  const ref = useRef(null)
  const { width, height } = useDimensions(ref)
  const { top, left } = usePosition(ref)

  const colors = theme.colors.players[number]
  const offset = 8
  const backgroundBreak = progress * 100
  const Tile = styled.tr`
    background: linear-gradient(
      to right,
      ${colors.primary},
      ${colors.primary} ${backgroundBreak}%,
      ${colors.dark} ${backgroundBreak}%,
      ${colors.dark}
    );

    &::before,
    &::after {
      position: absolute;
      z-index: -1;

      height: ${height + offset}px;
      width: ${width + offset}px;

      content: '';
    }

    &::after {
      top: ${top - offset}px;
      left: ${left}px;
      background-color: ${colors.border.top};
    }

    &::before {
      top: ${top}px;
      left: ${left - offset}px;
      background-color: ${colors.border.bottom};
    }

    td {
      padding: 10px 30px 0;
      height: 80px;
    }
  `

  const Name = styled.td`
    align-items: center;
    min-width: 50%;
    font-family: 'Minecrafter';

    .name-content {
      display: flex;
      align-items: center;
      white-space: nowrap;
    }

    .place {
      align-self: flex-end;
      min-width: 40px;
    }
  `

  const Item = styled.td`
    text-align: right;
  `

  return (
    <Tile ref={ref}>
      <Name>
        <div className="name-content">
          <div className="place">{place}</div> - {name}
        </div>
      </Name>
      <Item>{dps}</Item>
      <Item>{totalDamage}</Item>
      <Item>{percentageDamage}</Item>
    </Tile>
  )
}
