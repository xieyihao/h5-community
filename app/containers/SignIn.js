import React, {Component, PropTypes} from "react"
import {connect} from "react-redux";

import BackHeader from "../components/BackHeader"
import {fetchUserInfo} from "../actions/SignInActions"

const style = {
  display: "block"
}

class SignIn extends Component{

  constructor(props){
    super(props);
    console.log("=++++", this.props);
    // console.log("9999", dispatch);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  nameChange(e){
    let target = e.target
  }
  passwordChange(e){

  }

  handleSubmit(){
    const {dispatch} = this.props;
    let data = {
      userName: "patchen",
      password: "0000"
    }
    console.log('clicksubmit',data, dispatch);
    dispatch(fetchUserInfo(data));
    // fetchUserInfo(data)(function(resp){debugger; console.log("------>>>>>!!111",resp);});
    // $.ajax({
    //   data:data,
    //   type: "post",
    //   url: "api/signin",
    //   error: function(rep){
    //     alert("ajax error\n"+JSON.stringify(rep));
    //   },
    //   success: function(rep){
    //     console.log('000 success: ---', rep);
    //     if(rep.isOk){
    //       window.history.back();
    //     }
    //   }
    // })
  }

  cancel(e){
    window.history.back()
  }

  componentDidUpdate(prevProps,prevState){
    // super(prevProps, prevState);
    console.log("========", prevProps, prevState);
  }

  render(){
    console.log("sign in render: ", this.props);
    const {user} = this.props;
    return(
      <div className="page" style={style}>
        <BackHeader title="sign in" />
        <div className="content">
          <div className="list-block">
            <ul>
              <li>
                <div className="item-content">
                  <div className="item-media"><i className="icon icon-form-name"></i></div>
                  <div className="item-inner">
                    <div className="item-title label">
                      姓名
                    </div>
                    <div className="item-input">
                      <input value={this.props.user.userId} type="text" placeholder="Your name" onChange={this.nameChange} />
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="item-content">
                  <div className="item-media"><i className="icon icon-form-password"></i></div>
                  <div className="item-inner">
                    <div className="item-title label">密码</div>
                    <div className="item-input">
                      <input value="{user.userId}" type="password" placeholder="Password" className="" onChange={this.passwordChange} />
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="content-block">
            <div className="row">
              <div className="col-50"><a href="javascript:;" onClick={this.cancel} className="button button-big button-fill button-danger">取消</a></div>
              <div className="col-50"><a href="javascript:;" onClick={this.handleSubmit} className="button button-big button-fill button-success">提交</a></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

SignIn.propTypes = {
  user: PropTypes.object,
  dispatch: PropTypes.func
}

function mapStateToProps(state){
  return {
    user: state.user
  };
}

export default connect(mapStateToProps)(SignIn)
