import React from "react";
import {
  Route, IndexRoute
}
from "react-router";

import Application from "./containers/Application";
import Index from "./containers/index";
import SignIn from "./containers/SignIn";
import ProjectList from "./containers/ProjectList";
import AddProject from "./containers/AddProject";

import Token from "./containers/Token";

export default ( < Route component = {
    Application
  }
  path = "/" >
  < IndexRoute component = {
    Index
  }
  /> < Route component = {
    Index
  }
  path = "index" / >
  < Route component = {
    SignIn
  }
  path = "signin" / >
  < Route component = {
    ProjectList
  }
  path = "projectlist" / >
  < Route component = {
    AddProject
  }
  path = "addproject" / >

  < Route component = {
    Token
  }
  path = "token" / >
  < /Route>
)
