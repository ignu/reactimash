import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { loadSessions } from '../../redux/modules/sessions'

class Sessions extends Component {
  componentDidMount() {
    this.props.loadSessions()
  }

  renderSession(session) {
    return (
      <div>
        <h1>{ session.Title }</h1>
        <div>{ session.Abstract }</div>
      </div>
    );
  }

  render() {
    if (this.props.loading) {
      return <div><h1>Loading Sessions...</h1></div>;
    }

    return (
      <div>
        <h1>Sessions</h1>
        { this.props.sessions.map(this.renderSession) }
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    loading: state.sessions.loading,
    sessions: state.sessions.sessions
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Object.assign({}, { loadSessions }), dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Sessions)
