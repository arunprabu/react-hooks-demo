import React from "react";
import "./App.css";

import Home from "./components/Home";
import About from "./components/About/About";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { PageContext } from "./PageContext";

function App() {

  const userStatus = {
    isLoggedIn: 'yes',
    lastLogin: '1/4/2020'
  }

  return (
    <BrowserRouter>
      <div className="container">
        <h1>React App with Hooks | Demo | learn react </h1>
        <Switch>
          <PageContext.Provider value={userStatus}>
            <Route path="/" component={Home} exact/>
            <Route path="/about" exact component={About} />
          </PageContext.Provider>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
