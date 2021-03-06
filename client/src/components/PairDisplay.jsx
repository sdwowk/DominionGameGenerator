import React from "react";
import { styles } from "../styles";

export default class PairDisplay extends React.PureComponent {
  render() {
    return this.props.pair.length > 0 ? (
      <div>
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
        {this.props.pair.length > 0 ? (
          <button
            style={styles.winner}
            onClick={() => {
              this.props.randomizeCards();
              window.location.assign("http://localhost:8080/#/results");
            }}
          >
            Create Dominion Game
          </button>
        ) : null}
      </div>
    ) : null;
  }
}
