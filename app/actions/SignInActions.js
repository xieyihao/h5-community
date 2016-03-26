import {polyfill} from "es6-promise";
import fetch from "isomorphic-fetch";

export const USER_INFO = "SIGN_POST";
export const RECEIVE_USER_INFO = "RECEIVE_USER_INFO";

polyfill();

export function requestPosts(userInfo){
  return{
    type: USER_INFO,
    userInfo
  }
}

function receivePosts(json){
  console.log("resp:: receivePosts", json);
  return{
    type:RECEIVE_USER_INFO,
    json
  }
}
// {userName:'patChen', password:"0000"}
function makeSignRequest(data){
  return fetch("http://10.0.2.15/mockjs/2/api/testsignin", {
    method: "post",
    // headers:{
    //   "Accept": "application/json",
    //   "Content-Type": "application/json"
    // },
    body: JSON.stringify(data)
  })
}

export function fetchUserInfo(userInfo){
  return dispatch=>{
    dispatch(requestPosts(userInfo))
    return makeSignRequest({userName:'patChen', password:"0000"})
      .then( response => {
        // console.log("=====>>>", response, response.json());
        // debugger;
        return response.json()
      })
      .then(json=>{
        console.log("secount then: ===", json);
        dispatch(receivePosts(json))
      })
  }
}
