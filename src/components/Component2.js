import React, {Component} from 'react';

export default class Component2 extends Component {

  render() {
    var text = this.props.shownText;
    var divStyle = {
      backgroundColor:'yellow',
      width: '1500px',
    };
    return (
      <div style={divStyle}>
        <label> child component2: </label>{text}
      </div>
    )
  }
}
