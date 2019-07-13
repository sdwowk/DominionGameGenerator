import React from "react";
import { styles } from "../styles";

export default class ChooseDeck extends React.PureComponent {
  getDecks() {
    return this.props.decks || [];
  }
  getPair() {
    return this.props.pair || [];
  }
  isDisabled() {
    return !!this.props.hasChosen;
  }
  hasVotedFor(entry) {
    return this.props.pair.includes(entry.name);
  }
  render() {
    return (
      <div style={styles.container}>
        <h3 style={styles.textStyles}>Choose 2</h3>
        <div className="voting" style={styles.buttonContainer}>
          {this.getDecks().map(entry => (
            <button
              key={entry.name}
              disabled={this.isDisabled()}
              onClick={() => this.props.addToPair(entry.name)}
              style={styles.chooseButtonStyle}
            >
              <h1>{entry.name}</h1>
              {this.hasVotedFor(entry) ? (
                <div className="label">Chosen</div>
              ) : null}
            </button>
          ))}
        </div>
        <div className="chosen" style={styles.buttonContainer}>
          {this.getPair().map(deck => (
            <button
              key={deck.name}
              disabled={this.isDisabled()}
              onClick={() => this.props.removeFromPair(deck.name)}
              style={styles.chooseButtonStyle}
            >
              <h1>{deck.name}</h1>
            </button>
          ))}
        </div>
      </div>
    );
  }
}
