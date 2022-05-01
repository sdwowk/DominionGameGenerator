import * as decks from "./DominionDecks.json"
import { Deck } from "./models";
export const getDecks = (): Deck[] =>  {
  console.log("Here");
  return decks;
}