import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
// import $ from "zepto-modules"
// import sm from "../utils/scroller"

import BackHeader from "../components/BackHeader";
import MediaList from "../components/MediaList";



const style={
  display: "block"
}

class PropjectList extends Component{
  constructor(props){
    super(props);
  }

  componentWillMount(){
    console.log("99999");
  }

  // 在初始化渲染执行之后立刻调用一次，仅客户端有效（服务器端不会调用）。
  // 在生命周期中的这个时间点，组件拥有一个 DOM 展现，你可以通过 this.getDOMNode() 来获取相应 DOM 节点。
  componentDidMount(){
    // $(".content").scroller();
    // console.log("sm:", sm);
    // const scroll = sm($);
    // // scroll(type:"js")
    // $(".content").scroller({
    //     type: 'native'
    // });
    // console.log("00000=====<<<", $.fn.scroller);
  }

  render(){
    console.log("projectList render:", this.props.children);
    return(
      <div className="page" style={style}>
        <BackHeader title="project list" />
        <div className="content">
          <MediaList />
        </div>
      </div>
    )
  }

}

function mapStateToProps(state){
  return{
    projectList: state.list
  }
}

export default connect(mapStateToProps)(PropjectList)
