import React, { useState } from "react";
import { Card, Deck } from "../models";
import Choices from "./Choices";
import PairDisplay from "./PairDisplay";
import { Container, Typography, Theme, makeStyles } from "@material-ui/core";
import fileDecks from "../DominionDecks.json";
import Results from "./Results";

export const dominionDecks = fileDecks;

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
}));

const DominionRandomizer = () => {
  const styles = useStyles();
  const [decks, setDecks] = useState<Deck[]>(dominionDecks);
  const [hasChosen, setChosen] = useState<boolean>(false);
  const [chosenPair, setChosenPair] = useState<Deck[]>([]);
  const [results, setResults] = useState<Deck[]>([]);
  const [showResults, setShowResults] = useState<boolean>(false);

  const removeFromPair = (deck: Deck) => {
    var removeFromPair = [...chosenPair];
    var addToList = [...decks];

    removeFromPair.splice(removeFromPair.indexOf(deck), 1);
    addToList.push(deck);
    setChosenPair(removeFromPair);
    setDecks(addToList);
  };
  const addToPair = (deck: Deck) => {
    const currentPair = [...chosenPair];
    var removeFromList = [...decks];
    if (currentPair && currentPair.length < 2) {
      currentPair.push(deck);
      removeFromList = removeFromList.filter((item) => item !== deck);
    } else if (!currentPair) {
      removeFromList.splice(removeFromList.indexOf(deck), 1);
    }
    setChosenPair(currentPair);
    setDecks(removeFromList);
  };
  const randomizeCards = () => {
    let chosenDecks = [...chosenPair];
    var result = [];
    const emptyCardArr: Card[] = [];
    if (chosenDecks.length === 1) {
      result.push({ name: "", cards: emptyCardArr });
      var cardArray = chosenDecks[0].cards;
      result[0].name = chosenDecks[0].name;
      var choice = Math.floor(Math.random() * (cardArray.length - 1));
      for (var i = 0; i < 10; i++) {
        result[0].cards.push(cardArray[choice]);
        cardArray.splice(choice, 1);
        choice = Math.floor(Math.random() * (cardArray.length - 1));
      }
    } else {
      result.push({ name: "", cards: emptyCardArr });
      result.push({ name: "", cards: emptyCardArr });
      var cardArray1 = chosenDecks[0].cards;
      result[0].name = chosenDecks[0].name;
      var cardArray2 = chosenDecks[1].cards;
      result[1].name = chosenDecks[1].name;
      var choice = Math.floor(Math.random() * (cardArray1.length - 1));
      for (var i = 0; i < 5; i++) {
        result[0].cards.push(cardArray1[choice]);
        cardArray1.splice(choice, 1);
        choice = Math.floor(Math.random() * (cardArray2.length - 1));
        result[1].cards.push(cardArray2[choice]);
        cardArray2.splice(choice, 1);
        choice = Math.floor(Math.random() * (cardArray1.length - 1));
      }
    }
    //Sort the cards alphabetically
    result.forEach((deck) =>
      deck.cards.sort((a, b) => {
        return a.title > b.title ? 1 : -1;
      })
    );

    setResults(result);
  };

  return (
    <Container className={styles.container}>
      {!showResults && (
        <>
          <Typography variant="h1" className={styles.textStyles}>
            Dominion Game Creator
          </Typography>
          <Choices addToPair={addToPair} decks={decks} hasChosen={hasChosen} />
          {chosenPair.length > 0 ? (
            <PairDisplay
              pair={chosenPair}
              setShowResults={setShowResults}
              randomizeCards={randomizeCards}
              removeFromPair={removeFromPair}
            />
          ) : null}
        </>
      )}
      {showResults && (
        <>
          <Results result={results} />
        </>
      )}
    </Container>
  );
};

export default DominionRandomizer;
