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
  switch (type) {
    case 'GET_TEAMS':
      return Object.assign({}, payload)
    default:
      return state
  }
}
