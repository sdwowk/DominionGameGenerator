import React from "react";
import { styles } from "../styles";

export default class PairDisplay extends React.PureComponent {
  render() {
    return (
      <div className="chosen" style={styles.buttonContainer}>
        {this.props.pair.map(deck => (
          <button
            key={deck.name}
            onClick={() => this.props.removeFromPair(deck)}
            style={styles.buttonStyle}
          >
            <h1>{deck.name}</h1>
          </button>
        ))}
      </div>
    );
  }
}
