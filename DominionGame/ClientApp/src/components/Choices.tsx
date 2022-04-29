import React from "react";
import { styles } from "../styles";

export default class Choices extends React.PureComponent {
  getDecks() {
    return this.props.decks || [];
  }
  isDisabled() {
    return !!this.props.hasChosen;
  }

  render() {
    return (
      <div style={styles.container}>
        <h3 style={styles.textStyles}>Choose your decks:</h3>
        <div className="voting" style={styles.buttonContainer}>
          {this.getDecks().map(entry => (
            <button
              key={entry.name}
              disabled={this.isDisabled()}
              onClick={() => this.props.addToPair(entry)}
              style={styles.chooseButtonStyle}
            >
              <h1>{entry.name}</h1>
            </button>
          ))}
        </div>
      </div>
    );
  }
}
