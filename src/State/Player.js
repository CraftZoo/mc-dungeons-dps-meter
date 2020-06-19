import React, { createContext, useReducer, useContext } from 'react'

const INITIAL_STATE = {}

const StateContext = createContext()
const DispatchContext = createContext()

const reducer = (state, action) => {
  switch (action.type) {
    case 'receivedPlayers':
      return { ...state, players: action.payload }
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
