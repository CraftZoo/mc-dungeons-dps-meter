import React, { createContext, useReducer, useContext } from 'react'

const INITIAL_STATE = {
  players: [
    {
      id: 0,
      name: 'Player1',
      dps: '150K/s',
      totalDamage: '4M',
      percentageDamage: '40%',
      progress: 1,
    },
    {
      id: 1,
      name: 'Player2',
      dps: '100K/s',
      totalDamage: '2,5M',
      percentageDamage: '25%',
      progress: 0.7,
    },
    {
      id: 2,
      name: 'Player3',
      dps: '100k/s',
      totalDamage: '2,5M',
      percentageDamage: '25%',
      progress: 0.7,
    },
    {
      id: 3,
      name: 'Player4',
      dps: '50K/s',
      totalDamage: '1M',
      percentageDamage: '10%',
      progress: 0.2,
    },
  ],
}

const StateContext = createContext()
const DispatchContext = createContext()

const reducer = (state, action) => {
  switch (action.type) {
    default:
      throw Error(`Unhandled action type: ${action.type}`)
  }
}

export const PlayerProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE)

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  )
}

const usePlayerState = () => {
  const context = useContext(StateContext)
  if (context === undefined)
    throw Error('usePlayerState must be used within a PlayerProvider')

  return context
}

const usePlayerDispatch = () => {
  const context = useContext(DispatchContext)
  if (context === undefined)
    throw Error('usePlayerDispatch must be used within a PlayerProvider')

  return context
}

export const usePlayer = () => [usePlayerState(), usePlayerDispatch()]
