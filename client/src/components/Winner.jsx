import React from 'react';
import { styles } from '../styles';

export default class Winner extends React.PureComponent {

    render() {
        return <div className="winner" style={styles.winner}>
            <h1 style={styles.textStyles}>
                Winner is {this.props.winner}!
            </h1>
        </div>;
    }
}