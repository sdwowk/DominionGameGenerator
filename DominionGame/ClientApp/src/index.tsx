import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import {Router, Route, hashHistory} from 'react-router';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducer';
import {getDecks, setState} from './action_creators';
import App from './App';
import {DominionContainer} from './components/DominionRandomizer';
import {ResultsContainer} from './components/Results';
import { styles } from './styles';
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
const baseUrl =
  document.getElementsByTagName("base")[0].getAttribute("href") || undefined;
const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter basename={baseUrl}>
    <App />
  </BrowserRouter>,
  rootElement
);
registerServiceWorker();

const store = createStore(reducer);
store.dispatch(getDecks());

const routes = <Route component={App}>
</Route>;

ReactDOM.render(
  <Provider store={store} >
    <Router history={hashHistory}>{routes}</Router>
  </Provider>,
  document.getElementById('app')
);