import React from "react";
import { styles } from "../styles";

export class ResultCard extends React.Component {
  render() {
    return (
      <li>
        <div
          key={this.props.name + "-2"}
          className="winner"
          style={styles.resultContainer}
        >
          <h2 key={this.props.name + "-3"} style={styles.resultText}>
            {this.props.name}
          </h2>
        </div>
      </li>
    );
  }
}
