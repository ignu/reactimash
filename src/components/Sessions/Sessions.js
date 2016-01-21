import React, {Component} from 'react';
import { fetchSessions } from '../../redux/modules/sessions';
import { connect } from 'react-redux';

class Sessions extends Component {
  static propTypes = {
    fetchSessions: React.PropTypes.func,
    sessions: React.PropTypes.object
  };

  componentDidMount() {
    console.log('mountined');
    this.props.fetchSessions();
  }

  render() {
    const loading = this.props.sessions.loadingSessions;

    return (
      <div>
        <h1>Sessions</h1>

        { loading && <div>Loading...</div> }

      </div>);
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchSessions: () => dispatch(fetchSessions())
  };
}

function mapStateToProps(state) {
  return {
    sessions: state.sessions
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sessions);
