import React, { useEffect } from 'react'
import styled from '@emotion/styled'
import { usePlayer } from 'State/Player'
import { PlayerTile } from 'Component/PlayerTile'

import playersData from './players.json'

export const PlayersList = () => {
  const [{ players }, dispatch] = usePlayer()

  useEffect(() => {
    dispatch({ type: 'receivedPlayers', payload: playersData })
  }, [dispatch])

  const Table = styled.table`
    min-width: 100%;
    padding: 0 96px;
    border-spacing: 0 36px;
  `

  return (
    <Table>
      <tbody>
        {players &&
          players.map(
            (
              { id, name, dps, totalDamage, percentageDamage, progress },
              index
            ) => (
              <PlayerTile
                key={`player-tile-${index}`}
                number={id}
                place={index + 1}
                name={name}
                dps={dps}
                totalDamage={totalDamage}
                percentageDamage={percentageDamage}
                progress={progress}
              />
            )
          )}
      </tbody>
    </Table>
  )
}
