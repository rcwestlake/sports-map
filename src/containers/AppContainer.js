import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { get } from 'immutable'
import { getTeams } from '../store/actions/teams.js'
import App from '../components/App'

const mapStateToProps = (state) => {
  return {
    teamsData: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getTeams }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
