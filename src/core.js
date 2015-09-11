import {List, Map} from 'immutable'

export function setEntries(state, entries){
  return state.set('entries', List(entries));
}

export function next(state){
  const entries = state.get('entries');

  return state.merge({
    vote: Map({
      pair: entries.take(2)
    }),
    entries: entries.skip(2)
  });
}

export function vote(state, movie_title) {
  return state.updateIn(
    ['vote', 'tally', movie_title], 0, tally => tally + 1
  );
}
