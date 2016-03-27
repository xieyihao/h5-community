import React, {Component} from "react";
import {Link} from "react-router";
import {connect} from "react-redux";
import sha1 from "sha-1";

import BackHeader from "../components/BackHeader";

const style = {
    display: "block"
};


class Token extends Component {
  constructor(props){
    super(props);
    let {
        timestamp ,
        nonce     ,
        signature
      } = this.props.location.query;
    let token     = "weixin";
    let array = [timestamp,nonce,token].sort();
    let tempstr = array.join("");
    tempstr = sha1(tempstr);
    if(tempstr == signature){
      console.success("the same");
    }else{
      console.log("different");
    }
    // debugger;
  }

  // 在初始化渲染执行之后立刻调用一次，仅客户端有效（服务器端不会调用）。
  // 在生命周期中的这个时间点，组件拥有一个 DOM 展现，你可以通过 this.getDOMNode() 来获取相应 DOM 节点。
  componentDidMount(){

  }


  render() {
    console.log("Token render:", this.props);
    return (
      < div className="page" style={style}>
        < BackHeader title="Application title" / >
        < div className="content">
          <div>好久欧锦赛的</div>
        </div >
      </div>
    );
  }
}

function mapStateToProps(state) {
    return {
    header: state.TokenHeader
    }
}

export default connect(mapStateToProps)(Token)
