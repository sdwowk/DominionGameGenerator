export interface Card {
  title: string;
  cost: number;
}
export interface Deck {
  name: string;
  cards: Card[];
  events?: Card[];
  landmarks?: string[];
}
