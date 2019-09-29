import React from "react";
import Winner from "./Winner";
import { connect } from "react-redux";
import * as actionCreators from "../action_creators";
import { styles } from "../styles";

export class Results extends React.PureComponent {
  renderGameView() {
      if (this.props.result.length == 1) {
        return (
            <div>
                <h1>Game Order:</h1>
                <ul key="GameList">
                    {this.props.result[0].cards.sort((a,b) => {return a.cost - b.cost}).map(card => 
                    <li key={`GL-${card.title}`}>{card.title + ` - cost: ${card.cost}`}</li>
                    )}
                </ul>
            </div>
        )
      }
      else{
          
          var cardArray = this.props.result[0].cards.concat(this.props.result[1].cards);
          return (
            <div>
            <h1>Game Order:</h1>
            <ul key="GameList">
                {cardArray.sort((a,b) => {return a.cost - b.cost}).map(card => 
                <li key={`GL-${card.title}`}>{card.title + ` - cost: ${card.cost}`}</li>
                )}
            </ul>
        </div>
          )
          
      }
  }
  render() {
    return (
      <div>
        <h1>Take From Box Order:</h1>
        {this.props.result.map(result => {
          return (
            <div key={result.title + '-0'}>
              <h1 key={result.title + '-1'}>{`${result.title}`}</h1>
              <ul key={result.title + '-2'}>
                {result.cards.map(card => (
                  <li key={card.title}>{card.title}</li>
                ))}
              </ul>
            </div>
          );
        })}
        {this.renderGameView()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    result: state.get("result")
  };
}

export const ResultsContainer = connect(
  mapStateToProps,
  actionCreators
)(Results);
