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
  removeFromPair = removeFromPair.splice(removeFromPair.indexOf(entry), 1);
  return state.merge({
    pair: removeFromPair,
    decks: addToList.push(entry)
  });
}

function resetVote(state) {
  const removeFromList = state.get("decks");
  removeFromList.remove(entry);
  const currentRound = state.get("pair");
  if (votedForRound !== currentRound) {
    return state.remove("myVote");
  } else {
    return state;
  }
}

function getDecks(state) {
  const decks = require("./DominionDecks.json");
  state = state.set("pair", []);
  return state.set("decks", decks);
}

function randomizeCards(state) {
  return state;
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
