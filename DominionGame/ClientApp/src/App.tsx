import React from "react";
import { Switch, Route } from "react-router-dom";
import DominionRandomizer from "./components/DominionRandomizer";

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={DominionRandomizer} />
      </Switch>
    </div>
  );
};
export default App;
