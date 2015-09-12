import {setEntries, next, vote, INITIAL_STATE} from './core';

export function reducer(state, action) {
  if (typeof state == 'undefined'){
    state = INITIAL_STATE
  }

  switch(action.type) {
    case 'SET_ENTRIES':
      return setEntries(state, action.entries);
    case 'NEXT':
      return next(state);
    case 'VOTE':
      return vote(state, action.entry);
  }
  return state;
}