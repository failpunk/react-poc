import React from 'react';
var State = require('react-router').State;

let Settings = React.createClass({

  mixins: [ State ],

  //statics: {
  //  fetchData (params) {
  //    console.log('Settings fetchData');
  //  }
  //},

  render() {
    console.log('Settings props:',this.props);
    console.log('Settings state:',this.state);
    return(
      <div className="starter-template">
        <h1>Account Settings</h1>
        <h3>Manage your personal information, billing details and connected accounts.</h3>

        <div className="row">
          <div className="col-md-6">
            <h6 className="text-uppercase">username</h6>
            <p>{this.props.user || 'fail'}</p>
          </div>
          <div className="col-md-6">sadf</div>
        </div>

      </div>
    );
  }
});

export default Settings;  