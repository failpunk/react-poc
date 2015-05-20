import React from 'react';
var State = require('react-router').State;

let items = [
  {heading: '1 Month', desc: 'Your account will reactivate on 06/19/2015. Your new expiration date will be 09/19/2015.', value: 1},
  {heading: '2 Months', desc: 'Your account will reactivate on 06/19/2015. Your new expiration date will be 09/19/2015.', value: 2},
  {heading: '3 Months', desc: 'Your account will reactivate on 06/19/2015. Your new expiration date will be 09/19/2015.', value: 3},
  {heading: '4 Months', desc: 'Your account will reactivate on 06/19/2015. Your new expiration date will be 09/19/2015.', value: 4}
];

let Controls = React.createClass({

  render() {
    return(
      <div classNameName="starter-template">
        <h1>React Controls</h1>

        <h3>Make a selection...</h3>

        <StyledList items={items}></StyledList>

      </div>
    );
  }
});

let StyledList = React.createClass({

  getInitialState: function() {
    return {
      selected: 1
    }
  },

  setSelected(id) {
    this.setState({selected: id});
  },

  render() {
    var listItems = this.props.items.map(function(item) {
      return (
        // `key` is a React-specific concept and is not mandatory for the
        // purpose of this tutorial. if you're curious, see more here:
        // http://facebook.github.io/react/docs/multiple-components.html#dynamic-children
        <StyledItem item={item} onSelect={this.setSelected} isActive={this.state.selected == item.value}></StyledItem>
      );
    }, this);
    return (
      <ul className="styled-radio-area">
          {listItems}
      </ul>
    )
  }

});

let StyledItem = React.createClass({
  render() {
    var classes = (this.props.isActive ? 'active' : '') + ' radio-item';

    return (
      <li className="{classes}">    // todo: not rendering classes
        <div className="radio">
          <label>
            <input className="radio"
                   type="radio"
                   name="pauseLength"
                   value="{this.props.item.value}"
                   onChange={this.onChange}/>
            <h5>{this.props.item.heading}</h5>
            <p>{this.props.item.desc}</p>
          </label>
        </div>
      </li>
    );
  },

  onChange(event) {
    return this.props.onSelect(this.props.item.value);
  }
});

export default Controls;
