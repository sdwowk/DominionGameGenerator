import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../action_creators";
import { styles } from "../styles";
import Choices from "./Choices";
import PairDisplay from "./PairDisplay";

export class DominionRandomizer extends React.PureComponent {
  render() {
    return (
      <div style={styles.container}>
        <h1 style={styles.textStyles}>Dominion Game Creator</h1>
        <Choices {...this.props} />
        {this.props.pair.length > 0 ? <PairDisplay {...this.props} /> : null}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    decks: state.get("decks"),
    pair: state.get("pair"),
    hasChosen: state.get("hasChosen"),
    winner: state.get("winner")
  };
}

export const DominionContainer = connect(
  mapStateToProps,
  actionCreators
)(DominionRandomizer);
