import { type Deck } from "../models";

const Choices = (props: {
  decks: Deck[];
  hasChosen: boolean;
  addToPair: (entry: Deck) => void;
}) => {
  function getDecks() {
    return props.decks || [];
  }
  function isDisabled() {
    return props.hasChosen;
  }

  return (
    <div className="container">
      <h3 className="textStyles">Choose your decks:</h3>
      <div className="buttonContainer">
        {getDecks().map((entry) => (
          <button
            key={entry.name}
            disabled={isDisabled()}
            onClick={() => props.addToPair(entry)}
            className="chooseButtonStyle"
          >
            <h1>{entry.name}</h1>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Choices;
