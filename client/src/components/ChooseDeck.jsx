import React from 'react';
import { styles } from '../styles';

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
        return this.props.hasVoted === entry;
    }
    render() {
        return <div style={styles.container}>
                  <h3 style={styles.textStyles}>Choose 2</h3>
            <div className="voting" style={styles.buttonContainer}>
                {this.getDecks().map(entry =>
                    <button key={entry}
                        disabled={this.isDisabled()}
                        onClick={() => this.props.addToPair(entry)}
                        style={styles.chooseButtonStyle} >
                        <h1>{entry}</h1>
                        {this.hasVotedFor(entry) ? <div className="label">Chosen</div> : null}
                    </button>
                )}

            </div>
            <div className="chosen" style={styles.buttonContainer}>
                {this.getPair().map(deck =>
                    <button key={deck}
                        disabled={this.isDisabled()}
                        onClick={() => this.props.removeFromPair(deck)}
                        style={styles.chooseButtonStyle} >
                        <h1>{deck}</h1>
                    </button>
                )}
            </div>
        </div>

    }
}
