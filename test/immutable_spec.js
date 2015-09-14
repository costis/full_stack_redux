import {expect} from 'chai';
import {List, Map} from 'immutable';

describe('immutability', () => {

  describe('a tree', () => {

    function addMovie(currentState, movie) {
      return currentState.update('movies', (movies) => movies.push(movie));
    }

    it('is immutable', () => {
      let state = Map({
        'movies': List.of('Movie 1', 'Movie 2')
      });

      let nextState = addMovie(state, 'Movie 3');

      expect(state).to.equal(
        Map({ 
          'movies': List.of('Movie 1', 'Movie 2')
        })
      );

      expect(nextState).to.equal(Map({
        'movies': List.of('Movie 1', 'Movie 2', 'Movie 3')
      }));
    });
  
  });

  describe('immutable list', () => {

    function addMovie(currentState, movie) {
      return currentState.push(movie);
    }

    it('is mutable', () => {
      let state = List.of('Trainspoting', '28 Days Later');
      let nextState = addMovie(state, 'Sunshine');

      expect(nextState).to.equal(List.of(
        'Trainspoting',
        '28 Days Later',
        'Sunshine'
      ));

      expect(state).to.equal(List.of(
        'Trainspoting',
        '28 Days Later'
      ));
    });

  });
});
