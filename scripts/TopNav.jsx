import React from 'react';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

let TopNav = React.createClass({
  render() {
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">Project name</a>
          </div>
          <div id="navbar" className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li className="active">
                <Link to="app">Home</Link>
              </li>
              <li>
                <Link to="settings">Settings</Link>
              </li>
              <li>
                <Link to="controls">Controls</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
});

export default TopNav;