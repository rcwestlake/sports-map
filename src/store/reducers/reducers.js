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
      return state
    default:
      return state
  }
}

export const setTeams = (data) => {
  return {
    type: 'GET_TEAMS',
    payload: data
  }
}
