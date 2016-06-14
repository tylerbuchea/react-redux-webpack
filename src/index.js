import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './js/stores';

import AppContainer from './js/containers/AppContainer';

const store = configureStore();

render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('app')
);
