import React from 'react';
import Winner from './Winner';
import {connect} from 'react-redux';
import * as actionCreators from '../action_creators';
import { styles } from '../styles';
import ChooseDeck from './ChooseDeck';

export class DominionRandomizer extends React.PureComponent{
  render() {
    return <div style={styles.container}>
      <h1 style={styles.textStyles}>Dominion Game Creator</h1>
      {this.props.showCards ?
        <Winner ref="winner" winner={this.props.winner} /> :
        <ChooseDeck {...this.props} />}
    </div>;
  }
}

function mapStateToProps(state){
    return {
        decks: state.get('decks'),
        pair: state.get('pair'),
        hasChosen: state.get('hasChosen'),
        winner: state.get('winner')
    };
}


export const DominionContainer = connect(mapStateToProps, actionCreators)(DominionRandomizer);