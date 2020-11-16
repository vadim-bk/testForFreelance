import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { App } from './components/App';
import reducers from './redux/rootReducer';

export const AppWrapper = () => {
  const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

  return (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
};
