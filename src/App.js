import React from "react";
// import { Switch, Route, Link } from "react-router-dom";
 import { Layout, Typography, Space, Switch } from "antd";

import  {Navbar, Homepage, CryotoDetails, Cryptocurrenies, Exchanges, News }  from "./components";

import './css/App.css'
import { Route } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
      <Layout>
        <div className="routes">
        <Switch>
          
          <Route exact path="/">
            <Homepage/>
          </Route>

          <Route exact path="/exchanges">
            <Exchanges/>
          </Route>

          <Route exact path="/cryptocurreccies">
            <Cryptocurrenies/>
          </Route>

          <Route exact path="/news">
            <News/>
          </Route>

          <Route exact path="/crypto/:coinId">
            <CryotoDetails/>
          </Route>
        </Switch>
        </div>
      </Layout>
      </div>

      <div className="footer" level= {5}>
        CryptoVista <br/>
        All rights reserved.
      </div>
    </div>
  );
};

export default App;
