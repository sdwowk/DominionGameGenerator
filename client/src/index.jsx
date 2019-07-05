import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducer';
import {getDecks, setState} from './action_creators';
import App from './components/App';
import {DominionContainer} from './components/DominionRandomizer';
import {ResultsContainer} from './components/Results';
import { styles } from './styles';



const store = createStore(reducer);
store.dispatch(getDecks());

const routes = <Route component={App}>
  <Route path="/" component={DominionContainer} />
  <Route path="/results" component={ResultsContainer} />
</Route>;

ReactDOM.render(
  <Provider store={store} >
    <Router history={hashHistory}>{routes}</Router>
  </Provider>,
  document.getElementById('app')
);