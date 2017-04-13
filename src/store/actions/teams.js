import teamData from '../../data/teams.js'

export const setTeams = (data) => {
  return {
    type: 'GET_TEAMS',
    payload: data
  }
}

export const getAllTeams = () => {
  return (dispatch) => {
    const data = {
      teams: teamData
    }
    dispatch(setTeams(data))
  }
}

export const getTeams = (sport) => {
  return (dispatch) => {
    const data = {
      teams: teamData.filter(team => team.sport === sport),
      filter: sport
    }
    dispatch(setTeams(data))
  }
}
