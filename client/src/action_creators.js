export function getDecks() {
    return {
      type: 'GET_DECKS'
    };
  }
  
  export function setState(state) {
    return {
      type: 'SET_STATE',
      state
    };
  }
  
  export function addToPair(entry) {
    return {
      type: 'ADD_TO_PAIR',
      entry
    };
  }

  export function removeFromPair(entry) {
    return {
      type: 'REMOVE_FROM_PAIR',
      entry
    };
  }
  
  export function next() {
    return {
      meta: {remote: true},
      type: 'NEXT'
    };
  }
  
  export function restart() {
    return {
      meta: {remote: true},
      type: 'RESTART'
    };
  }