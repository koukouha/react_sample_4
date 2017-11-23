import React, { Component, PropTypes } from 'react';

export default class Component3 extends Component {

  static propTypes = {
    photos: PropTypes.array,
  };

  render() {
    var text = this.props.shownText;
    var divStyle = {
      backgroundColor:'blue',
      width: '1500px',
    };
    return (
      <div style={divStyle}>
        <label> child component3: </label>
        <br/>
        <div className="row">
          {
              this.props.photos.map((item) => {
                return (
                    <img src={item.image_url} />
                );
              })
          }
          <div className="clearfix" />
        </div>
      </div>
    )
  }
}
