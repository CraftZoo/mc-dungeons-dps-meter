import React from 'react'
import { PlayerProvider } from 'State/Player'

import { PlayersList } from './PlayersList'
import { Title } from './Title'

export const App = () => (
  <>
    <Title>DPS Meter</Title>
    <PlayerProvider>
      <PlayersList />
    </PlayerProvider>
  </>
)
