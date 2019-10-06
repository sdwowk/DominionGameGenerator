import React from "react";
import { styles } from "../styles";

export default class Card extends React.Component {
  render() {
    return (
      <div
        key={this.props.title + "-2"}
        style={styles.winner}
      >
        <h1 key={this.props.title + "-3"} style={styles.textStyles}>
          {this.props.title}
        </h1>
      </div>
    );
  }
}
