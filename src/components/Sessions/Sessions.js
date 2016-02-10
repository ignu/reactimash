import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { loadSessions } from '../../redux/modules/sessions';

@connect(
    state => ({loading: state.sessions.loading}),
    dispatch => (bindActionCreators(Object.assign({}, { loadSessions }), dispatch)))
export default class Sessions extends Component {
  componentDidMount() {
    this.props.loadSessions();
  }

  render() {
    if (this.props.loading) {
      return <div><h1>Loading</h1></div>;
    }

    return <div><h1>Sessions</h1></div>;
  }
}

