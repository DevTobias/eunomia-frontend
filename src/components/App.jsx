import React from 'react';

import { Provider } from 'react-redux';
import store from '../app/store';

import MainRouter from './Router.component';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <MainRouter />
      </Provider>
    </div>
  );
}

export default App;
