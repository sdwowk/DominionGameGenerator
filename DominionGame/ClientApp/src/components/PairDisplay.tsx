import React from "react";
import { Deck } from "../models";
import { Button, makeStyles, Theme, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  buttonContainer: {
    margin: "auto",
    display: "flex",
    FlexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  buttonStyle: {
    borderRadius: 5,
    borderColor: "transparent",
    backgroundColor: "#27AE60",
    width: 250,
    height: 125,
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Arial",
    marginLeft: 5,
    marginRight: 5,
    color: "#FFF",
  },
  winner: {
    backgroundColor: "#cfa855",
    borderColor: "transparent",
    margin: "auto",
    display: "flex",
    justifyContent: "center",
    borderRadius: 5,
    marginTop: 50,
    width: 310,
    height: 150,
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Arial",
    color: "#FFF",
    textAlign: "center",
  },
}));

const PairDisplay = (props: {
  randomizeCards: () => void;
  pair: Deck[];
  removeFromPair: (deck: Deck) => void;
  setShowResults: (value: boolean) => void;
}) => {
  const styles = useStyles();
  return props.pair.length > 0 ? (
    <div>
      <div className={`chosen ${styles.buttonContainer}`}>
        {props.pair.map((deck) => (
          <Button
            key={deck.name}
            onClick={() => props.removeFromPair(deck)}
            className={styles.buttonStyle}
          >
            <Typography>{deck.name}</Typography>
          </Button>
        ))}
      </div>
      {props.pair.length > 0 ? (
        <Button
          className={styles.winner}
          onClick={() => {
            props.randomizeCards();
            props.setShowResults(true);
          }}
        >
          Create Dominion Game
        </Button>
      ) : null}
    </div>
  ) : null;
};
export default PairDisplay;
