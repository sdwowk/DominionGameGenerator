import React from "react";
import { Route } from "react-router";
import { DominionContainer } from "./components/DominionRandomizer";
import { ResultsContainer } from "./components/Results";

export default class extends React.Component {
  render() {
    return (
      <div>
        <Route path="/" component={DominionContainer} />
        <Route path="/results" component={ResultsContainer} />
      </div>
    );
  }
}
