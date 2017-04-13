import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { get } from 'immutable'
import { getTeams, getAllTeams } from '../store/actions/teams.js'
import App from '../components/App'

const mapStateToProps = (state) => {
  return {
    teamsData: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getTeams, getAllTeams }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
