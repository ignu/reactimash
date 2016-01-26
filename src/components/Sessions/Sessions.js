import React, {Component} from 'react';
import { connect } from 'react-redux';

class Sessions extends Component {
  render() {
    if (this.props.loading) {
      return <div><h1>Loading</h1></div>;
    }

    return <div><h1>Sessions</h1></div>;
  }
}

let mapStateToProps = (state) => {
  return { loading: state.sessions.loading };
};

export default connect(mapStateToProps)(Sessions);
