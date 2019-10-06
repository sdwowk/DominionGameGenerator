import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../action_creators";
import { styles } from "../styles";

export class Results extends React.PureComponent {
  renderGameView() {
    if (this.props.result.length == 1) {
      return (
        <div>
          <h1 style={styles.textStyles}>Game Order:</h1>
          <ul
            key="GameList"
            style={{ listStyleType: "none", columns: 2}}
          >
            {this.props.result[0].cards
              .sort((a, b) => {
                return a.cost - b.cost;
              })
              .map(card => (
                <li key={`GL-${card.title}`}>
                  <div key={card.title + "GL-2"} style={styles.resultContainer}>
                    <h2 key={card.title + "-3"} style={styles.resultText}>
                      {card.title + ` - cost: ${card.cost}`}
                    </h2>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      );
    } else {
      var cardArray = this.props.result[0].cards.concat(
        this.props.result[1].cards
      );
      return (
        <div>
          <h1 style={styles.textStyles}>Game Order:</h1>
          <ul
            key="GameList"
            style={{ listStyleType: "none", columns: 2}}
          >
            {cardArray
              .sort((a, b) => {
                return a.cost - b.cost;
              })
              .map(card => (
                <li key={`GL-${card.title}`}>
                  <div key={card.title + "-2"} style={styles.resultContainer}>
                    <h2 key={card.title + "-3"} style={styles.resultText}>
                      {card.title + ` - cost: ${card.cost}`}
                    </h2>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      );
    }
  }
  render() {
    return (
      <div>
        <h1 style={styles.textStyles}>Box Order (A-Z):</h1>
        {this.props.result.map(result => {
          return (
            <div key={result.title + "-0"}>
              <h2 key={result.title + "-1"} style={styles.textStyles}>{`${
                result.title
              }:`}</h2>
              <ul
                key={result.title + "-2"}
                style={{ listStyleType: "none", columns: 2 }}
              >
                {result.cards.map(card => (
                  <li key={card.title}>
                    <div
                      key={card.title + "-2"}
                      className="winner"
                      style={styles.resultContainer}
                    >
                      <h2 key={card.title + "-3"} style={styles.resultText}>
                        {card.title}
                      </h2>
                    </div>
                  </li>
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
