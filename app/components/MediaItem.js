import React, {Component, PropTypes} from "react";
import {Link} from "react-router";

const styleImg = {
  width: "4rem"
}

export default class MediaItem extends Component{

  render(){
    const {goto} = this.props
    console.log("mediaItem props:", goto);
    return(
      <li>
        <Link to={goto} className="item-link item-content">
          <div className="item-media">
            <img style={styleImg} src="http://gqianniu.alicdn.com/bao/uploaded/i4//tfscom/i3/TB10LfcHFXXXXXKXpXXXXXXXXXX_!!0-item_pic.jpg_250x250q60.jpg" />
          </div>
          <div className="item-inner">
            <div className="item-title-row">
              <div className="item-title">标题</div>
              <div className="item-after">$15</div>
            </div>
            <div className="item-text">此处是文本内容...</div>
          </div>
        </Link>
      </li>
    )
  }
}

MediaItem.proptypes = {
  goto: PropTypes.string.isRequired
}
