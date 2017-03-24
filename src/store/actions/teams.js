import teamData from '../../data/teams.js'

export const setTeams = (data) => {
  return {
    type: 'GET_TEAMS',
    payload: data
  }
}

export const getTeams = () => {
  return (dispatch) => {
    dispatch(setTeams(teamData))
  }
}
