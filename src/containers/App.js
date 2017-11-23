import React, { Component } from 'react';
import Component1 from '../components/Component1';
import Component2 from '../components/Component2';
import Component3 from '../components/Component3';
import { Provider, connect } from 'react-redux';

class App extends Component {
  // constructor(props, context) {
  //   super(props, context);
  //   this.state = {
  //     text: ''
  //   };
  // };
  //
  // onChildChanged(newState) {
  //   console.log(newState);
  //   this.setState({
  //     text: newState
  //   });
  // }

  render() {
    var divStyle = {
      color: 'black',
      backgroundColor:'grey',
      width: '1500px',
      display: 'inline-block'
    };
    return (
      <div style={divStyle}>
        <label> parent component: </label>
        <br/>
        <div>
          <Component1 dispatch = {this.props.dispatch}/>
        </div>
        <br/>
        <div>
          <Component2 shownText={this.props.shownText}/>
        </div>
        <br/>
        <div>
          <Component3 photos={this.props.photos}/>
        </div>
        <br/>
      </div>
    )
  }
}

// Map Redux state to component props
function mapStateToProps(state) {
  return {
    shownText: state.text,
    photos: state.photos
  }
}

export default connect(mapStateToProps)(App);
