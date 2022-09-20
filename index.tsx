import { Provider, teamsTheme } from '@fluentui/react-northstar';
import * as React from 'react';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom';

import App from './App';

ReactDOM.render(
  <StrictMode>
    <Provider theme={teamsTheme}>
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById('root')
);
