import { makeStyles, Theme } from "@material-ui/core";
import React from "react";
import { Deck } from "../models";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#2D9CDB",
    marginTop: 75,
  },
  textStyles: {
    margin: "auto",
    display: "flex",
    msflexDirection: "column",
    color: "#FFF",
    fontFamily: "Arial",
  },
  chooseButtonStyle: {
    borderRadius: 5,
    borderColor: "transparent",
    backgroundColor: "#56CCF2",
    width: 175,
    color: "#FFF",
    height: 125,
    marginLeft: 5,
    marginRight: 5,
    textAlign: "center",
  },
  buttonContainer: {
    margin: "auto",
    display: "flex",
    FlexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
}));

const Choices = (props: {
  decks: Deck[];
  hasChosen: boolean;
  addToPair: (entry: Deck) => void;
}) => {
  const styles = useStyles();
  function getDecks() {
    return props.decks || [];
  }
  function isDisabled() {
    return props.hasChosen;
  }

  return (
    <div className={styles.container}>
      <h3 className={styles.textStyles}>Choose your decks:</h3>
      <div className={`voting ${styles.buttonContainer}`}>
        {getDecks().map((entry) => (
          <button
            key={entry.name}
            disabled={isDisabled()}
            onClick={() => props.addToPair(entry)}
            className={styles.chooseButtonStyle}
          >
            <h1>{entry.name}</h1>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Choices;
