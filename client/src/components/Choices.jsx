import React from "react";
import { styles } from "../styles";

export default class Choices extends React.PureComponent {
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
    return this.props.pair.includes(entry);
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
              onClick={() => this.props.addToPair(entry)}
              style={styles.chooseButtonStyle}
            >
              <h1>{entry.name}</h1>
              {this.hasVotedFor(entry) ? (
                <div className="label">Chosen</div>
              ) : null}
            </button>
          ))}
        </div>
      </div>
    );
  }
}
