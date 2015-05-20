import React from 'react';
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler, State } from 'react-router';

import TopNav from  './TopNav.jsx';
import HomePage from './components/Home.jsx';
import SettingsPage from './components/Settings.jsx';
import ControlsPage from './components/Controls.jsx';

import user from './userData.js';

if (typeof window !== 'undefined') {
  window.React = React;
}

console.log(user);
let App = React.createClass({
  render() {
    return (
      <div>

        <TopNav/>

        {/* this is the importTant part */}
        <div className="container">
          <RouteHandler/>
        </div>

      </div>
    );
  }
});

let routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="settings" path="/settings" handler={SettingsPage} data={user}/>
    <Route name="controls" path="/controls" handler={ControlsPage}/>
    <DefaultRoute handler={HomePage}/>
  </Route>
);

function fetchData(routes, params) {
  return Promise.resolve(user);
}

Router.run(routes, function (Handler, state) {
  console.log('Router State:', state);

  fetchData(state.routes, state.params).then((data) => {
    console.info('Promose Data: ', data);
    React.render(<Handler data={data}/>, document.getElementById('root'));
  });
});
