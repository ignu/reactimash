import React from 'react';
import {Route} from 'react-router';
import App from './containers/App/App';
import { Sessions } from './components';

export default () => {
  return (
    <Route path="/" component={App} >
      <Route path="/sessions" component={Sessions}/>
    </Route>
  );
};
