import { List, Map, fromJS } from 'immutable';
import { expect } from 'chai';

import reducer from '../src/reducer';

describe('reducer', () => {
    it('Handles SET_STATE', () => {
        const initialState = Map();
        const action = {
            type: 'SET_STATE',
            state: Map({
                choices: Map({
                    pair: List.of('Dominion', 'Intrigue')
                })
            })
        };
        const nextState = reducer(initialState, action);

        expect(nextState).to.equal(fromJS({
            choices: {
                pair: ['Dominion', 'Intrigue'],
            }
        }));
    });

    it('Handles SET_STATE with plain JS payload', () => {
        const initialState = Map();
        const action = {
            type: 'SET_STATE',
            state: {
                choices: ['Dominion', 'Intrigue', 'Hinterlands', 'Prosperity'],
                pair: ['Dominion', 'Intrigue']

            }
        };
        const nextState = reducer(initialState, action);

        expect(nextState).to.equal(fromJS({
            choices: ['Dominion', 'Intrigue', 'Hinterlands', 'Prosperity'],
            pair: ['Dominion', 'Intrigue']
        }));
    });

    it('Handles SET_STATE without an initial state', () => {
        const action = {
            type: 'SET_STATE',
            state: {
                choices: {
                    pair: ['Dominion', 'Intrigue']
                }
            }
        };
        const nextState = reducer(undefined, action);

        expect(nextState).to.equal(fromJS({
            choices: {
                pair: ['Dominion', 'Intrigue']
            }
        }));
    });
});