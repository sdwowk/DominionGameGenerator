import { List, Map } from "immutable";

function setState(state, newState) {
  return state.merge(newState);
}

function addToPair(state, entry) {
  const currentPair = state.get("pair");
  var removeFromList = state.get("decks");
  if (currentPair && currentPair.length < 2) {
    currentPair.push(entry);
    removeFromList = removeFromList.filter(item => item !== entry);
    return state.merge({
      decks: removeFromList,
      pair: currentPair
    });
  } else if (!currentPair) {
    removeFromList.splice(removeFromList.indexOf(entry), 1);
    return state.merge({
      decks: removeFromList,
      pair: [entry]
    });
  }
  return state;
}

function removeFromPair(state, entry) {
  var removeFromPair = state.get("pair");
  var addToList = state.get("decks");
  
  removeFromPair.splice(removeFromPair.indexOf(entry), 1);
  addToList.push(entry);
  return state.merge({
    pair: removeFromPair,
    decks: addToList
  });
}

function getDecks(state) {
  const decks = require("./DominionDecks.json");
  state = state.set("pair", []);
  return state.set("decks", decks);
}

function randomizeCards(state) {
  var chosenDecks = state.get("pair");
  var result = [];
  if (chosenDecks.length == 1) {
    result.push({ title: "", cards: [] });
    var cardArray = chosenDecks[0].cards;
    result[0].title = chosenDecks[0].name;
    var choice = Math.floor(Math.random() * (cardArray.length - 1));
    for (var i = 0; i < 10; i++) {
      result[0].cards.push(cardArray[choice]);
      cardArray.splice(choice, 1);
      choice = Math.floor(Math.random() * (cardArray.length - 1));
    }
  } else {
    result.push({ title: "", cards: [] });
    result.push({ title: "", cards: [] });
    var cardArray1 = chosenDecks[0].cards;
    result[0].title = chosenDecks[0].name;
    var cardArray2 = chosenDecks[1].cards;
    result[1].title = chosenDecks[1].name;
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
  result.forEach(deck =>
    deck.cards.sort((a, b) => {
      return a.title > b.title ? 1 : -1;
    })
  );
  return state.merge({
    result: result
  });
}

export default function(state = Map(), action) {
  switch (action.type) {
    case "GET_DECKS":
      return getDecks(state);
    case "SET_STATE":
      return resetVote(setState(state, action.state));
    case "ADD_TO_PAIR":
      return addToPair(state, action.entry);
    case "REMOVE_FROM_PAIR":
      return removeFromPair(state, action.entry);
    case "RANDOMIZE_CARDS":
      return randomizeCards(state);
    default:
      return state;
  }
}
