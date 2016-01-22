import React, {Component} from 'react';
import { fetchSessions } from '../../redux/modules/sessions';
import { connect } from 'react-redux';
import { asyncConnect } from 'redux-async-connect';

@asyncConnect({ sessions: fetchSessions })
export default class Sessions extends Component {
  static propTypes = {
    fetchSessions: React.PropTypes.func,
    sessions: React.PropTypes.object,
    name: React.PropTypes.string
  };

  renderSession(session) {
    return <div>
      <h3>{session.Title}</h3>
      <div> { session.Abstract } </div>
    </div>
  }

  render() {
    if(!this.props.sessions) return <div>Loading...</div>;

    let sessions = this.props.sessions.data;

    const loading = true;//this.props.sessions.loadingSessions;

    return (
      <div>
        <h1>Sessions</h1>
        { sessions && sessions.map(this.renderSession) }

        { loading && <div>Loading...</div> }
      </div>);
  }
}
