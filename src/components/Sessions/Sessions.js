import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { loadSessions } from '../../redux/modules/sessions';
import Session from './Session';

@connect(
  state => ({loading: state.sessions.loading, sessions: state.sessions.sessions }),
  dispatch => (bindActionCreators(Object.assign({}, { loadSessions }), dispatch)))
export default class Sessions extends Component {
  componentDidMount() {
    this.props.loadSessions();
  }

  render() {
    let { loading, sessions } = this.props;

    if (loading) {
      return <div><h1>Loading</h1></div>;
    }

    return <div>
      <h1>Sessions</h1>
      { sessions && sessions.map(session => <Session key={"session-" + session.Id} session={session}/>)}
    </div>;
  }
}
