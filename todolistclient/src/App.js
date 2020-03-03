import React, { useState } from "react";
import "./app.css";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from "react-router-dom";

import ArticleList from "./components/articles/ArticleList";
import ArticleInfo from "./components/articles/ArticleInfo";
import ArticleAdd from "./components/articles/ArticleAdd";
import ArticleEdit from "./components/articles/ArticleEdit";
import Forecast from "./components/Forecast/Forecast";

function App() {
  return (
    <div className="App ">
      <div className="header d-flex flex-row justify-content-center">
        <h1 className="display-1">Welcome</h1>
      </div>

      <div className="d-flex flex-row flex-wrap justify-content-center main-container">
        <div className="todo-list-container">
          <div className="App bg-light card">
            <Router>
              <div className="container todo-list-main-container">
                <Navigation />
                <div className="main-container">
                  <Main />
                </div>
              </div>
            </Router>
          </div>
        </div>
        <div className="weather-container">
          <Forecast />
        </div>
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <nav className="card bg-dark mb-4">
      <div className="container">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink
              exact
              className="nav-link"
              activeClassName="active"
              to="/articles"
            >
              <div className="bg-dark todo-header">
                <h2>Todo List</h2>
              </div>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

function Main() {
  return (
    <Switch>
      <Route exact path="/articles" component={ArticleList} />
      <Route exact path="/articles/new" component={ArticleAdd} />
      <Route exact path="/articles/:_id" component={ArticleInfo} />
      <Route exact path="/articles/:_id/edit" component={ArticleEdit} />
    </Switch>
  );
}

export default App;
