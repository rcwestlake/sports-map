import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setTeams } from '../store/reducers/reducers'
import App from '../components/App'

const mapStateToProps = (state) => {
  return {
    teams: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ setTeams }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
