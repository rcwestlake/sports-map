import Immutable from 'immutable'

const initialState = Immutable.Map({
  teams: {},
  filter: ''
})

export const handleTeams = (state = initialState, action = {}) => {
  const { type, payload } = action
  switch (type) {
    case 'GET_TEAMS':
      return state.merge({
        teams: payload.teams,
        filter: payload.filter
      })
    default:
      return state
  }
}
