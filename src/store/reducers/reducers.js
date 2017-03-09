const defaultState = [
  { team: 'players',
    sport: 'baseball'
  },
  {
    team: 'bobcats',
    sport: 'football'
  }
]

export const mapReducer = (state = defaultState, action = {}) => {
  const { type, payload } = action
  switch (action.type) {
    case 'GET_TEAMS':
      return state
    default:
      return state
  }
}
