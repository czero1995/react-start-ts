import "antd-mobile/dist/antd-mobile.css";
import ErrorBoundary from "component/ErrorBoundary";
import Me from "page/Me";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.scss";
import Detail from "./page/Detail";
import Home from "./page/Home";
import Hot from "./page/Hot";
import Recommend from "./page/Recommend";
function App() {
  const Spin = () => {
    return <div>1</div>;
  };
  return (
    <div className="App">
      <ErrorBoundary>
        <BrowserRouter>
          <Switch>
            <Route path="/detail/:uid">
              <Detail />
            </Route>
            <Route path="/hot">
              <Hot />
            </Route>
            <Route path="/recommend">
              <Recommend />
            </Route>
            <Route path="/me">
              <Me />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </BrowserRouter>
      </ErrorBoundary>
    </div>
  );
}

export default App;
