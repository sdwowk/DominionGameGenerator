import React from 'react';
import ReactDOM from 'react-dom';
import {
    renderIntoDocument,
    scryRenderedDOMComponentsWithTag,
    Simulate
} from 'react-dom/test-utils';
import {List} from 'immutable';
import { expect } from 'chai';
import ChooseDeck from '../../src/components/ChooseDeck';

describe('Selecting Decks', () => {

    it('Renders a pair of buttons', () => {
        const component = renderIntoDocument(
            <ChooseDeck pair={["Dominion", "Intrigue"]} />
        );
        const buttons = scryRenderedDOMComponentsWithTag(component, 'button');

        expect(buttons.length).to.equal(2);
        expect(buttons[0].textContent).to.equal('Dominion');
        expect(buttons[1].textContent).to.equal('Intrigue');
    });

    it('Invokes callback when a button is clicked', () => {
        let votedWith;
        const vote = (entry) => votedWith = entry;

        const component = renderIntoDocument(
            <ChooseDeck pair={["Trainspotting", "28 Days Later"]} vote={vote} />
        );
        const buttons = scryRenderedDOMComponentsWithTag(component, 'button');
        Simulate.click(buttons[0]);

        expect(votedWith).to.equal('Trainspotting');
    });

    it('disables buttons when user has voted', () => {
        const component = renderIntoDocument(
          <ChooseDeck pair={["Trainspotting", "28 Days Later"]}
                  hasVoted="Trainspotting" />
        );
        const buttons = scryRenderedDOMComponentsWithTag(component, 'button');
      
        expect(buttons.length).to.equal(2);
        expect(buttons[0].hasAttribute('disabled')).to.equal(true);
        expect(buttons[1].hasAttribute('disabled')).to.equal(true);
      });

      it('Renders just the winner when there is one', () => {
          const component = renderIntoDocument(
              <ChooseDeck winner="Trainspotting"/>
          );
          const buttons = scryRenderedDOMComponentsWithTag(component, 'button');
          expect(buttons.length).to.equal(0);

          const winner = ReactDOM.findDOMNode(component.refs.winner);
          expect(winner).to.be.ok;
          expect(winner.textContent).to.contain('Trainspotting');
      });

      it('Does update DOM when prop changes', () => {
          const pair = List.of('Trainspotting', '28 Days Later');
          const container = document.createElement('div');
          let component = ReactDOM.render(
              <ChooseDeck pair={pair}/>,
              container
          );

          let firstButton = scryRenderedDOMComponentsWithTag(component, 'button')[0];
          expect(firstButton.textContent).to.equal('Trainspotting');

          const newPair = pair.set(0, 'Sunshine');
          component = ReactDOM.render(
              <ChooseDeck pair={newPair}/>,
              container
          );
          firstButton = scryRenderedDOMComponentsWithTag(component, 'button')[0];
          expect(firstButton.textContent).to.equal('Sunshine');
      });
});