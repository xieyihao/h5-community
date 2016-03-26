/* eslint-disable no-console, no-use-before-define */

import path from 'path'
import Express from 'express'
import qs from 'qs'


import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import {match, RouterContext, createMemoryHistory} from "react-router";

// import configureStore from '../app/store/configureStore'
// import App from '../app/containers/App'
// import { fetchCounter } from '../app/api/counter'
import routes from "../app/routes";
import configureStore from "../app/store/configureStore";

const app = new Express()
const port = 80


import webpackConfig from '../webpack/webpack.config';

 import webpack from 'webpack';
 import webpackDevMiddleware from 'webpack-dev-middleware';
 import webpackHotMiddleware from 'webpack-hot-middleware';
 // Use this middleware to set up hot module reloading via webpack.
 const compiler = webpack(webpackConfig)
 app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath }))
 app.use(webpackHotMiddleware(compiler))
const assetsPath = "";
 // const assetsPath = webpackConfig.output.publicPath;
 app.use(Express.static(path.join(__dirname, "../build")));

//// const assetsPath = "http://localhost:3081/assets";
//app.use(Express.static(path.join(__dirname, "..", webpackConfig.output.publicPath)));


// This is fired every time the server side receives a request
app.use(handleRender)

function handleRender(req, res) {
  const history = createMemoryHistory();
  const store = configureStore({
    indexHeader:{title:"personer bolg"},
    user:{userId: 10}
  }, history);
  match({routes, location: req.url}, (error, redirectLocation, renderProps)=>{
    if(error){
      res.status(500).send(error.message);
    }else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    }else if (renderProps) {
      // const jj = {...renderProps}
      // console.log("--->>>7777777777",  jj);
      let html = renderToString(
        <Provider store={store} key="provider">
          <RouterContext {...renderProps} />
        </Provider>
      )
      html = renderFullPage(html);
      // console.log("888888888", html);
      // res.status(200).send(renderFullPage(html));
      res.status(200).send(html);
    }else {
      res.status(404).send("Server render was Not Found");
    }
  })




  // // Query our mock API asynchronously
  // fetchCounter(apiResult => {
  //   // Read the counter from the request, if provided
  //   const params = qs.parse(req.query)
  //   const counter = parseInt(params.counter, 10) || apiResult || 0
  //
  //   // Compile an initial state
  //   const initialState = { counter }
  //
  //   // Create a new Redux store instance
  //   const store = configureStore(initialState)
  //
  //   // Render the component to a string
  //   const html = renderToString(
  //     <Provider store={store}>
  //       <App />
  //     </Provider>
  //   )
  //
  //   // Grab the initial state from our Redux store
  //   const finalState = store.getState()
  //
  //   // Send the rendered page back to the client
  //   res.send(renderFullPage(html, finalState))
  // })
}

function renderFullPage(html, initialState) {
  return `
  <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <!-- here helmet will do stuff for you -->
        <link rel="shortcut icon" href="/favicon.ico">
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no, minimal-ui, maximum-scale=1.0, minimum-scale=1.0">
        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="apple-mobile-web-app-status-bar-style" content="black">
        <meta name="format-detection" content="telephone=no"/>
        <link type="text/css" rel="stylesheet" href="${assetsPath}/css/styles.css"></link>
        <!-- <script src="http://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js"></script> -->
        <script src="http://apps.bdimg.com/libs/zepto/1.1.4/zepto.min.js"></script>


        <script> var _hmt = _hmt || []; (function() { var hm = document.createElement("script"); hm.src = "//hm.baidu.com/hm.js?a32dceb065ddbc2428073d0663b310c3"; var s = document.getElementsByTagName("script")[0]; s.parentNode.insertBefore(hm, s); })(); </script>
      </head>
      <body>
        <div id="app" class="">${html}</div>

        <script src="${assetsPath}/lib.js"></script>
        <script src="${assetsPath}/app.js"></script>
        <script type="text/javascript">
        </script>
      </body>
    </html>

  `;
}

app.listen(port, (error) => {
  if (error) {
    console.error(error)
  } else {
    console.info(`==> 🌎  Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`)
  }
})
