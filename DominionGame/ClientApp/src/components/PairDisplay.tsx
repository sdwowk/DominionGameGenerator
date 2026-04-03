import { type Deck } from "../models";
import { Button, Typography } from "@mantine/core";

const PairDisplay = (props: {
  randomizeCards: () => void;
  pair: Deck[];
  removeFromPair: (deck: Deck) => void;
  setShowResults: (value: boolean) => void;
}) => {
  return props.pair.length > 0 ? (
    <div>
      <div className="chosen buttonContainer">
        {props.pair.map((deck) => (
          <Button
            key={deck.name}
            onClick={() => props.removeFromPair(deck)}
            className="buttonStyle"
          >
            <Typography>{deck.name}</Typography>
          </Button>
        ))}
      </div>
      {props.pair.length > 0 ? (
        <div className="chosen buttonContainer">
          <Button
            className="winner"
            onClick={() => {
              props.randomizeCards();
              props.setShowResults(true);
            }}
          >
            Create Dominion Game
          </Button>
        </div>
      ) : null}
    </div>
  ) : null;
};
export default PairDisplay;
