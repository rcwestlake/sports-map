import { connect } from 'react-redux'
import App from '../components/App'

const mapStateToProps = (state) => {
  return {
    teams: state
  }
}

export default connect(mapStateToProps)(App)
