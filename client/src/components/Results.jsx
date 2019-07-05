import React from 'react';
import Winner from './Winner';
import { connect } from 'react-redux';
import * as actionCreators from '../action_creators';
import { styles } from '../styles'


export class Results extends React.PureComponent {
    getPair() {
        return this.props.pair || [];
    }

    getVotes(entry) {
        if (this.props.tally && this.props.tally.hasOwnProperty(entry)) {
            return this.props.tally[entry];
        }
        return 0;
    }

    render() {
        return this.props.winner ?
            <Winner ref="winner" winner={this.props.winner} /> :
            <div className="results" style={styles.container}>
                <div className="tally" style={styles.container}>
                    {this.getPair().map(entry =>
                        <div key={entry} className="entry" style={styles.resultDivStyles}>
                            <h1 style={styles.textStyles}>{entry}</h1>
                            <h1 style={styles.textStyles}>{this.getVotes(entry)}</h1>
                        </div>)}
                    <button ref="next" className="next" onClick={this.props.next} style={styles.buttonStyle}>
                        Next
                </button>
                </div>
            </div>;
    }
};

function mapStateToProps(state) {
    return {
        pair: state.getIn(['vote', 'pair']),
        tally: state.getIn(['vote', 'tally']),
        winner: state.get('winner')
    }
}

export const ResultsContainer = connect(mapStateToProps, actionCreators)(Results);
