import  React from "react";
import {render} from 'react-dom';
import {Router} from 'react-router';
import {Provider} from "react-redux";
import createBrowserHistory from 'history/lib/createBrowserHistory';

import routes from './routes';
import configureStore from "./store/configureStore";

import "../assets/sm/css/sm.css";
import "../assets/base.style.css"
import "../assets/react.route.transition.css"

const store = configureStore({
  indexHeader:{title:"personer bolg"},
  user:{userId: 10}
});
const dd = store.getState();
console.log("ddd", dd);
const history = createBrowserHistory();
if(typeof document !== 'undefined' && window) {
  window.onload = ()=>{
    render(
      <Provider store={store}>
        <Router history={history} routes={routes} />
      </Provider>,
      document.getElementById("app")
    )
    window.history = history;
  }
}
