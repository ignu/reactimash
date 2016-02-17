import React, {Component} from 'react';

export default class Session extends Component {
  static propTypes = {
    session: React.PropTypes.object
  };

  render() {
    let session = this.props.session;

    return <div key={ "session=" + session.Id }>
      <h3>{session.Title}</h3>
      <div className="body">
        {session.Abstract}
      </div>
    </div>
  }
}
