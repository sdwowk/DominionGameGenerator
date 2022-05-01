import * as decks from "./DominionDecks.json";
import { Deck } from "./models";
export const getDecks = (): Deck[] => {
  return decks;
};
