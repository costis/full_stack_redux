import {List, Map} from 'immutable';
import {expect} from 'chai';

import {setEntries} from '../src/core';
import {next} from '../src/core';

describe('application logic', () => {

  describe('setEntries', () => {

    it('adds the entries to the state', () => {
      const state = Map();
      const entries = List.of('Trainspotting', '28 Days Later');
      const nextState = setEntries(state, entries);

      expect(nextState).to.equal(
        Map({
          'entries': List.of('Trainspotting', '28 Days Later')
        })
      );
    });

    it('converts to immutable', () => {
      const state = Map();
      const entries = ['Trainspotting', '28 Days Later'];
      const nextState = setEntries(state, entries);

      expect(nextState).to.equal(
        Map({
          'entries': List.of('Trainspotting', '28 Days Later')
        })
      );
    });
    
  });


  describe('next', () => {

    it('takes the next two entries under vote', () => {
      const state = Map({
        entries: List.of('Trainspotting', '28 Days Later', 'Sunshine')
      })

      const nextState = next(state);
      console.log(nextState);

      expect(nextState).to.equal(Map({
          vote: Map({
            entries: List.of('Sunshine')
          }),
          pair: List.of('Trainspotting', '28 Days Later')
        }));
      });
  
  
  })
});
