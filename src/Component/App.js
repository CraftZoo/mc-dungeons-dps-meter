import React from 'react'
import styled from '@emotion/styled'
import { PlayerTile } from './PlayerTile'
import { Title } from './Title'

export const App = () => {
  const players = [
    {
      id: 0,
      name: 'Player1',
      dps: '150K/s',
      totalDamage: '4M',
      percentageDamage: '40%',
    },
    {
      id: 1,
      name: 'Player2',
      dps: '100K/s',
      totalDamage: '2,5M',
      percentageDamage: '25%',
    },
    {
      id: 2,
      name: 'Player3',
      dps: '100k/s',
      totalDamage: '2,5M',
      percentageDamage: '25%',
    },
    {
      id: 3,
      name: 'Player4',
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
    <>
      <Title>DPS Meter</Title>

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
    </>
  )
}
