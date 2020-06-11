import React from 'react'
import styled from '@emotion/styled'
import { PlayerTile } from './PlayerTile'

export const App = () => {
  const players = [
    {
      id: 0,
      name: 'FirstDNS',
      dps: '150K/s',
      totalDamage: '4M',
      percentageDamage: '40%',
    },
    {
      id: 1,
      name: 'Pazul',
      dps: '100K/s',
      totalDamage: '2,5M',
      percentageDamage: '25%',
    },
    {
      id: 2,
      name: 'Deons',
      dps: '100k/s',
      totalDamage: '2,5M',
      percentageDamage: '25%',
    },
    {
      id: 3,
      name: 'Netoun',
      dps: '50K/s',
      totalDamage: '1M',
      percentageDamage: '10%',
    },
  ]

  const Table = styled.table`
    min-width: 100%;
    padding: 0 72px;
    border-spacing: 0 16px;
  `
  return (
    <Table>
      <tbody>
        {players.map(
          ({ id, name, dps, totalDamage, percentageDamage }, index) => (
            <PlayerTile
              key={`player-tile-${index}`}
              number={id}
              place={index + 1}
              name={name}
              dps={dps}
              totalDamage={totalDamage}
              percentageDamage={percentageDamage}
            />
          )
        )}
      </tbody>
    </Table>
  )
}
