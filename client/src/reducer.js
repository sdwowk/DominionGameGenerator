import { List, Map } from 'immutable';

function setState(state, newState) {
    return state.merge(newState);
}

function addToPair(state, entry) {
    const currentPair = state.get('pair');
    const removeFromList = state.get('decks');
    if(currentPair && currentPair.length < 2){
        currentPair.push(entry);
        removeFromList.splice(removeFromList.indexOf(entry));
        console.log("add to pair");
        console.log(state);
        return state.merge({
            'decks': removeFromList,
            'pair': currentPair
        });

    }else if(!currentPair){
        removeFromList.splice(removeFromList.indexOf(entry));
        console.log("no pair");
        console.log(state);
        return state.merge({
            'decks': removeFromList,
            'pair': [entry]
        });

    }
    console.log(state);
    return state
}

function resetVote(state) {
    const removeFromList = state.get('decks');
    removeFromList.remove(entry);
    const currentRound = state.get('pair');
    if (votedForRound !== currentRound) {
        return state.remove('myVote');
    } else {
        return state;
    }
}

function getDecks(state){
    const decks = require("./DominionDecks.json");
    return state.set('decks', decks);
}

export default function (state = Map(), action) {
    switch (action.type) {
        case 'GET_DECKS':
            return getDecks(state);
        case 'SET_STATE':
            return resetVote(setState(state, action.state));
        case 'ADD_TO_PAIR':
            return addToPair(state, action.entry);
        default:
            return state;
    }
}