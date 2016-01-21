import React, { Component } from 'react';
import { Link } from 'react-router';

export default class App extends Component {
  static propTypes = {
    children: React.PropTypes.object
  };

  render() {
    return (
      <div>
        <div id="nav">
          <Link to="/">Home</Link>&nbsp;
          <Link to="/sessions">Sessions</Link>
        </div>

        { this.props.children }

      </div>
    );
  }
}
