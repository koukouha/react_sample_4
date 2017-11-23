import React, {Component} from 'react';
import ReactDom from 'react-dom';
import { Provider, connect } from 'react-redux';
import callAPI from '../api/callAPI';

class Component1 extends Component {

  render() {
    const { onUpdateKeyDown } = this.props
    var divStyle = {
      backgroundColor:'green',
      width: '1500px',
    };
    return (
      <div style={divStyle}>
        <label> child component1: </label>
        <input onKeyDown={onUpdateKeyDown} type="text" ref="inputbox" size="200"/>
      </div>
    )
  }
};

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    onUpdateKeyDown: (event) => {
      if (event.which === 13) {
        // dispatch({
        //   type: 'update',
        //   text: event.target.value
        // })
        dispatch({
          type: 'waitting',
        });
        callAPI(event.target.value, (data) => {
          console.log(data);
          dispatch({
            type: 'update',
            text: "Images have be loaded here ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓",//JSON.stringify(data),
            photos: data.photos
          })
        })
      }
    }
  }
}

export default connect(null, mapDispatchToProps)(Component1);
